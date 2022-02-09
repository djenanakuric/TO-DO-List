import React, { useRef } from 'react';

const AddToDo = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addToDo"> To do: </label>
            <input

                id='addToDo'
                type='text'
                placeholder="Add to do"
                required
                value={newItem}
                onChange={(e) => { setNewItem(e.target.value) }}
            />
            <button
                type='submit'
                onClick={() => inputRef.current.focus()}>Add</button>

        </form>
    )
}

export default AddToDo;