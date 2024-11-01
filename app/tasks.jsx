const Tasks = ({ tasks, setListOfTasks, toggleComplete }) => {
  const deleteTask = (i) => {
    const updateTasks = tasks.filter((_, index) => i !== index)
    setListOfTasks(updateTasks)
    localStorage.setItem("tasks", JSON.stringify(updateTasks))
  }

  const CheckComplete = () => {
    return (
      <div>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path>
        </svg>
      </div>
    )
  }
  const Loader = () => {
    return (
      <div className='loader'>
        <span className='hour'></span>
        <span className='min'></span>
        <span className='circel'></span>
      </div>
    )
  }
  return (
    <div className='tasks_container'>
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
            className={`t_card ${task.complete ? "complete" : "incomplete"}`}
          >
            <div className='t_c_head'>
              <h3>
                {task.complete ? <CheckComplete /> : <Loader />}
                &nbsp;{task.complete ? "Completada" : "Pendiente"}
              </h3>
            </div>
            <div className='t_c_body'>
              <span>Descripcion</span>
              <p>{task.task}</p>
            </div>
            <div className={`t_c_footer ${task.date ? "" : "dateOff"}`}>
              <span>Se vence el</span>
              <p>{task.date}</p>
            </div>
            <div className='t_delete'>
              <button onClick={() => toggleComplete(index)} type='button'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path>
                </svg>
              </button>
              <button onClick={() => deleteTask(index)} type='button'>
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
          </div>
        )
      })}
    </div>
  )
}

export default Tasks
