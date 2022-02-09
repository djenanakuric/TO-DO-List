import React from 'react';

const AddToDo = ({ newItem, setNewItem, handleSubmit }) => {
   
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
               >Add</button>

        </form>
    )
}

export default AddToDo;
