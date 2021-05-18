import { useReducer, useCallback } from 'react';

export const STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

const ACTION_TYPE = {
  SEND: 'SEND',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

function httpReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.SEND:
      return {
        data: null,
        error: null,
        status: STATUS.PENDING,
      };
    case ACTION_TYPE.SUCCESS:
      return {
        data: action.responseData,
        error: null,
        status: STATUS.COMPLETED,
      };
    case ACTION_TYPE.ERROR:
      return {
        data: null,
        error: action.errorMessage,
        status: STATUS.FAILED,
      };
    default:
      return state;
  }
}

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? STATUS.PENDING : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (...args) {
      dispatch({ type: ACTION_TYPE.SEND });
      try {
        const responseData = await requestFunction(...args);
        dispatch({ type: ACTION_TYPE.SUCCESS, responseData });
      } catch (error) {
        dispatch({
          type: ACTION_TYPE.ERROR,
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return { sendRequest, ...httpState };
}

export default useHttp;
