import React, { useMemo, useState } from 'react'
import HeaderBar from '../components/HeaderBar'
import StatusFilter from '../components/StatusFilter'
import TaskList from '../components/TaskList'
import FooterBar from '../components/FooterBar'
import TaskFormDialog from '../components/TaskFormDialog'
import DeleteConfirmDialog from '../components/DeleteConfirmDialog'
import { Task, TaskStatus } from '../types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    title: 'Realizar el examen',
    status: 'Pendiente',
    owner: 'John Galarza',
    dueDate: '20/11/2025',
  },
  {
    id: 2,
    title: 'Realizar el proyecto',
    status: 'En progreso',
    owner: 'John Galarza',
    dueDate: '20/11/2025',
  },
  {
    id: 3,
    title: 'Realizar el laboratorio',
    status: 'Completada',
    owner: 'María Gómez',
    dueDate: '12/11/2025',
  },
]

const DashboardPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>('Pendiente')
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)
  const [formOpen, setFormOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null)

  const filtered = useMemo(
    () => tasks.filter((t) => t.status === selectedStatus),
    [tasks, selectedStatus]
  )

  const handleCreate = () => {
    setEditingTask(null)
    setFormOpen(true)
  }

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setFormOpen(true)
  }

  const handleDelete = (task: Task) => {
    setTaskToDelete(task)
    setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      setTasks((prev) => prev.filter((t) => t.id !== taskToDelete.id))
      setTaskToDelete(null)
    }
    setDeleteDialogOpen(false)
  }

  const handleSave = (task: Task) => {
    if (editingTask) {
      // Update existing task
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)))
    } else {
      // Create new task
      const newId = Math.max(0, ...tasks.map((t) => t.id)) + 1
      setTasks((prev) => [...prev, { ...task, id: newId }])
    }
    setFormOpen(false)
    setEditingTask(null)
  }

  const handleView = (task: Task) => {
    alert(`Ver tarea:\n\nTítulo: ${task.title}\nEstado: ${task.status}\nResponsable: ${task.owner}\nFecha límite: ${task.dueDate}`)
  }

  return (
    <Box>
      <HeaderBar title="Course Tasks Dashboard" userName="Estudiante React" />

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusFilter selected={selectedStatus} onChange={setSelectedStatus} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Nueva Tarea
        </Button>
      </Box>

      <Box sx={{ mt: 3 }}>
        <TaskList
          tasks={filtered}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <FooterBar />
      </Box>

      <TaskFormDialog
        open={formOpen}
        task={editingTask}
        onClose={() => {
          setFormOpen(false)
          setEditingTask(null)
        }}
        onSave={handleSave}
      />

      <DeleteConfirmDialog
        open={deleteDialogOpen}
        taskTitle={taskToDelete?.title || ''}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  )
}

export default DashboardPage