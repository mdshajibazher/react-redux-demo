import { useDispatch } from "react-redux";
import CancelImage from "../assets/images/cancel.png";
import { toggled, colorSelected, deleted } from "../redux/todos/actions";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateColor from "../redux/todos/thunk/updateColor";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
export default function Todo({ todo }) {
  const { text, id, completed, color } = todo;
  const dispatch = useDispatch();
  const handleStatusChange = (todoId, completed) => {
    dispatch(updateStatus(todoId, completed));
  };

  const handleColorChange = (id, color) => {
    dispatch(updateColor(id, color));
  };

  const handleRemove = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id, completed)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {text}
      </div>

      <div
        onClick={() => handleColorChange(id, "green")}
        className={`flex-shrink-0 h-4 w-4 border-green-500 hover:bg-green-500 rounded-full border-2 ml-auto cursor-pointer ${
          color === "green" && "bg-green-500"
        } `}
      ></div>

      <div
        onClick={() => handleColorChange(id, "yellow")}
        className={`flex-shrink-0 h-4 border-yellow-500 hover:bg-yellow-500 w-4 rounded-full border-2 ml-auto cursor-pointer ${
          color === "yellow" && "bg-yellow-500"
        } `}
      ></div>

      <div
        onClick={() => handleColorChange(id, "red")}
        className={`flex-shrink-0 h-4 border-red-500 w-4 hover:bg-red-500 rounded-full border-2 ml-auto cursor-pointer ${
          color === "red" && "  bg-red-500"
        } `}
      ></div>

      <img
        onClick={() => handleRemove(id)}
        src={CancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
