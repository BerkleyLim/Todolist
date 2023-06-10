import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";
import "./App.css";
import { useSelector } from "react-redux";

import CreateTitle from "./component/create/index";
import TodoMain from "./component/main/index";

function App() {
  const todoList = useSelector((state) => state.todoList.array);

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
                <TodoMain index={index} todo={todo} />
              ))
            }
          </div>
          <CreateTitle />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
