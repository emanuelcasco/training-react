import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Provider from './Provider';

import './styles.css';

const Button = styled.button`
  width: ${(props) =>
    props.fullWidth ? '100%' : undefined};
  padding: 8px 16px;
  background-color: salmon;
  color: snow;
  border: 0;
  border-radius: 0.2rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: crimson;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px white, 0 0 0 4px salmon;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Scream = styled.p`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primary};
`;

function App() {
  return (
    <>
      <Scream>Aaaaaaaah</Scream>
      <Button href="/">Make coffee</Button>
    </>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);
