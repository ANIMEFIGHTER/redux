
import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    const addTask = (text) => {
        const task = {
            text,
            key: Date.now(),
        }
        dispatch({type:"ADD_TASK", payload: task})
        console.log(task);
    }

    return (
        <div className="App">
            <div style={{fontSize:"3rem"}}> {tasks}</div>
            <div style={{display:"flex"}}>
                <button onClick={() => addTask(prompt())}>Добавить задачу</button>
            </div>
            {tasks.length > 0 ?
                <div>
                    {tasks.map(task =>
                            <div>{task.text}</div>
                        )}
                </div>
                :
                <div style={{fontSize:"2rem", marginTop:20}}>
                    Задачи отсутствуют!
                </div>

            }
        </div>
    );
}

export default App;
