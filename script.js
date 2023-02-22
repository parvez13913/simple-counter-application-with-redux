// select domElements

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initialState

const initialState = {
    value: 0,
}

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
}


// Creacte Reducer function


function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return {
            ...state,
        };
    }
}

// create-store

const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value;
}

render();

store.subscribe(render);

// button click listeners

incrementEl.addEventListener("click", () => {
    store.dispatch(increment(2));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});

