import React from "react";

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function Counter({ count, onIncrease, onDecrease }: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;

// export default class Counter extends React.Component<Props, State> {
//   //   constructor(props: State) {
//   //     super(props);
//   //   }

//   render(): React.ReactNode {
//     return (
//       <div>
//         <Value count={this.props.count} />
//         <Control
//           onIncrease={this.props.onIncrease}
//           onDecrease={this.props.onDecrease}
//         />
//       </div>
//     );
//   }

// const mapStateToProps = (state) =>{
//     return {
//         number : state.
//     }
// }

// const mapDispatchToProps = (dispatch) =>
