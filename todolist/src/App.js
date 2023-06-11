import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import CreateTitle from "./component/create/index";
import TodoMain from "./component/main/index";
import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

function App() {
  const todoList = useSelector((state) => state.todoList.array);
  const dispatch = useDispatch();

  // 이벤트 변환이 안될 시 이 걸 사용
  const [isStateUpdate, setIsStateUpdate] = useState(false);

  // 드래그앤 드롭 기능 추가
  const dndMoveTodoList = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = todoList[dragIndex];
      let array = todoList;
      console.log(dragCard);
      console.log(array);
      dispatch({
        type: "setTodoList",
        array: update(todoList, {
          $splice: [
            [dragIndex, 1], // delete
            [hoverIndex, 0, dragCard], // Add
          ],
        }),
      });

      // 여기서 전체 리스트 update API 삽입
      setIsStateUpdate(!isStateUpdate);

      // 삽입 끝
    },
    [todoList]
  );

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
                <DndProvider key={index} backend={HTML5Backend}>
                  <TodoMain
                    index={index}
                    todo={todo}
                    dndMoveTodoList={dndMoveTodoList}
                  />
                </DndProvider>
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
