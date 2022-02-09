
const Content = ({ item, setItem, length }) => {

    console.log(item);
    const handleCheck = (id) => {
        const itemList = item.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItem(itemList);
    }

    const handleDelete = (id) => {
        const itemList = item.filter((item) => item.id !== id)
        setItem(itemList);
    }

    return (
        <main>
            {length > 0 ? (
                <ul>
                    {item.map((items) => (
                        <li className="item" key={items.id}>
                            <input
                                type='checkbox'

                                onChange={() => handleCheck(items.id)}
                                checked={items.checked}
                            />

                            <label
                                onDoubleClick={() => handleCheck(items.id)}
                                style={items.checked ? { textDecoration: 'line-through' } : null}>
                                {items.item}
                            </label>

                            <button onClick={() => handleDelete(items.id)}> Delete </button>
                        </li>

                    ))}
                </ul>
            ) : (<p>Add your TO DO</p>)}

        </main>
    )
}

export default Content;