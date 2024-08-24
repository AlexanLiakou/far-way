import React from 'react';

const Stats = ({items}) => {

const itemsInList = items.length;
const itemsPacked = items.filter(item => item.packed).length;
const percentage = Math.round((itemsPacked / itemsInList) * 100);

  return (
    <footer className='stats'>
      {items.length ===0 ? 
      <em>Start adding items to your list</em>
      :
      percentage === 100 ? 
      <em>You have everything packed. Have a nice trip!</em>
      :
      <em>You have {itemsInList} items on your list and you already packed {itemsPacked} ({percentage}%).</em>
      }     
    </footer>
  );
}

export default Stats;