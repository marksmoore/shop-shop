import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

import rootReducer from "../redux/reducers";

// create redux store
const reduxStore = createStore(rootReducer);

const useReduxStore = () => {
    const state = useSelector((state) => {
      return state;
    });
  
    const dispatch = useDispatch();
  
    return { state, dispatch };
  };
  
  export { reduxStore, useReduxStore };