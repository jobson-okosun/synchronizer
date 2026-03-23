import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginPayload, LoginResponse, NewUserPayload, ReqResponse } from '../models/types';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private _http = inject(HttpClient);
    private _domain = environment.apiUrl

    readonly authData = signal<LoginResponse | null>(null);
	
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
			const parsed = JSON.parse(raw) as LoginResponse;
			if (!parsed?.id || !parsed?.first_name) {
				throw new Error('Invalid auth payload');
			}
			this.authData.set(parsed);
		} catch {
			localStorage.removeItem('AUTH');
			this.authData.set(null);
		}
	}

	signup(payload: NewUserPayload): Observable<ReqResponse> {
		return this._http.post<ReqResponse>(`${this._domain}/users/register`, payload)
	}

	login(payload: LoginPayload): Observable<LoginResponse> {
		return this._http.post<LoginResponse>(`${this._domain}/auth/login`, payload).pipe(
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
