import React, { ReactElement, useState, useEffect } from 'react'
import { Task } from "./ui/task"
import { Link } from 'react-router-dom'

export const TasksPage = (): ReactElement => {
  const [taskList, setTaskList] = useState([])

  useEffect((): any => {
    fetch("http://localhost:5000/tasks").then((res) => res.json()).then((res) => setTaskList(res))
  }, [])

  return (
    <div>
      <Link to="/tasks/create"><button>create task</button></Link>

      <div>
        {taskList.map((task: any): ReactElement => <Task key={task.id} {...task} />)}
      </div>
    </div>
  )
}