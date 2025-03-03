import { useState } from 'react'
import  {Header}  from './components/header';
import { Content } from './components/content';
import './components/header.css'
import './components/content.css'
import './App.css'

const App = () =>{

  const [cardList , setCardList] = useState([
    {title:"picture1" , desc:"this is a picture of a dragon and a castle" , date:'1403/12/13'},
    {title:"picture2" , desc:"this is a picture of a dragon and a castle" , date:'1403/12/13'},
    {title:"picture3" , desc:"this is a picture of a dragon and a castle" , date:'1403/12/13'},
    {title:"picture4" , desc:"this is a picture of a dragon and a castle" , date:'1403/12/13'},
    {title:"picture5" , desc:"this is a picture of a dragon and a castle" , date:'1403/12/13'}
  ]);

  const itDelete = (title) => {
    const filteredData = cardList.filter((f) => f.title !== title);
    setCardList(filteredData);
  };


  return (
    <div className="holder">
      {/* <div className="header">
        <h2>Product List</h2>
        <div>add product</div>
      </div> */}
      {/* <div className="searchBar"></div>
      <div className="cardHolder">
        <div className="card">
          <div className="face"></div>
        </div>
      </div> */}
      <Header/>
      <Content itDelete={itDelete} cardList={cardList}/>
    </div>
  )
}

export default App
