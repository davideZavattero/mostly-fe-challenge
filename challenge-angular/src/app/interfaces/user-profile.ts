export interface UserProfile {
  name: string;
  email: string;
}

export interface UserProfileFull extends UserProfile {
  token: string;
}
