import React, { Component } from 'react';
import Grid from './Grid';
import getAverageCostOfGas from './gasPrices/averageCostOfGas';

const michiganId = 300023;
const unitedStatesId = 500000;

const App = () => (
  <div>
    <span>{getAverageCostOfGas(michiganId, unitedStatesId)}</span>
    <span>Row2</span>
  </div>
);

export default App;
