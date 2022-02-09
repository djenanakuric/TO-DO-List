
const Content = ({item, setItem, length}) => {

    console.log (item);
    const handleCheck = (id) => {
    const itemList = item.map( (item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItem(itemList);
    }

    const handleDelete = (id) => {
        const itemList = item.filter( (item) => item.id !==id)
        setItem(itemList);
    }

    return (
        <main>
            {length > 0 ? (
               <ul>
              {item.map(  (items) => (
                <li className="item" key={items.id}>
                    <input
                        type='checkbox'
                        onChange = { () => handleCheck(items.id)}
                        checked = {items.checked}
                    />

                    <label onDoubleClick={() => handleCheck(items.id)}>
                        {items.item}
                    </label>

                    <button onClick={() => handleDelete(items.id)}> Obrisi </button>
                </li>

              ))}  
            </ul>  
            ) : ( <p>You done all TO DO</p>)}
               
        </main>
    )
}

export default Content;