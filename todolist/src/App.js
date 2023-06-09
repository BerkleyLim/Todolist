import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
} from "reactstrap";
import "./App.css";
import { PlusCircle, Trash3 } from "react-bootstrap-icons";
import { useState } from "react";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";

function App() {
  /**
   * 필요 key:value값
   * title, contents
   * 이 값은
   */
  const todoList = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();
  const [createInputTitle, setCreateInputTitle] = useState();
  // 갱신모드 설정
  const [isTitleUpdate, setIsTitleUpdate] = useState(false);

  // Todolist title 수정용 state
  const [changeTitle, setChangeTitle] = useState();

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

  // 수정용 메서드
  const updateTitlOnChange = (e, index) => {
    const { name, value } = e.target;
    setChangeTitle({ [index]: { [name]: value } });
    console.log(changeTitle);
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
    <div className="my-2 background-container">
      <Card className="my-2 container">
        <CardHeader className="header-container">
          To-do list 반응형 웹 개발
        </CardHeader>
        <CardBody>
          <CardTitle tag="h2">To-do list</CardTitle>
          <div className="todo">
            {
              // 다음은 각각 데이터를 불려올 때 map을 주로 사용합니다.
              // todoList에 저장된 state 값을
              // 유사 forEach문처럼 todo를 이용하여 출력하고,
              // 상위 div에 key값을 설정하기 위해 index 값을 집어 넣어야 합니다.
              todoList?.map((todo, index) => (
                <div key={index} className="todoContainer">
                  <div className="todoTitle">
                    {isTitleUpdate ? (
                      <div>
                        <Input
                          name="title"
                          defaultValue={todo?.title}
                          onChange={(e) => updateTitlOnChange(e, index)}
                        />
                        <Button onClick={() => updateTitle(index)}>
                          todolist수정
                        </Button>
                        <Button
                          onClick={() => setIsTitleUpdate(!isTitleUpdate)}
                        >
                          취소
                        </Button>
                      </div>
                    ) : (
                      <div>
                        {todo?.title}
                        <Button
                          onClick={() => setIsTitleUpdate(!isTitleUpdate)}
                        >
                          수정
                        </Button>{" "}
                        <PlusCircle />
                        <Button onClick={() => removeTitle(index)}>
                          <Trash3 />
                        </Button>
                      </div>
                    )}
                  </div>

                  {todo?.contents?.map((tc, tcIndex) => (
                    <div key={tcIndex} className="todoContents">
                      - {tc} <Trash3 />
                    </div>
                  ))}
                </div>
              ))
            }
          </div>

          {/**
           *
           */}
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
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
