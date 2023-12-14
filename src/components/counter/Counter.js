import react from 'react';

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/CounterSlice";

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);

    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement())
    }

    const incrementCounterHandler = () => {
        dispatch(counterActions.increment())
    }

    const fiveCounterHandler = () => {
        dispatch(counterActions.fiveIncrement(5))
    }

    return (
        <div>

            <p>{counter}</p>

            <div>
                <button onClick={decrementCounterHandler}>Decrement</button>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={fiveCounterHandler}>5</button>
            </div>

        </div>
    )

}


export default Counter;