import React, { useCallback, useRef, useState } from "react";

import BigList from "./category/big/index";
import SmallList from "./category/small/index";
import { useDispatch, useSelector } from "react-redux";
import update from "immutability-helper";
import { Button, Input } from "reactstrap";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  CARD: 'card'
}

const TodoMain = ({ index, todo, dndMoveTodoList }) => {
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

  // drag and drop 관련
  // 참조 : https://velog.io/@suyeonme/React-DragDrop-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  // 문서 참조 : https://react-dnd.github.io/react-dnd/docs/api/use-drag
  const ref = useRef(null); // (*)

  const [, drop] = useDrop({
    // (*)
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (item.index === index)
        return
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dndMoveTodoList(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    // (*)
    item: { type: ItemTypes.CARD, todo, index },
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // (*)
  // drag and drop 끝

  return (
    <div ref={ref} key={index} className="todoContainer">
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

{/* <Button onClick={() => dndTodoList(dragIndex, hoverIndex)} /> */}
    </div>
  );
};

export default TodoMain;
