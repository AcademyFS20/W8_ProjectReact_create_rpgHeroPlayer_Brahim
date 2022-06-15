import React ,{useContext,useReducer} from 'react';
import reducer from '../reducers/app_reducer';

import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
} from '../actions';

const initialState = {

    isSidebarOpen :false,
    
}

const AppContext = React.createContext();


export const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

     const OPenSidebar = () => {
         dispatch({type:SIDEBAR_OPEN})
     }

     const closeSidebar = () => {

        dispatch({type:SIDEBAR_CLOSE})
     }
    return (
        <AppContext.Provider value={{...state,OPenSidebar,closeSidebar}}>
            {children}
        </AppContext.Provider>
    );
}


export const useAppContext = () => {

    return useContext(AppContext);
}


