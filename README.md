# Todolist
리액트 기반 투두리스트 토이 프로젝트 만들기

# 목표
- 리액트 실력을 올리기 위해 시작
- 반응형 웹을 학습을 하기위해 제작
- 차후 스타벅스 클론코딩 뿐만 아닌 지금까지 하고 있는 프로젝트에 개선을 진행을 위해 연습용 토이 프로젝트
- 리액트 뿐만 아닌 css도 연습을 위해 진행

# 진행기간
2023년 6월 5일 - 2023년 6월 14일 
(2023년 6월 11일 프론트엔드 부분 완료)
[2024년 6월 30일 UI 적용 완료]

# 사용기술
Nodejs(16.18.0), npm(9.6.3), Javascript ES13, React, Redux, reactstrap, css, immutability-helper, react-dnd, etc

# 개발 히스토리 참조 (tistory)
- 블로그 이동 : 여기로 [클릭](https://berkley.tistory.com/category/Github%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/todolist%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9%EC%95%B1) 하세요.
- [(1) 시작하기 전](https://berkley.tistory.com/5)
- [(2) Todolist 작업 전 반응 형 웹&앱 설정](https://berkley.tistory.com/6)
- [(3) 반응형 Todolist UI 작업 진행](https://berkley.tistory.com/7)
- [(4) Todo List 기본 기능 CRUD 추가 - 1 (읽기, 쓰기)](https://berkley.tistory.com/8)
- [(5) Todo List 기본 기능 CRUD 추가 - 2 (갱신)](https://berkley.tistory.com/9)
- [(6) Todo List 기본 기능 CRUD 추가 - 3 (제거)](https://berkley.tistory.com/10)
- [(7) Todo List Redux Local Storage 리팩토링](https://berkley.tistory.com/11) 
- [(8) Todolist 메인 부분 이외의 상세부분의 대해 CRUD 작성](https://berkley.tistory.com/12)
- [(9) Todo List 클린 코드로 리팩토링 및 고도화 작업 (코드줄 줄이기, 분할, 필요없는 주석 제거 등)](https://berkley.tistory.com/13)
- [(10) Todo List 드래그 앤 드롭 기능 추가](https://berkley.tistory.com/15)
- [(별첨) Todo List 추가 디자인 및 사용자 편의성 UI 작성 (Button, layout 등)](https://berkley.tistory.com/14)


# Getting Started 
`$ npx create-react-app todolist`  설치 시 Getting Started 메뉴얼이 적여있는 것과 동일합니다.

### 서버 다운로드 후 사용 방법
1) 먼저 powershell을 오픈하여 git 저장소 디렉토리로 이동
2) `git clone https://github.com/BerkleyLim/Todolist.git`
3) `cd Todolist`
4) `npm install` (현재 nodejs 16.18.0 버전 사용하였으므로 이에 참조 바랍니다. node버전과 scss 버전이 호환 되지 않는 경우 버그 걸리기 때문에 사용 하지 않았습니다.)
5) `npm run start`
6) 리액트의 대한 자세한 사항은 [여기](todolist\README.md) 클릭 

참조:
``` 
배포시 `npm run build` 후 `serve -s build`로 열면 배포환경에서 서버가 동작이 가능하고, 개발서버로만 사용하고 싶으면 `npm run start`로 사용하시면 됩니다.
```

# 진행 히스토리(예정사항포함)
### 6월 5일
- 리파지토리 생성
- 리액트 설치 (Node.js버전 : v16.18.0)
- 리액트 개발 환경 설정

### 6월 6일
- 600px, 1200px 기준 UI 설정 (반응형 웹&앱 습득을 위한 연습 필요 사항 진행)
- @media를 활용하여 반응형 웹&앱 UI 제작하였다.

### 6월 7일
- Todo List 기본 기능 추가 (생성, 읽기)
- 샘플 데이터 추가

### 6월 8일
- Todo List 기본 기능 추가 (갱신, 삭제)
- 불변성 기능 추가 (immutability-helper)


### 6월 9일
- Redux 설치 및 적용 
- state를 App.js에서 Redux state로 적용
- Local Storage를 이용한 TodoList 데이터 값 저장


### 6월 10일
- Todolist 상세 부분 crud 적용
- 각 컴포넌트를 별도로 분할 작업하기
- 클린 코드 만들기


### 6월 11일
- Todo List 드래그 앤 드롭 기능 추가

##### 6월 12 - 14일
- UI 재구성 (사용자 편의 기능성) : 퍼블리셔 영역이라 개선중입니다.

