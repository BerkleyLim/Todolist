import React, { useState } from "react";
import { PlusCircle, Trash3 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import update from "immutability-helper";

const BigList = ({ todo, index, isContentsAdd, setIsContentsAdd}) => {
  const todoList = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();
  
  // 갱신모드 설정
  const [isTitleUpdate, setIsTitleUpdate] = useState(false);

  // Todolist title 수정용 state
  const [changeTitle, setChangeTitle] = useState();

  // 수정용 메서드
  const updateTitlOnChange = (e, index) => {
    const { name, value } = e.target;
    setChangeTitle({ [index]: { [name]: value } });
  };

  // 수정 부분 입력 후 갱신 메서드
  const updateTitle = (index) => {
    /**
     * 불변성 유지하면서 갱신 시킬 수 있습니다.
     */
    dispatch({
      type: "setTodoList",
      array: update(todoList, {
        [index]: {
          title: { $set: changeTitle[index].title },
        },
      }),
    });
    // 갱신 후 바로 입력모드 해제
    setIsTitleUpdate(!isTitleUpdate)
    
  };

  // 삭제 관련 메소드 (제목)
  const removeTitle = (index) => {
    /**
     * 불변성 유지하면서 삭제 시킬 수 있습니다.
     */
    dispatch({
      type: "setTodoList",
      array: update(todoList, {
        $splice: [[index, 1]],
      }),
    });
  };
  return (
    <>
      <div className="todoTitle">
        {isTitleUpdate ? (
          <div>
            <Input
              name="title"
              defaultValue={todo?.title}
              onChange={(e) => updateTitlOnChange(e, index)}
            />
            <Button onClick={() => updateTitle(index)}>todolist수정</Button>
            <Button onClick={() => setIsTitleUpdate(!isTitleUpdate)}>
              취소
            </Button>
          </div>
        ) : (
          <div>
            {todo?.title}
            <Button onClick={() => setIsTitleUpdate(!isTitleUpdate)}>
              수정
            </Button>{" "}
            <Button onClick={() => setIsContentsAdd(!isContentsAdd)}>
              <PlusCircle />
            </Button>
            <Button onClick={() => removeTitle(index)}>
              <Trash3 />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default BigList;
