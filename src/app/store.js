import { configureStore } from '@reduxjs/toolkit';
import messagesReducer  from '../features/message/messageSlice';
import { fetchMessages } from '../features/message/messageSlice';

export const store = configureStore({
  reducer: {
    message: messagesReducer,
  },
});

store.dispatch(fetchMessages())

export default store;
