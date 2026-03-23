export interface NewUserPayload {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  username: string;
}

export interface LoginPayload {
  user: string,
  password: string
}

export interface ReqResponse {
  data: null;
  message: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

export interface SubjectsResponse {
  items: Subject[];
  metadata: Metadata;
}

export class Metadata {
  num_pages: number;
  page: number;
  size: number;
  total_items: number;

  constructor() {
    this.num_pages = 0
    this.page = 0
    this.size = 0
    this.total_items = 0
  }
}

export interface Subject {
  code: string;
  created_at: string;
  id: string;
  name: string;
  s_id: number;
}

export interface syncSubjectPayload {
  name: string,
  s_id: number
}

export interface SessionsResponse {
  items: Session[];
  metadata: Metadata;
}

export interface Session {
  created_at: string;
  end_date: string;
  id: string;
  is_active: boolean;
  name: string;
  start_date: string;
}

export interface newSessionPayload {
  end_date: string;
  name: string;
  start_date: string;
}

export interface ExamsResponse {
  items: Exam[];
  metadata: Metadata;
}
export interface OrgAdminsResponse {
  data: {
      items: ExaminerDTO[];
      metadata: Metadata;
  },
  message: string
}

export interface ExaminerDTO {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  username: string,
  password?: string,
}

export interface Exam {
  delivery_method: string;
  duration: number;
  end_date: string;
  exam_type: string;
  has_passport: boolean;
  id: string;
  name: string;
  registration_url: string;
  session_id: string;
  start_date: string;
  status: string;
  verification_method: string;
  exam_settings: AssessmentSettingsPublishDtoItembank
}

export interface AssessmentSettingsPublishDtoItembank {
  startExamInstruction?: string;
  endExamInstruction?: string;
  startDate: string;
  endDate: string;
  durationMinutes: number;
  displayAllSectionsAtOnce: boolean;
  instructionReadTimeSec: number;
  warnEndOfReadingTimeSec: number;
  autoSaveSec: number;
  inactivityWaringSec: number;
  warnUnattemptedQuestions: boolean;
  endExamConfirmation: boolean;
  allowEndExamAfterXQuestions: number;
  preserveSectionOrder: boolean;
  fontSize: AssessmentFont;
  deliveryMethod: DeliveryMethod;
  compensatoryTimeMins: number;
  instantResult: boolean;
  passMark: number;
  description: string;
  allowBlockNavigation: boolean;
  examGracePeriod: number;
  candidateGracePeriod: number;
  earliestExamEndPeriod: number;
  examType: ExamType;
  useBiometrics: boolean;
}

export type AssessmentFont = "SMALL" | "MEDIUM" | "LARGE";
export type DeliveryMethod = "ONLINE" | "OFFLINE";
export type ExamType = "PRACTICE" | "FINAL" | "MOCK";

export interface CentersResponse {
  id: string;
  exam_name: string;
  centres: Centres;
}

export interface Centres {
  items: Center[];
  metadata: Metadata;
}

export interface Center {
  id: string;
  centre_name: string;
  centre_id: string;
  num_of_participants_in_centre: number;
  pushed: boolean;
  date_of_sync: string;
}

export interface CentersStat {
  exam_name: string;
  pushed_centres: number;
  pushed_participants: number;
  total_centres: number;
  total_participants: number;
}

export interface ParticipantsResponse {
  exam_id: string;
  session_id: string;
  exam_name: string;
  participants: Participants;
}

export interface Participants {
  items: Participant[];
  metadata: Metadata;
}

export interface Participant {
  centre_id: number;
  email: string;
  exam_number: string;
  name: string;
  passport_pushed: boolean;
  phone: string;
  pushed: boolean;
  session: number;
  subjects: string;
}

export interface ParticipantsState {
  passport_pushed: number;
  pushed_participants: number;
  total_participants: number;
}

export interface SyncSubjects {
  data: SyncedExamItem[];
  message: string;
}

export interface SyncedExamItem {
  delivery_method: string;
  duration: number;
  id: string;
  name: string;
  status: string;
}

export interface pushToExamAlpha {
  ip: string,
  protocol: string
}

export enum Server {
 CLOUD = 'CLOUD',
 VPN = 'VPN'
}