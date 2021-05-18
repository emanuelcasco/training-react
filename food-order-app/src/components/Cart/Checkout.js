import classes from './Checkout.module.scss';

import useInput from '../../hooks/use-input';
import Button from '../UI/Button';

const realLengthIsGreaterThan = (expectedLength) => (input) =>
  input.trim().length > expectedLength;
const isNotEmpty = realLengthIsGreaterThan(0);

const Checkout = (props) => {
  const {
    value: fullName,
    isValid: fullNameIsValid,
    hasError: fullNameInputIsInvalid,
    inputChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullNameInput,
  } = useInput(isNotEmpty);
  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetInputIsInvalid,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput(isNotEmpty);
  const {
    value: postalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeInputIsInvalid,
    inputChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput(isNotEmpty);
  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityInputIsInvalid,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(realLengthIsGreaterThan(5));

  const formIsValid =
    fullNameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const inputClassByState = (isValid) =>
    `${classes['form-control']} ${isValid ? classes['invalid'] : ''}`;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    props.onConfirm({
      fullName,
      street,
      postalCode,
      city,
    });
    resetFullNameInput('');
    resetStreetInput('');
    resetPostalCodeInput('');
    resetCityInput('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classes['control-group']}>
        <div className={inputClassByState(fullNameIsValid)}>
          <label htmlFor="full-name">Your Name</label>
          <input
            type="text"
            id="full-name"
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
            value={fullName}
          />
          {fullNameInputIsInvalid && (
            <p className={classes['error-text']}>Please enter a valid email.</p>
          )}
        </div>

        <div className={inputClassByState(streetIsValid)}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
            value={street}
          />
          {streetInputIsInvalid && (
            <p className={classes['error-text']}>
              Please enter a valid street.
            </p>
          )}
        </div>

        <div className={inputClassByState(postalCodeIsValid)}>
          <label htmlFor="postal-code">Postal Code</label>
          <input
            type="number"
            id="postal-code"
            onChange={postalCodeChangeHandler}
            onBlur={postalCodeBlurHandler}
            value={postalCode}
          />
          {postalCodeInputIsInvalid && (
            <p className={classes['error-text']}>
              Please enter a valid postal code.
            </p>
          )}
        </div>

        <div className={inputClassByState(cityIsValid)}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={city}
          />
          {cityInputIsInvalid && (
            <p className={classes['error-text']}>Please enter a valid city.</p>
          )}
        </div>
      </div>
      <div className={classes['form-actions']}>
        <Button onClick={props.onClose} alternative>
          Close
        </Button>
        <Button disabled={!formIsValid}>Submit</Button>
      </div>
    </form>
  );
};

export default Checkout;
