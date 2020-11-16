import { createStore } from 'redux'

// const incrementCount = (payload = {}) =>({                              //payload is set up as an object(defaults to empty object) because its receiving an abject ie incrementBy:5
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1              //incrementBy property of payload object contains 5
// })

const incrementCount = ({ incrementBy = 1 } = {}) =>({                  /*destructure and use incrementBy value if incrementBy value is passed in. If empty object passed in, create incrementBy and set default value 1. Also destructure to   empty   object incase no object gets passed in, thus setting default incrementBy to 1 - 10.14 on video*/
    type: 'INCREMENT',
    incrementBy                                                         //incrementBy : incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) =>({ 
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) =>({
    type: 'SET',
    count
})

const resetCount = () =>({
    type: 'RESET'
})


// A reducer is a pure function ie. should not take in/manipulate other values from variables other than those submitted to arguments eg count and action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':
            
            return {
                count: state.count - action.decrementBy
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':  
            return {
                count: action.count
            }

        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(() => console.log(store.getState()))  //renders every action happening to state

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// })

store.dispatch(incrementCount({ incrementBy: 10 }))

store.dispatch(decrementCount({ decrementBy: 20 }))

store.dispatch(setCount({ count: 101 }))

store.dispatch(resetCount())

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// })

// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'SET',
//     count: 100
// })
