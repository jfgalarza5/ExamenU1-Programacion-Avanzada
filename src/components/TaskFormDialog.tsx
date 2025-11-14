import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { Task, TaskStatus } from '../types'

interface Props {
  open: boolean
  task: Task | null
  onClose: () => void
  onSave: (task: Task) => void
}

const TaskFormDialog: React.FC<Props> = ({ open, task, onClose, onSave }) => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState<TaskStatus>('Pendiente')
  const [owner, setOwner] = useState('')
  const [dueDate, setDueDate] = useState('')

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setStatus(task.status)
      setOwner(task.owner)
      setDueDate(task.dueDate)
    } else {
      setTitle('')
      setStatus('Pendiente')
      setOwner('')
      setDueDate('')
    }
  }, [task, open])

  const handleSubmit = () => {
    if (!title.trim() || !owner.trim() || !dueDate.trim()) {
      alert('Por favor completa todos los campos')
      return
    }

    const taskData: Task = {
      id: task?.id || 0,
      title: title.trim(),
      status,
      owner: owner.trim(),
      dueDate: dueDate.trim(),
    }

    onSave(taskData)
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{task ? 'Editar Tarea' : 'Nueva Tarea'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Título"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <TextField
            label="Estado"
            fullWidth
            select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            required
          >
            <MenuItem value="Pendiente">Pendiente</MenuItem>
            <MenuItem value="En progreso">En progreso</MenuItem>
            <MenuItem value="Completada">Completada</MenuItem>
          </TextField>

          <TextField
            label="Responsable"
            fullWidth
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />

          <TextField
            label="Fecha límite (dd/mm/yyyy)"
            fullWidth
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="20/11/2025"
            required
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {task ? 'Actualizar' : 'Crear'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TaskFormDialog