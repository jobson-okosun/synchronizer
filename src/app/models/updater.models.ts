export interface AuthRequest {
	email: string;
	password: string;
}

export interface AuthResponse {
	id: string;
	refresh_token: string;
	access_token: string;
	token_type: string;
}

export interface CreateProjectRequest {
	name: string;
	description: string;
	client: string;
}

export interface Project {
	id: string;
	name: string;
	description: string;
	client?: string;
	created_at: string;
	updated_at?: string;
	created_by?: string;
}

export interface Version {
	id: string;
	project_id: string;
	version: string;
    arch: string;
	notes: string;
	pub_date: string;
	created_at: string;
	updated_at: string;
	active: boolean;
	signature: string;
	target: string;
	file_name: string;
}

export interface CreateVersionRequest {
	version: string;
	notes: string;
	signature: string;
	target: string;
	file: File | null;
}

export interface MessageResponse {
	message: string;
}

export interface UpdateCheckResponse {
	version: string;
	notes: string;
	pub_date: string;
	url: string;
	signature: string;
}
