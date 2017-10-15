import React from 'react';
import ReactDOM from 'react-dom';
import StyledApp from './App';
import registerServiceWorker from './registerServiceWorker';
import getAverageCostOfGas from './gasPrices/averageCostOfGas';

const michiganId = 300023;
const unitedStatesId = 500000;
const requestOptions = {
   "method": 'GET',
};
getAverageCostOfGas(michiganId, unitedStatesId, requestOptions);