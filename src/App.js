import React from 'react'
import Service from './components/Service'
import About from './components/About'

const App = () => {
  const [data,setData] = React.useState([]);

  const [count,setCount] = React.useState(0);

  React.useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  })

  console.log("data : " , data)

  return (
    <div>

      <h1 style={{color:"blue",backgroundColor:"grey"}}>Hello Mister asutosh...</h1>

      <hr />
      <Service Count={count} />
      <About />
      <hr />

      {
        data.map((item)=> {
          return(
            <div>
              <h1> {item.id}   {item.title}</h1>

            </div>
          )
        })
      }
      
    </div>
  )
}

export default App
