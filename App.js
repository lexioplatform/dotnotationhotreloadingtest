/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import * as Component from './componentDotNotation';
import { Fragment } from "react-native";

const App = () => {
  return (
    <Fragment>
      <Component.A />
      <Component.B />
      <Component.C />
    </Fragment>
  );
};

export default App;
