export interface JobObj {
  name: string;
  progress: number;
}

export interface Job extends JobObj {
  id: string;
}
