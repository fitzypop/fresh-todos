export interface ITodo {
  id?: string;
  text?: string;
  is_completed?: boolean;
  created_at?: unknown;
}

export type ITodos = ITodo[];
