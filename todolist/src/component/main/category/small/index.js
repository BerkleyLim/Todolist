import React, { useState } from "react";
import { Trash3 } from "react-bootstrap-icons";
import { Button, Input } from "reactstrap";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";

const SmallList = ({
  tc,
  index,
  tcIndex,
  isBehaviorChange, setIsBehaviorChange
}) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.array);
  // todolist 입력
  const [updateInputContents, setUpdateInputContents] = useState();

    // todolist 소분류 갱신모드 설정 여부
    const [isContentsUpdate, setIsContentsUpdate] = useState(false);

  /**
   * 소분류용 갱신 메서드 입력
   */
  const updateContentsOnChange = (e, index, tcIndex) => {
    const { name, value } = e.target;
    setUpdateInputContents({ [index]: { [tcIndex]: { [name]: value } } });
    console.log(updateInputContents);
  };

  /**
   * 소분류용 갱신 메서드 수행 = state 값 반영
   */
  const updateContents = (index, tcIndex) => {
    /**
     * 불변성 유지하면서 갱신 시킬 수 있습니다.
     */
    let contents = updateInputContents[index][tcIndex].contents;
    let to = todoList[index];
    to.contents[tcIndex] = contents;

    dispatch({
      type: "setTodoList",
      array: update(todoList, {
        [index]: { $set: to },
      }),
    });
    // 갱신후 수정모드 취소
    setIsContentsUpdate(!isContentsUpdate);
    // 갱신 후 바로 state 문 적용을 위해 사용
    setIsBehaviorChange(!isBehaviorChange);
  };

  // 삭제 관련 메소드 (소분류)
  const removeContents = (index, tcIndex) => {
    let to = update(todoList[index].contents, {
      $splice: [[tcIndex, 1]],
    });

    dispatch({
      type: "setTodoList",
      array: update(todoList, {
        [index]: {
          contents: { $set: to },
        },
      }),
    });

    // console.log(tcIndex)
  };
  return (
    <>
      {isContentsUpdate ? (
        <div>
          -
          <Input
            name="contents"
            defaultValue={tc}
            onChange={(e) => updateContentsOnChange(e, index, tcIndex)}
          />
          <Button onClick={() => updateContents(index, tcIndex)}>
            todolist수정
          </Button>
          <Button onClick={() => setIsContentsUpdate(!isContentsUpdate)}>
            취소
          </Button>
        </div>
      ) : (
        <div>
          - {tc}
          <Button onClick={() => setIsContentsUpdate(!isContentsUpdate)}>
            수정
          </Button>{" "}
          <Button onClick={() => removeContents(index, tcIndex)}>
            <Trash3 />
          </Button>
        </div>
      )}
    </>
  );
};

export default SmallList;
