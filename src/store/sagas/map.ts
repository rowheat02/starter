/* eslint-disable no-console */
// import { PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
  getPopulationRequest,
  getPopulationSuccess,
  getPopulationFailure,
} from '@Store/actions/map';
import { toast } from 'react-toastify';
// import { dashboarddata } from '@Services/dashboard';

function* getpopulationrequest() {
  try {
    // yield call(dashboarddata, { test: 'test' });
    yield delay(1000);
    yield put(
      getPopulationSuccess([
        {
          Male: Math.floor(Math.random() * 1000),
          Female: Math.floor(Math.random() * 1000),
        },
      ]),
    );
    toast('Data Fetched Successfully', {
      autoClose: 2000,
    });
  } catch (error) {
    yield put(getPopulationFailure({}));
    toast.error('Failed to fetch data');
  }
}

function* mapWatcher() {
  yield takeLatest(getPopulationRequest.type, getpopulationrequest);
}

export default mapWatcher;
