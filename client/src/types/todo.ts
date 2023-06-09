export interface Todo {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description?: string;
  status: 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';
  priority: 'Low' | 'Medium' | 'High';
  userId: number;
  roomId: number;
}
