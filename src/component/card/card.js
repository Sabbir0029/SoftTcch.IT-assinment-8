import React from 'react';

const Card = (props) => {
  const {name, img} = props.information;
  return (
    <div>
      <h3>name :{name}</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default Card;