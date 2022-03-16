import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/modules";
import { increase, decrease } from "../store/modules/conter";
import Counter from "../components/Counter";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
