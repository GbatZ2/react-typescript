
import React, {useReducer} from 'react'

enum ACTIONS  {
    INCREMENT,
    DECREMENT,
    RESET
}

type counterState = {
    count:number
}


const initialState:initialStateType = {count:0};


type initialStateType = {
    count:number
} 
type ResetAction ={
    type:ACTIONS
}  
type updateActionType ={
    type:ACTIONS
    payload:number
}




 


function reducer (state:counterState, action:updateActionType){

    switch(action.type){
            case ACTIONS.INCREMENT:
                return {count: state.count + action.payload}
            break
            case ACTIONS.DECREMENT:
                return {count: state.count - action.payload}
            break
            case ACTIONS.RESET:
                return initialState
            default:
                return state
    }
}

export default function Counter() {


const [state,dispatch] = useReducer(reducer, initialState)

  return (
    <div>

        Count: {state.count}
        <button onClick={()=>dispatch({type:ACTIONS.INCREMENT, payload:10})}>
            Increment 10
        </button>
        <button  onClick={()=>dispatch({type:ACTIONS.DECREMENT, payload:10})}>
            Decrement 10
        </button>

        <button  onClick={()=>dispatch({type:ACTIONS.RESET,payload:0})}>
            Reset
        </button>
    </div>
  )
}
