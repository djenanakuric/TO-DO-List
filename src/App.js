import React, {useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import AddToDo from './Components/AddToDO';

function App() {

  const [item, setItem] = useState([
    {
      id:1,
      checked: false,
      item: 'item 1'
    },
    {
      id:2,
      checked: false,
      item: 'item 2'
    },
    {
      id:3,
      checked: false,
      item: 'item 3'
    }
  ]);


  return (
    <div className='App'>
      <Header />
      <Content 
        item = {item}
        setItem = {setItem}
        length = {item.length}
      />
      <AddToDo />
      <Footer 
        length = {item.length} 
      />
    </div>
    
  );
}

export default App;
