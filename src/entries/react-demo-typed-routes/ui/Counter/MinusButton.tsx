import { useContext } from "react";
import { useExternalState } from "react-bridgestate";
import { AppContext } from "../AppContext/index.ts";

export const MinusButton = () => {
  let [, setState] = useExternalState(useContext(AppContext), false);

  let handleClick = () => {
    setState((state) => ({
      ...state,
      counter: state.counter - 1,
    }));
  };

  return <button onClick={handleClick}>&ndash;</button>;
};
