"use client"
import React from "react"
import Tasks from "./tasks"
import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import Image from "next/image"
import todo from "@/public/todolist.webp"
import "react-toastify/dist/ReactToastify.css"

const AppToDo = () => {
  const notify = () =>
    toast.error("No se puede agregar una tarea vacia", {
      position: "bottom-center",
    })

  const [listOfTasks, setListOfTasks] = useState([])
  const [taskDate, setTaskDate] = useState("")
  const [tasks, setTasks] = useState("")

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    if (tasks) {
      setListOfTasks(tasks)
    }
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (tasks.trim() === "") {
      notify()
      return
    }
    const newTask = {
      task: tasks,
      date: taskDate,
      complete: null,
    }
    setListOfTasks([...listOfTasks, newTask])
    localStorage.setItem("tasks", JSON.stringify([...listOfTasks, newTask]))
    setTasks("")
  }

  const handleClearTasks = () => {
    localStorage.clear("tasks")
    setListOfTasks([])
  }
  const toggleComplete = (index) => {
    setListOfTasks((prev) => {
      const updatedTasks = prev.map((task, i) =>
        i === index ? { ...task, complete: !task.complete } : task
      )

      // Actualizar localStorage con la nueva lista de tareas
      localStorage.setItem("tasks", JSON.stringify(updatedTasks))

      // Devolver la nueva lista de tareas para actualizar el estado
      return updatedTasks
    })
  }
  return (
    <section className='main_section'>
      <div className='form_container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='task'>¿Que vamos hacer hoy?</label>
          <input
            placeholder='Nueva tarea...'
            type='text'
            name='task'
            id='task'
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
          <label htmlFor='date'>Establecer fecha limite </label>
          <input
            id='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type='date'
          />
          <ToastContainer />
          <div className='t_buttons'>
            <button type='submit'>Crear</button>
            <button type='button' onClick={handleClearTasks}>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 448 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'></path>
              </svg>
            </button>
          </div>
        </form>
        <div className='t_title'>
          <div>
            <h2>TO DO</h2>
            <span>list</span>
          </div>
          <p>Fácil y rápido</p>
        </div>
      </div>

      <Tasks
        setListOfTasks={setListOfTasks}
        tasks={listOfTasks}
        toggleComplete={toggleComplete}
      />
      <div style={{ marginTop: "5em" }}>
        <a target='_blank' href='https://antonyleon.com'>
          antonyLeon.com
        </a>
      </div>
    </section>
  )
}

export default AppToDo
