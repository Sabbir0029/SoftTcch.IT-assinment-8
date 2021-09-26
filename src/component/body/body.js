import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import './body.css';

const Body = () => {
  const [informations, setInformation] = useState([])
  useEffect(() =>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setInformation(data));
  },[])
  return (
    <div className='body'>
      <div>
        {
          informations.map(information => <Card
            key={information.id}
            information={information}
            ></Card>)
        }
        
      </div>
      <div>
        <h3>kjgsdayufgifk</h3>
      </div>
    </div>
  );
};

export default Body;