import React, { useState } from "react";

import BigList from "./category/big/index";
import SmallList from "./category/small/index";
import { useDispatch, useSelector } from "react-redux";
import update from "immutability-helper";
import { Button, Input } from "reactstrap";

const TodoMain = ({ index, todo }) => {
  const todoList = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();

    // todolist 소분류 추가 입력 모드 활성화 state
  // 여기는 소분류 입력 모드 활성화 및 비활성화 작업을 진행함
  const [isContentsAdd, setIsContentsAdd] = useState(false);

  // 다음은 생성시 바로 state문에 이벤트 표시되도록 설정
  const [isBehaviorChange, setIsBehaviorChange] = useState(false);

  const [createInputContents, setCreateInputContents] = useState();

  /**
   * todolist 소분류 추가 작업 입력
   */
  const addContentsOnChange = (e, index) => {
    const { name, value } = e.target;
    setCreateInputContents({ [index]: { [name]: value } });
    console.log(createInputContents);
  };
  /**
   *  Todolist 소분류 추가하는 기능
   */
  const createContentsButton = (todo, index) => {
    let tmp = todo;
    tmp?.contents.push(createInputContents[index].contents);
    dispatch({
      type: "setTodoList",
      array: update(todoList, {
        $merge: {
          [index]: tmp,
        },
      }),
    });
    // 생성 후 바로 입력모드 취소
    setIsContentsAdd(!isContentsAdd)
  };

  return (
    <div key={index} className="todoContainer">
      <BigList
        todo={todo}
        todoList={todoList}
        index={index}
        isContentsAdd={isContentsAdd}
        setIsContentsAdd={setIsContentsAdd}
      />

      {isContentsAdd && (
        <>
          {"소분류 추가용 Input : "}
          <Input
            name="contents"
            onChange={(e) => addContentsOnChange(e, index)}
          />
          <Button onClick={() => createContentsButton(todo, index)}>
            추가
          </Button>
        </>
      )}

      {todo?.contents?.map((tc, tcIndex) => (
        <div key={tcIndex} className="todoContents">
          <SmallList
            tc={tc}
            index={index}
            tcIndex={tcIndex}
            todoList={todoList}
            isBehaviorChange={isBehaviorChange} setIsBehaviorChange={setIsBehaviorChange}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoMain;
