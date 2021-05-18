import { useReducer } from 'react';

const ACTIONS = {
  INPUT: 'input',
  BLUR: 'blur',
  RESET: 'reset',
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INPUT:
      return { ...state, value: action.value };
    case ACTIONS.BLUR:
      return { ...state, isTouched: action.isTouched };
    case ACTIONS.RESET:
      return { ...state, value: action.value, isTouched: action.isTouched };
    default:
      break;
  }
};
const initialInputState = {
  value: '',
  isTouched: false,
};

const useInput = (validator) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const inputChangeHandler = (event) =>
    dispatch({ type: ACTIONS.INPUT, value: event.target.value });
  const inputBlurHandler = (event) =>
    dispatch({ type: ACTIONS.BLUR, isTouched: true });
  const reset = (value) =>
    dispatch({ type: ACTIONS.RESET, value, isTouched: false });

  const enteredValueIsValid = validator(inputState.value);
  return {
    value: inputState.value,
    hasError: !enteredValueIsValid && inputState.isTouched,
    isValid: enteredValueIsValid,
    reset,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
