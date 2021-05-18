import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [workInProgressFlag, setWorkInProgressFlag] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    if (workInProgressFlag) {
      setWorkInProgressFlag(false);
    }

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const enableFormProgressCheck = () => {
    setWorkInProgressFlag(true);
  };

  const disableFormProgressCheck = () => {
    setWorkInProgressFlag(false);
  };

  return (
    <>
      <Prompt
        when={workInProgressFlag}
        message={(_) =>
          'Are you sure you want to leave? All your progress will be lost.'
        }
      ></Prompt>
      <Card>
        <form
          onFocus={enableFormProgressCheck}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={disableFormProgressCheck} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
