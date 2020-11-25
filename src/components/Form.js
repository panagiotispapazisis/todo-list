import React, { useState } from "react";

function Form() {
  const inputTextHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input onChange={inputTextHandler} type="text" class="todo-input" />
        <button class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
