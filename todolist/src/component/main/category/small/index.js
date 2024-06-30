import React, { useState } from "react";
import { Trash3 } from "react-bootstrap-icons";
import { Button, Input } from "reactstrap";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";

const SmallList = ({
                     tc,
                     index,
                     tcIndex,
                     isBehaviorChange,
                     setIsBehaviorChange
                   }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.array);
  const [updateInputContents, setUpdateInputContents] = useState();
  const [isContentsUpdate, setIsContentsUpdate] = useState(false);

  const updateContentsOnChange = (e, index, tcIndex) => {
    const { name, value } = e.target;
    setUpdateInputContents({ [index]: { [tcIndex]: { [name]: value } } });
    console.log(updateInputContents);
  };

  const updateContents = (index, tcIndex) => {
    let contents = updateInputContents[index][tcIndex].contents;
    let to = todoList[index];
    to.contents[tcIndex] = contents;

    dispatch({
      type: "setTodoList",
      array: update(todoList, {
        [index]: { $set: to },
      }),
    });
    setIsContentsUpdate(!isContentsUpdate);
    setIsBehaviorChange(!isBehaviorChange);
  };

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
  };

  return (
    <>
      {isContentsUpdate ? (
        <div>
          <Input
            name="contents"
            defaultValue={tc}
            onChange={(e) => updateContentsOnChange(e, index, tcIndex)}
            className="mb-2"
          />
          <Button color="primary" onClick={() => updateContents(index, tcIndex)} className="edit-button">
            <i className="bi bi-pencil"></i> 수정
          </Button>
          <Button color="secondary" onClick={() => setIsContentsUpdate(!isContentsUpdate)} className="cancel-button">
            취소
          </Button>
        </div>
      ) : (
        <div>
          - {tc}
          <Button color="warning" onClick={() => setIsContentsUpdate(!isContentsUpdate)} className="edit-button">
            <i className="bi bi-pencil"></i> 수정
          </Button>{" "}
          <Button color="danger" onClick={() => removeContents(index, tcIndex)} className="delete-button">
            <i className="bi bi-trash"></i> 삭제
          </Button>
        </div>
      )}
    </>
  );
};

export default SmallList;
