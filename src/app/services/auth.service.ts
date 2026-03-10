import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import type { AuthRequest, AuthResponse } from '../models/updater.models';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private _http = inject(HttpClient);
    readonly authData = signal<AuthResponse | null>(null);
    private _domain = environment.apiUrl

	constructor() {
		this.restoreSession();
	}

	private restoreSession(): void {
		const raw = localStorage.getItem('AUTH');
		if (!raw) {
			this.authData.set(null);
			return;
		}

		try {
			const parsed = JSON.parse(raw) as AuthResponse;
			// Minimal shape check
			if (!parsed?.access_token || !parsed?.refresh_token || !parsed?.id) {
				throw new Error('Invalid auth payload');
			}
			this.authData.set(parsed);
		} catch {
			localStorage.removeItem('AUTH');
			this.authData.set(null);
		}
	}

	login(payload: AuthRequest): Observable<AuthResponse> {
		return this._http.post<AuthResponse>(`${this._domain}/api/updater/auth`, payload).pipe(
			tap((res) => {
				localStorage.setItem('AUTH', JSON.stringify(res));
                this.authData.set(res);
            }),
		);
	}

	logout(): Observable<void> {
		return this._http
			.post<void>(`${this._domain}/api/updater/logout`, null)
			.pipe(finalize(() => this.clearSession()));
	}

	clearSession(): void {
        localStorage.removeItem('AUTH');
        this.authData.set(null);
	}

	isAuthenticated(): boolean {
		return Boolean(this.authData());
	}
}
