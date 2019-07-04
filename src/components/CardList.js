import React from 'react';
import Card from './Card.js';
const CardList = ({robots}) => {
  //here we store the info contained in the robots array in cardComponent variable using robots.map((user,ind)=>{return(stuff)})
  const cardComponent = robots.map((user,i)=>{
    return(
      <Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
      />
    );
  })
  return (<div>


  {cardComponent}

  </div>);

}

export default CardList;
