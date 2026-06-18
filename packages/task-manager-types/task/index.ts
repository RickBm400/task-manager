export type Priority = 'CRITIC' | 'HIGH' | 'MEDIUM' | 'LOW';

export type Task = {
  title: String;
  description: String | null;
  priority: Priority;
  createdAt: Date;
};
