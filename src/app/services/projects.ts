import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type {
    CreateProjectRequest,
    CreateVersionRequest,
    MessageResponse,
    Project,
    Version,
} from '../models/updater.models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export default class ProjectsService {
    private _http = inject(HttpClient);
    private _domain = environment.apiUrl;

    createProject(payload: CreateProjectRequest): Observable<Project> {
        return this._http.post<Project>(`${this._domain}/api/updater/projects/create`, payload);
    }

    listProjects(): Observable<Project[]> {
        return this._http.get<Project[]>(`${this._domain}/api/updater/projects/list`);
    }

    getProject(projectId: string): Observable<Project> {
        return this._http.get<Project>(`${this._domain}/api/updater/projects/get/${encodeURIComponent(projectId)}`);
    }

    createVersion(projectId: string, payload: CreateVersionRequest): Observable<Version> {
        const formData = new FormData();
        formData.append('version', payload.version);
        formData.append('notes', payload.notes);
        formData.append('signature', payload.signature);
        formData.append('target', payload.target);
        formData.append('file', payload.file as any);
        formData.append('arch', (payload as any).arch || '');

        return this._http.post<Version>(
            `${this._domain}/api/updater/versions/create/${encodeURIComponent(projectId)}`,
            formData,
        );
    }

    listVersions(projectId: string): Observable<Version[]> {
        return this._http.get<Version[]>(`${this._domain}/api/updater/versions/list/${encodeURIComponent(projectId)}`);
    }

    getVersion(versionId: string): Observable<Version> {
        return this._http.get<Version>(`${this._domain}/api/updater/versions/get/${encodeURIComponent(versionId)}`);
    }

    activateVersion(versionId: string): Observable<MessageResponse> {
        return this._http.patch<MessageResponse>(
            `${this._domain}/api/updater/versions/activate/${encodeURIComponent(versionId)}`,
            {},
        );
    }

    deactivateVersion(versionId: string): Observable<MessageResponse> {
        return this._http.patch<MessageResponse>(
            `${this._domain}/api/updater/versions/deactivate/${encodeURIComponent(versionId)}`,
            {},
        );
    }
}
