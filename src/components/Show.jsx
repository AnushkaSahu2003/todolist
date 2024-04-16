import React from "react";

const Show = ({ tasks, onDelete, onCompleteToggle }) => {
  const tasksRender = tasks.map((task, index) => (
    <li key={index} className="mb-5 flex justify-between items-center border rounded-xl p-5">
      <div className="flex items-center">
        <div
          onClick={() => onCompleteToggle(index)}
          className={`${task.completed ? "bg-green-500" : "border"} mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
        ></div>
        <h1 className={`${task.completed && "line-through"} text-2xl font-extrabold text-yellow-100`}>
          {task.title}
        </h1>
      </div>
      <div className="flex gap-3 text-2xl text-yellow-100">
        <i className="ri-file-edit-line"></i>
        <i onClick={() => onDelete(index)} className="ri-delete-bin-3-line"></i>
      </div>
    </li>
  ));

  return <ul className="list-none w-[35%] ">{tasksRender}</ul>;
};

export default Show;
