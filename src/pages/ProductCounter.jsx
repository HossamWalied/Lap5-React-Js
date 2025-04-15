import { useDispatch, useSelector } from "react-redux";
import { decreaseCounterBy1, increaseByCount, increaseCounterBy1, resetCounter } from "../store/slices/counter";

const ProductCounter = ()=>{
    const counter= useSelector(state=>state.counter.counterVal)
    const dispatch= useDispatch()
    return(
        <div>
            <h2>Product counter | Redux</h2>
            <hr />
            <div className="text-center">
                <h4>Counter : {counter}</h4>
                <button className="btn btn-danger mx-2" onClick={()=>dispatch(decreaseCounterBy1(counter -1))}>-1</button>
                <button className="btn btn-success mx-2" onClick={()=>dispatch(increaseCounterBy1(counter +1))}>+1</button>
                <button className="btn btn-info mx-2" onClick={()=>dispatch(resetCounter())}>{' '}Reset</button>
                <button className="btn btn-warning mx-2" onClick={()=>dispatch(increaseByCount(10))}>+10</button>
                <button className="btn btn-warning mx-2" onClick={()=>dispatch(increaseByCount(5))}>+5</button>


            </div>
        </div>
    )
}
export default ProductCounter;