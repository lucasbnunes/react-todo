import { useEffect, useState } from 'react';
import Input from './Input';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks');

    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleChange({ target }) {
    if (taskBeingEdited !== null) {
      const newTasks = [...tasks];

      newTasks[taskBeingEdited] = target.value;

      setTasks(newTasks);
    } else {
      setTaskInput(target.value);
    }
  }

  function addTask() {
    if (taskInput) {
      const newobj = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
        task: taskInput,
        finished: false,
      };
      setTasks((prevTasks) => [...prevTasks, newobj]);
      setTaskInput('');
      setTaskBeingEdited(null);
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task) => task.id !== index);

    setTasks(newTasks);
    setTaskBeingEdited(null);
  }

  function editTask(index, ref) {
    setTaskBeingEdited(index);
    focusOnEdit(ref);

    function focusOnEdit(focusTarget) {
      focusTarget.current.focus();
    }
  }

  function finishTask(index) {
    setTasks((prevTasks) => {
      return prevTasks.map((prevTask) => {
        if (prevTask.id === index) {
          prevTask.finished = true;
        }

        return prevTask;
      });
    });
  }

  return (
    <div className="App">
      <Input
        value={taskInput}
        text="Add"
        onChange={handleChange}
        onClick={addTask}
        placeholder="Cook dinner"
      />
      <div className="App__section">
        <h3>Unfinished tasks 🎯</h3>
        {(tasks && taskBeingEdited === null && (
          <TaskList
            tasks={tasks}
            enableEdit={editTask}
            deleteTask={deleteTask}
            finishTask={finishTask}
            areFinished={false}
          />
        )) ||
          (tasks && taskBeingEdited !== null && (
            <TaskList
              tasks={tasks}
              enableEdit={editTask}
              deleteTask={deleteTask}
              editIndex={taskBeingEdited}
              handleEdit={handleChange}
              disableEdit={() => setTaskBeingEdited(null)}
              areFinished={false}
            />
          ))}
      </div>

      <div className="App__section">
        <h3>Finished tasks ✔️</h3>
        <TaskList tasks={tasks} deleteTask={deleteTask} areFinished={true} />
      </div>
    </div>
  );
}

export default App;
