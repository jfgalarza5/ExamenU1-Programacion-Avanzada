import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { Task } from '../types'

interface Props {
  task: Task
  onView: (task: Task) => void
  onEdit: (task: Task) => void
  onDelete: (task: Task) => void
}

const colorFor = (status: Task['status']) => {
  if (status === 'Pendiente') return { label: 'Pendiente', color: 'warning' as const }
  if (status === 'En progreso') return { label: 'En progreso', color: 'info' as const }
  return { label: 'Completada', color: 'success' as const }
}

const TaskCard: React.FC<Props> = ({ task, onView, onEdit, onDelete }) => {
  const badge = colorFor(task.status)

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h6">{task.title}</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={badge.label} color={badge.color as any} />
            <IconButton
              size="small"
              color="error"
              onClick={() => onDelete(task)}
              aria-label="eliminar"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          Responsable: {task.owner}
        </Typography>

        <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
          Fecha límite: {task.dueDate}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => onView(task)}>
          Ver
        </Button>
        <Button size="small" onClick={() => onEdit(task)}>
          Editar
        </Button>
      </CardActions>
    </Card>
  )
}

export default TaskCard