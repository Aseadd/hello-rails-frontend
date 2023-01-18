import { configureStore } from '@reduxjs/toolkit';
import messagesReducer  from '../features/message/messageSlice';

export const store = configureStore({
  reducer: {
    message: messagesReducer,
  },
});

export default store;
