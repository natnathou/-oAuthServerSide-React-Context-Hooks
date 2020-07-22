import React from 'react';
import {ContextDevTool} from 'react-context-devtool';
import {Reducers} from "./reducers/Reducers";


const Context= React.createContext({});

export const StateContext =(props)=> {

  return(
      <Context.Provider value={{...Reducers()}}>
        <ContextDevTool 
                context={Context} 
                id="Context" 
                displayName="Context" 
               />
          {props.children}
      </Context.Provider>
  )
}
export default Context;