export type DreamStatus =
  | "planning"
  | "in-progress"
  | "completed";

export type DreamCategory =
  | "Australia"
  | "Tablet"
  | "House"
  | "Car"
  | "Travel"
  | "Study"
  | "Camera"
  | "Wedding";

export interface DreamChecklist {
  id: string;
  title: string;
  completed: boolean;
}

export interface DreamTimeline {
  id: string;
  year: number;
  title: string;
  completed: boolean;
}

export interface DreamBudget {
  target: number;
  saved: number;
}

export interface Dream {
  id: string;

  title: string;

  emoji: string;

  description: string;

  category: DreamCategory;

  current: number;

  target: number;

  deadline: string;

  targetYear: number;

  status: DreamStatus;

  budget: DreamBudget;

  checklist: DreamChecklist[];

  timeline: DreamTimeline[];

  notes: string;

  gallery: string[];

  coverImage?: string;
}