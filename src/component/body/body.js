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
  // Event listener
  const added = (members) =>{
    const newCard = [...card,members];
    setCard(newCard)
  }
  return (
    <div className='body'>
      {/* This function shows member information */}
      <div className='informations'>
        {
          informations.map(information => <Card
            key={information.id}
            member={added}
            information={information}
            ></Card>)
        }
      </div>
      <div className='added'>
        {/* This function shows the names of the members and the total of their salaries */}
        <Added cards ={card}></Added>
      </div>
    </div>
  );
};

export default Body;