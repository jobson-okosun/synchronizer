import { HttpClient, httpResource, HttpResourceRef } from "@angular/common/http";
import { inject, Injectable, InputSignal, linkedSignal, Signal, signal } from "@angular/core";
import { environment } from "../../environments/environment";
import { CentersResponse, CentersStat, Exam, ExamsResponse, newSessionPayload, OrgAdminsResponse, ParticipantsResponse, ParticipantsState, pushToExamAlpha, ReqResponse, Server, Session, SessionsResponse, SubjectsResponse, syncSubjectPayload, SyncSubjects } from "../models/types";
import { Observable, tap } from "rxjs";


@Injectable({ providedIn: 'root'})
export default class DataService {
    private _http = inject(HttpClient)
    private _domain = environment.apiUrl

    serverTypes = signal(Server)
    selectedServer = linkedSignal(() => this.serverTypes().VPN)
    currentSession = signal<Session | null>(null)
    selectedSession = signal<Session | null>(null)
    sessions = signal<Session[] | null>(null)

    fetchSubjects(size: Signal<number>, page: Signal<number>): HttpResourceRef<SubjectsResponse | undefined> {
        return httpResource<SubjectsResponse | undefined>(() => `${this._domain}/subjects?page=${ page() }&size=${ size() }`)
    }

    deleteSubject(subjectId: string): Observable<ReqResponse> {
        return this._http.delete<ReqResponse>(`${this._domain}/subjects/${ subjectId }`)
    }

    syncSubject(payload: syncSubjectPayload): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/subjects`, payload)
    }

    fetchSessions(size: Signal<number>, page: Signal<number>): HttpResourceRef<SessionsResponse | undefined> {
        return httpResource<SessionsResponse | undefined>(() => `${this._domain}/sessions?page=${ page() }&size=${ size() }`)
    }

    createSession(payload: newSessionPayload): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/sessions`, payload)
    }

    makeSessionCurrent(sessionId: string): Observable<ReqResponse> {
        return this._http.patch<ReqResponse>(`${this._domain}/sessions/${ sessionId }/activate`, {})
    }

    fetchOrgAdmins(size: Signal<number>, page: Signal<number>, server: Signal<string>): HttpResourceRef<OrgAdminsResponse | undefined> {
        return httpResource<OrgAdminsResponse | undefined>(() =>  this.selectedSession()?.id && server() ? `${this._domain}/centres/admins/download?page=${ page() }&size=${ size() }` : undefined)
    }

    fetchExams(size: Signal<number>, page: Signal<number>): HttpResourceRef<ExamsResponse | undefined> {
        return httpResource<ExamsResponse | undefined>(() =>  this.selectedSession()?.id ? `${this._domain}/exams/${ this.selectedSession()?.id }?page=${ page() }&size=${ size() }` : undefined)
    }

    pullExamsForSync(trigger: Signal<boolean>): HttpResourceRef<SyncSubjects | undefined> {
        return httpResource<SyncSubjects | undefined>(() => trigger() ? `${this._domain}/exams/pull-jamb-exams-from-ea` : undefined)
    }

    syncExam(examId: string): Observable<ReqResponse> {
        return this._http.get<ReqResponse>(`${this._domain}/exams/sync/session/${ this.selectedSession()?.id }/exam/${ examId }`)
    }

    publishExam(examId: string): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/exams/publish-assessment`, { assessment_id: examId })
    }

    fetchExam(examId: InputSignal<string | undefined>): HttpResourceRef<Exam | undefined> {
        return httpResource<Exam | undefined>(() => `${this._domain}/exams/details/${ examId() }`)
    }

    importCenters(payload: FormData): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/centres/import/${ this.selectedSession()?.id }`, payload)
    }

    ImportCenterAdmin(payload: FormData): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/centres/import-base-ids/${ this.selectedSession()?.id }`, payload)
    }

    pushCentersToExamAlpha(payload: pushToExamAlpha, examId: string): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/centres/send-to-server/${ examId }/session/${ this.selectedSession()?.id }`, payload)
    }

    uploadOrgAdmin(): Observable<ReqResponse> {
        return this._http.patch<ReqResponse>(`${this._domain}/centres/admins/register/${ this.selectedSession()?.id }`, {})
    }

    exportCenterAdmins(examId: string): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/centres/admins/export/exam/${ examId }/session/${ this.selectedSession()?.id }`, {})
    }

    pushParticipantToExamAlpha(payload: pushToExamAlpha, examId: string): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/participants/export/exam/${ examId }/session/${ this.selectedSession()?.id }`, payload)
    }

    importParticipants(payload: FormData): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/participants/import/${ this.selectedSession()?.id }`, payload)
    }

    exportPassport(examId: string): Observable<ReqResponse> {
        return this._http.post<ReqResponse>(`${this._domain}/passports/upload/session/${ this.selectedSession()?.id }/exam/${ examId }`, {})
    }

    fetchCenters(size: Signal<number>, page: Signal<number>, examId: InputSignal<string | undefined>): HttpResourceRef<CentersResponse | undefined> {
        return httpResource<CentersResponse | undefined>(() => this.selectedSession()?.id ? `${this._domain}/exams/${ examId() }/session/${ this.selectedSession()?.id }/centres?page=${ page() }&size=${ size() }` : undefined)
    }

    fetchParticipants(size: Signal<number>, page: Signal<number>, examId: InputSignal<string | undefined>): HttpResourceRef<ParticipantsResponse | undefined> {
        return httpResource<ParticipantsResponse | undefined>(() => this.selectedSession()?.id ? `${this._domain}/exams/${ examId() }/session/${ this.selectedSession()?.id }/participants?page=${ page() }&size=${ size() }` : undefined)
    }

    fetchExamCentersStats(examId: InputSignal<string | undefined>): HttpResourceRef<CentersStat | undefined> {
        return httpResource<CentersStat | undefined>(() => this.selectedSession()?.id ? `${this._domain}/centres/exam/${ examId() }/session/${ this.selectedSession()?.id }/stats` : undefined)
    }

    fetchExamParticipantsStats(examId: InputSignal<string | undefined>): HttpResourceRef<ParticipantsState | undefined> {
        return httpResource<ParticipantsState | undefined>(() => this.selectedSession()?.id ? `${this._domain}/exams/${ examId() }/session/${ this.selectedSession()?.id }/participants/stats` : undefined)
    }


    fetchSessionsData() {
        this._http.get<SessionsResponse>(`${this._domain}/sessions`).pipe(
            tap((res) => {
                this.sessions.set(res.items)
            })
        ).subscribe()
    }

    fetchCurrentSession() {
        this._http.get<Session>(`${this._domain}/sessions/active`).pipe(
            tap((res) => {
                this.currentSession.set(res)
                this.selectedSession.set(res)
            })
        ).subscribe()
    }

    downloadAdmins(size: number, page: number): Observable<OrgAdminsResponse> {
        return this._http.get<OrgAdminsResponse>(`${this._domain}/centres/admins/download`, { params: { size, page } });
    }
}