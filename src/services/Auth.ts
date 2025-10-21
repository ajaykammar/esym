import api from "./Api";

// Define types for credentials and responses
export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  [key: string]: any; // for extra fields
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface GoogleLoginPayload {
  credential: string;
  clientId: string;
  select_by?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  institution?: string;
  picture?: string;
  [key: string]: any;
}

// Register User
export const RegUser = async (
  credentials: RegisterCredentials
): Promise<UserProfile> => {
  const { data } = await api.post<UserProfile>(
    "/api/user/register/",
    credentials
  );
  return data;
};

export const studentsRegUser = async (
  credentials: RegisterCredentials
): Promise<UserProfile> => {
  const { data } = await api.post<UserProfile>(
    "/api/students/register/",
    credentials
  );
  return data;
};

// Student Login
export const StudentLogin = async (
  credentials: LoginCredentials
): Promise<{ token: string; user: UserProfile }> => {
  const { data } = await api.post<{ token: string; user: UserProfile }>(
    "/api/students/login/",
    credentials
  );
  return data;
};

// Normal Login
export const Login = async (
  credentials: LoginCredentials
): Promise<{ token: string; user: UserProfile }> => {
  const { data } = await api.post<{ token: string; user: UserProfile }>(
    "/api/user/login/",
    credentials
  );
  return data;
};

// Google Login
export const LoginWithGoogle = async (
  payload: GoogleLoginPayload
): Promise<{ token: string; user: UserProfile }> => {
  const { data } = await api.post<{ token: string; user: UserProfile }>(
    "/api/students/googlelogin/",
    payload
  );
  return data;
};

// Get Profile
export const Profile = async (id: string): Promise<UserProfile> => {
  const { data } = await api.get<UserProfile>(`/api/user/profile/${id}`);
  return data;
};

// Contact Us
export const ConctactUS = async (
  credentials: RegisterCredentials
): Promise<UserProfile> => {
  const { data } = await api.post<UserProfile>("api/contact_us/", credentials);
  return data;
};
