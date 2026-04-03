import React, { useState } from 'react'
import style from "./service.module.css";

const Service = ({Count}) => {

    // const {Count} = props

    const [number, setNumber] = useState(0);
    const [errormsg,setErrormsg] = useState("");

    function Subtract(){
        if(number === 1){
            setNumber(1)
            setErrormsg("Error.... can't be less than 1... ")
        }else{
            setNumber(number - 1);
        }
    }

    function reset(){
        setNumber(0)
    }
    function sum10(){
        setNumber(number +10);
    }
    return (
        <div>

            <h1 className={style.h1}>hello Service page
                <button onClick={() => { setNumber(number + 1); setErrormsg("") }}>+</button> {number}
                <button onClick={Subtract }>-</button> 
                <br />
                <p>{errormsg} </p>
                <hr />
                <button onClick={reset }>reset</button> &nbsp; 
                <button onClick={sum10 }>plus by 10</button>
                </h1>
                <hr />
                <h2>{Count} </h2>

        </div>
    )
}

export default Service
