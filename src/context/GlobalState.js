import React, {createContext, useReducer} from "react";
import Transaction from "../components/Transaction";
import Reducer from "./Reducer";

//initialState
const initialState = {
    transactions : [
  
    ]
}

//create context

export  const GlobalContext = createContext(initialState);

// create provider

export const GlobalProvider = ({ children }) => {
    const[state,dispatch] = useReducer(Reducer,initialState);

    //action
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }
    function addTransaction(Transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: Transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction

    }} >
    {children}
    </GlobalContext.Provider>)

}