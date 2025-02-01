import { MdCheck, MdDeleteForever } from "react-icons/md";  //From React icon it is use for icon as like check delete etc

export const TodoList = ({data, checked, onHandleDeleteTodo, onHandleCheckedTodo, }) => {
    return (
        <li className="todo-item">
        <span className = {checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}><MdCheck /></button>
        <button className="delete-btn" onClick={()=> onHandleDeleteTodo(data)}><MdDeleteForever /></button>
    </li>
    );
};