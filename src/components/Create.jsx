import React, { useState } from "react";

const Create = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-[35%] flex justify-between px-5 my-[2%]">
      <input
        onChange={handleInputChange}
        value={title}
        placeholder="write your next task..."
        className="px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700 "
        type="text"
      />
      <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
        <i className="ri-add-fill"></i>
      </button>
    </form>
  );
};

export default Create;

