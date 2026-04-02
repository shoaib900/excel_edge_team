import React, { useState } from 'react'
import style from "./service.module.css";

const Service = () => {
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
    return (
        <div>

            <h1 className={style.h1}>hello Service page
                <button onClick={() => { setNumber(number + 1); setErrormsg("") }}>+</button> {number}
                <button onClick={Subtract }>-</button> 
                <br />
                <p>{errormsg} </p>
                </h1>

        </div>
    )
}

export default Service
