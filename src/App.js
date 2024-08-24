import React, {useState} from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats';
import './index.css';
 
function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item=>item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems(items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure you want to delete all the items?');

    if(confirmed) {
      setItems([]);
    }
  }

  return (
    <div className='app'>
      <Logo/>
      <Form onAddItems={handleAddItem}/>
      <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;