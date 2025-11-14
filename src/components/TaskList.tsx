import React from 'react'
import { Task } from '../types'
import Stack from '@mui/material/Stack'
import TaskCard from './TaskCard'
import Typography from '@mui/material/Typography'

interface Props {
  tasks: Task[]
  onView: (task: Task) => void
  onEdit: (task: Task) => void
  onDelete: (task: Task) => void
}

const TaskList: React.FC<Props> = ({ tasks, onView, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ color: 'text.secondary', py: 4 }}>
        No hay tareas en este estado.
      </Typography>
    )
  }

  return (
    <Stack spacing={2}>
      {tasks.map((t) => (
        <TaskCard
          key={t.id}
          task={t}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  )
}

export default TaskList