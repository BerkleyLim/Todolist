// 리덕스 state 초기 셋팅
// const InitState = {
//   array: [
//     // {
//     //   title: undefined,
//     //   contents: undefined,
//     // },
//   ],
// };

// 샘플 데이터 넣고 추가시
const InitState = {
  array: [
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
  ],
};

const todoListReducer = (state = InitState, action) => {
  switch (action.type) {
    /**
     * setTodoList : redux state 값을 바꿔주는 기능으로 App.js에서 해당 알고리즘 crud 사용하여 변경 
     */
    case "setTodoList":
      return {
        array: !!action.array ? action.array : state.array,
      };
    default:
      return state;
  }
};

export default todoListReducer;