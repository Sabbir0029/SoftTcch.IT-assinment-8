import React from 'react';
import './added.css';

const Added = (props) => {
  return (
    <div className='added'>
      <h1>Add To Members :{props.card.length}</h1>
      <h2>Salary :</h2>
    </div>
  );
};

export default Added;