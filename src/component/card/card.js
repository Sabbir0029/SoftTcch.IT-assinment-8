import React from 'react';
import './card.css';
// This function shows member information
const Card = (props) => {
  const {name, img, position,id, salary, institution} = props.information;
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h1 className='name'>Name : {name}</h1>
      <h3>Id : {id}</h3>
      <h3>Institution : {institution}</h3>
      <h2>Position : {position}</h2>
      <h2>Salary : {salary}</h2>
      {/* button */}
      <button
      onClick={() => props.member(props.information)}
       className='btn'>Added</button>
    </div>
  );
};

export default Card;