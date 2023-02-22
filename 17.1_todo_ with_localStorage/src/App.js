import {useState} from 'react';
import AddItem from './components/AddItem'

function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || []);
  const [newItem, setNewItem] = useState('')
  
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('toDoList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id, checked: false, item};
      const listItems = [...items, myNewItem]
      setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;
      AddItem(newItem);
      setNewItem('');
  }



  return (
    <div>
      <AddItem 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}          
        />

    </div>
  );
}

export default App;
