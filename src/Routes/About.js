import { useEffect, useState } from "react";
import style from "./about.module.css"
import Button from "../components/Button";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(json => setData(json))
  }, []);


  // console.log(data)


  return (
    <div >
      <h1 className='h1'>this is about page</h1>
      <Button>click me</Button>

      <div className={style.container}>


      {
        data.map((item, index) => {
          return (
            <div className={style.card} >
              <h3>{item.title}</h3>
              <p> $ {item.price}</p>
              <img src={item.images[0]} height={200} width={200} alt="" />
            </div>
          )
        })
      }

      </div>
    </div>
  )
}

export default About
