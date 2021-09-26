import React, { useEffect, useState } from 'react';
import Added from '../added/added';
import Card from '../card/card';
import './body.css';

const Body = () => {
  const [informations, setInformation] = useState([])
  const [card, setCard] = useState([])
  useEffect(() =>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setInformation(data));
  },[])
  const added = (members) =>{
    const newCard = [...card,members];
    setCard(newCard)
  }
  return (
    <div className='body'>
      <div className='informations'>
        {
          informations.map(information => <Card
            key={information.id}
            member={added}
            information={information}
            ></Card>)
        }
      </div>
      <div>
        <Added card ={card}></Added>
      </div>
    </div>
  );
};

export default Body;