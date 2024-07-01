# Todolist

리액트 기반 투두리스트 토이 프로젝트 만들기
<br/>

## 목표

- 리액트 실력 향상
- 반응형 웹 학습
- 스타벅스 클론코딩 및 기타 프로젝트 개선 연습
- 리액트와 CSS 연습
<br/>

## 진행 기간

- 2023년 6월 5일 - 2023년 6월 14일 (2023년 6월 11일 프론트엔드 부분 완료)
- 2024년 6월 30일 UI 적용 완료
<br/>

## 프로젝트 구조

```
todolist/
├── public/
├── src/
│   ├── component/
│   │   ├── create/
│   │   │   └── index.js
│   │   ├── main/
│   │   └── redux/
│   │       └── action/
│   │           └── todolist.js
│   │       ├── reducer.js
│   │       ├── store.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```
<br/>

## 개발 환경 및 기술 스택

| **항목**      | **내용**                                                                 |
|---------------|--------------------------------------------------------------------------|
| **OS**        | Windows 11                                                               |
| **Tool**      | VS Code                                                                  |
| **프론트 엔드** | React, Redux, Reactstrap, CSS, Immutability-helper, React-dnd            |
| **형상 관리** | Git                                                                      |
| **Node.js**   | 16.18.0                                                                  |
| **npm**       | 9.6.3                                                                    |
<br/>

## 주요 기능

- Todo 항목 생성, 읽기, 갱신, 삭제 (CRUD)
- 반응형 웹 디자인
- Redux를 이용한 상태 관리
- Local Storage를 이용한 데이터 저장
- 드래그 앤 드롭 기능
- 사용자 편의 기능을 위한 UI 개선
<br/>

## Getting Started

### 프론트엔드
```bash
# Clone the repository
git clone https://github.com/BerkleyLim/Todolist.git

# Navigate to the project directory
cd Todolist

# Install dependencies
npm install

# Start the development server
npm start

# For production mode
# npm run build
# serve -s build
```

참조:
``` 
배포 시 `npm run build` 후 `serve -s build`로 열면 배포 환경에서 서버가 동작이 가능하고, 개발 서버로만 사용하고 싶으면 `npm run start`로 사용하시면 됩니다.
```

## 진행 히스토리

| **날짜**     | **내용**                                                                                   |
|--------------|--------------------------------------------------------------------------------------------|
| **6월 5일**  | 리포지토리 생성, 리액트 설치 (Node.js 버전: v16.18.0), 리액트 개발 환경 설정                |
| **6월 6일**  | 600px, 1200px 기준 UI 설정 (반응형 웹&앱 학습), @media를 활용하여 반응형 웹&앱 UI 제작       |
| **6월 7일**  | Todo List 기본 기능 추가 (생성, 읽기), 샘플 데이터 추가                                     |
| **6월 8일**  | Todo List 기본 기능 추가 (갱신, 삭제), 불변성 기능 추가 (immutability-helper)               |
| **6월 9일**  | Redux 설치 및 적용, state를 App.js에서 Redux state로 적용, Local Storage를 이용한 데이터 저장 |
| **6월 10일** | Todolist 상세 부분 CRUD 적용, 각 컴포넌트를 별도로 분할 작업, 클린 코드 작성                 |
| **6월 11일** | Todo List 드래그 앤 드롭 기능 추가                                                          |
| **6월 12-14일** | UI 재구성 (사용자 편의 기능성 개선)                                                       |
<br/>

## 개발 히스토리 참조 (tistory)

- [블로그 이동](https://berkley.tistory.com/category/Github%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/todolist%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9%EC%95%B1)
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
