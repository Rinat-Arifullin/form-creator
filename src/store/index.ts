import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resultFormReducer from './resultForm/slice';
import editModalReducer from './editModal/slice';

export const store = configureStore({
  reducer: {
    resultForm: resultFormReducer,
    editModal: editModalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
