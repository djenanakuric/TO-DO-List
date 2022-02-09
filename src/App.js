import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import AddToDo from './Components/AddToDO';

function App() {

    const [item, setItem] = useState([
        {
            id: 1,
            checked: false,
            item: 'Clean house'
        },
        {
            id: 2,
            checked: false,
            item: 'Walk'
        },
        {
            id: 3,
            checked: false,
            item: 'Make cake'
        }
    ]);

    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if (!newItem) return;
        addToDo(newItem);

    }

    const addToDo = (items) => {
        const id = item.length ? item[item.length - 1].id + 1 : 1;
        const myNewItems = { id, checked: false, item: items };
        const listItems = [...item, myNewItems];
        setItem(listItems);
    }

    return (
        <div className='App'>
            <Header />
            <Content
                item={item}
                setItem={setItem}
                length={item.length}
            />
            <AddToDo
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <Footer
                length={item.length}
            />
        </div>

    );
}

export default App;
