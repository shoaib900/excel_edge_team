import React,{useState} from 'react'

const Service = () => {
  const [count,setCount] = useState(0)
  const [errmsg,setErrmsg] = useState("");
  
  function dec(){
    if(count === 0){
      setCount(0)
      setErrmsg("your value can't be in -ive...")
    }else{
      setCount(count - 1 )
    }
  }
  return (
    <div>
        <h1> this is service page {count} </h1>
        <p style={{color:"tomato"}}>{errmsg}</p>

        <button onClick={()=> {setCount(count + 1); setErrmsg("")}}>add</button> &nbsp;
        <button onClick={dec}>Subtract</button>

      <h1><pre>hello                      world</pre></h1>
      
    </div>
  )
}

export default Service
