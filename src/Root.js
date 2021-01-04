import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducders from 'reducers';

export default (props) => {
  return (
    <Provider store={createStore(reducders, {})}>{props.children}</Provider>
  );
};
