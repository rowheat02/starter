import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import map from './slices/map';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    map,
  },
  // @ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      middleware,
    ),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
