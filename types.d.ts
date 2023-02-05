export interface ITodo {
  created_at?: unknown;
  description?: string;
  id?: string;
  is_completed?: boolean;
  title?: string;
  user_id?: string;
}

export type ITodos = ITodo[];
