import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';

const TodoCreate = () => {
  const todoList = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();
  const [createInputTitle, setCreateInputTitle] = useState();
   /**
   * 다음은 TodoList 입력용 이벤트 함수
   */
   const createTitleOnchange = (e) => {
    const { name, value } = e.target;
    setCreateInputTitle({
      ...createInputTitle,
      [name]: value,
    });
  };
  /**
   * 입력시 Todolist 추가하는 기능
   */
  const createTitleButton = () => {
    let to = [];
    to.push(...todoList);
    to.push({
      title: createInputTitle?.title,
      contents: [],
    });
    /**
     * dispatch는 todolist.js 의 reducer의 action으로 사용되는 함수로
     * state 값을 변경시켜준다.
     * redux의 state 값은 불변성을 유지하는 것이 목적이다.
     * switch문의 action.type 변수에 따라 return으로 명령어대로 해당 state 값을 변경 시켜준다.
     */
    dispatch({ type: "setTodoList", array: to });
  };
  return ( 
    <Form className="addGroup">
    <Input
      className="addInput"
      name="title"
      defaultValue={createInputTitle}
      onChange={createTitleOnchange}
    />
    <Button className="addButton" onClick={createTitleButton}>
      추가
    </Button>
  </Form>
  )
}

export default TodoCreate;