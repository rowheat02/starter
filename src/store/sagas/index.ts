import { all } from 'redux-saga/effects';
// import visualizationWatcher from './visualization';
import mapWatcher from './map';

export default function* rootSaga() {
  // yield all([visualizationWatcher()]);
  yield all([mapWatcher()]);
}
