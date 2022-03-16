// ## 액션 타입 작성
// as const는 타입스크립트 문법
// type값이 아닌 실제 값을 가르키게 됨
const INCREMENT = "counter/INCREMENT" as const;
const DECREMENT = "counter/DECREMENT" as const;

// ## 액션 생성자 작성
// 추후 컨테이너 컴포넌트에서 불러와 사용하게 됨
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

// 타입스크립트의 타입
// 유틸타입인 ReturnType은 type의 타입이 string으로 처리
// 위에서 as const를 해주지 않으면 string으로 처리되어 리듀서가 동작 X
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

// 상태의 타입, 초깃값 선언
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// ### 리듀서 작성 ###
function Counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default Counter;

// import { createAction, handleActions } from "redux-actions";

// // 액션타입, 액션 생성함수, 리듀서를 한파일에 작성 = Ducks 구조

// // 액션 타입 작성
// const INCREMENT = "counter/INCREMENT";
// const DECREMENT = "counter/DECREMENT";

// // 액션 생성함수
// export const actionCreators = {
//   increment: createAction(INCREMENT),
//   decrement: createAction(DECREMENT),
// };

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// export default handleActions<CounterState>(
//   {
//     [INCREMENT]: (state) => ({ value: state.value + 1 }),
//     [DECREMENT]: (state) => ({ value: state.value - 1 }),
//   },
//   initialState
// );
