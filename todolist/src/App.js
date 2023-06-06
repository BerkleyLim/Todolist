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

function App() {
  return (
    <div className="my-2 background-container">
      <Card className="my-2 container">
        <CardHeader className="header-container">
          To-do list 반응형 웹 개발
        </CardHeader>
        <CardBody>
          <CardTitle tag="h2">To-do list</CardTitle>
          <i class="bi bi-file-earmark-plus"></i>
          <div className="todo">
            <div className="todoContainer">
              <div className="todoTitle">
                Redux 학습하기 <PlusCircle />
              </div>

              <div className="todoContents">
                - 로그인/로그아웃 가능 여부 확인 <Trash3 />
              </div>
            </div>
            <div className="todoContainer">
              <div className="todoTitle">
                Redux 학습하기 <PlusCircle />
              </div>

              <div className="todoContents">
                - 로그인/로그아웃 가능 여부 확인 <Trash3 />
              </div>
            </div>{" "}
            <div className="todoContainer">
              <div className="todoTitle">
                Redux 학습하기 <PlusCircle />
              </div>

              <div className="todoContents">
                - 로그인/로그아웃 가능 여부 확인 <Trash3 />
              </div>
            </div>{" "}
            <div className="todoContainer">
              <div className="todoTitle">
                Redux 학습하기 <PlusCircle />
              </div>

              <div className="todoContents">
                - 로그인/로그아웃 가능 여부 확인 <Trash3 />
              </div>
            </div>
          </div>

          <Form className="addGroup">
            <Input className="addInput" />
            <Button className="addButton">추가</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
