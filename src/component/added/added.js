import React from 'react';
import './added.css';

const Added = (props) => {
  console.log(props.cards.name);
  const {cards} = props;
  let total = 0;
  let member = []
  for(const card of cards){
      total = total + parseFloat(card.salary);
      member = member + card.name;
  }
  return (
    <div className='add'>
      <h1>Add To Members :{props.cards.length}</h1>
      <h2>Salary : {total}</h2>
      <h3>{member}</h3>
    </div>
  );
};

export default Added;