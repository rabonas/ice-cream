import { useEffect, useState } from 'react';
import Column from '../components/Column'
import Intro from '../components/Intro';
import Loader from '../components/Loader';


export default function Home() {
    const [arr, setArr] = useState([]);
    const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/menuData').then( res => res.json()).then(data => {
            setArr(data);
            setIsLoader(false)
          })
      }
      ,2000)
    }
      , [])
    
    
    const hendleButton = (id) => {
      fetch(`http://localhost:8000/menuData/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      const newBannerArr = arr.filter((el) => el.id !== id)
      setArr(newBannerArr)
    }
        

  const iceCreamList = arr.map( el => {
    return (
      <Column image={`img/ice-cream-${el.id}.svg`} name={el.iceCream.name} description={el.description} price={el.price} id={el.id} deleteFunction={hendleButton} />
    )
  })
  return (
    <div className="wrapper">
      
      <Intro />
      <section className="ice-creams">
        <div className="container" >
          <div className="row">
            {isLoader ? <Loader/> : iceCreamList}
          </div>
        </div>
      </section>
    </div>
  );
}