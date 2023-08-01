import { configureStore } from '@reduxjs/toolkit';
import operationsReducer from '../features/operationsSlice';
import resultReducer from '../features/resultSlice';
import buttonReducer from '../features/ButtonOperation';
import inputHandlerReducer from '../features/InputHandlerSlice';

export default configureStore({
  reducer: {
    operations: operationsReducer,
    result: resultReducer,
    button: buttonReducer,
    setInputs: inputHandlerReducer
  },
});