export type TaskStatus = 'Pendiente' | 'En progreso' | 'Completada'

export interface Task {
  id: number
  title: string
  status: TaskStatus
  owner: string
  dueDate: string
}