import * as actionTypes from "./actionTypes"


export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const decreaseByThreeCounter=()=>({
    type:actionTypes.DECREASE_BY_THREE_COUNTER,
    payload:3
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})

export const increaseByUserSetCounter=(userSetPayload)=>({
    type:actionTypes.INCREASE_BY_USERSET_COUNTER,
    payload:userSetPayload
})