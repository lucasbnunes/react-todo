import React, { useRef } from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import './TaskList.css';

function TaskList({
  tasks,
  deleteTask,
  enableEdit,
  editIndex,
  handleEdit,
  disableEdit,
  finishTask,
  areFinished,
}) {
  const inputRef = useRef();

  if (areFinished) {
    return (
      <div className="TaskList --finished">
        {tasks
          .filter((task) => task.finished)
          .map((task) => {
            return (
              <div className="TaskList__row" key={task.id}>
                <span className="TaskList__text" ref={inputRef}>
                  {task.task}
                </span>
                <div className="TaskList__icons">
                  <div></div>
                  <MdDelete onClick={() => deleteTask(task.id)} />
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div className="TaskList">
      {tasks
        .filter((task) => !task.finished)
        .map((task) => {
          if (task.id === editIndex) {
            return (
              <div className="TaskList__row" key={task.id}>
                <input
                  value={task.task}
                  onChange={handleEdit}
                  className="TaskList__text"
                  onBlur={disableEdit}
                  autoFocus={true}
                />
                <div className="TaskList__icons"></div>
              </div>
            );
          }

          return (
            <div className="TaskList__row" key={task.id}>
              <span
                className="TaskList__text"
                ref={inputRef}
                onClick={() => enableEdit(task.id, inputRef)}
              >
                {task.task}
              </span>
              <div className="TaskList__icons">
                <MdDone onClick={() => finishTask(task.id)} />
                <MdDelete onClick={() => deleteTask(task.id)} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TaskList;
