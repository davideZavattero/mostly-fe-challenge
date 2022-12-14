export interface JobName {
  name: string;
}

export interface JobProgress {
  progress: number;
}

export interface JobObj extends JobName {
  progress: number;
}

export interface Job extends JobObj {
  id: string;
}

export interface JobsList {
  [key: string]: Job;
}
