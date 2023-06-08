import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
} from "reactstrap";
import "./App.css";
import { PlusCircle, Trash3 } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import update from "immutability-helper";

function App() {
  /**
   * 필요 key:value값
   * title, contents
   * 이 값은
   */
  const [todoList, setTodoList] = useState([]);
  const [createInputTitle, setCreateInputTitle] = useState();

  useEffect(() => {
    setTodoList([
      {
        title: "Redux 학습하기",
        contents: [
          "로그인/로그아웃 가능 여부 확인",
          "localstorage/sessionstorage 학습",
        ],
      },
      {
        title: "SpringBoot 학습하기",
        contents: ["Spring Security 구현", "Spring MVC 패턴 익히기"],
      },
      {
        title: "JWT 인증 처리",
        contents: ["JWT 개념 익히기"],
      },
    ]);
  }, []);

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
    setTodoList(to);
  };

  // 갱신모드 설정
  const [isTitleUpdate, setIsTitleUpdate] = useState(false);
  
  // Todolist title 수정용 state
  const [changeTitle, setChangeTitle] = useState();
  const updateTitlOnChange = (e, index) => {
    const { name, value } = e.target;
    setChangeTitle({ [index]: { [name]: value } });
    console.log(changeTitle);
  };

  // 입력 후 갱신 메서드
  const updateTitle = (index) => {
    setTodoList(
      update(todoList, {
        [index]: {
          title: { $set: changeTitle[index].title },
        },
      })
    );
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
