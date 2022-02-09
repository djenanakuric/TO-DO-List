
const AddToDo = () => {
    return (
        <form className="addForm">
            <label htmlFor="addToDo"> To do: </label>
            <input 
                id='addToDo'
                type='text'
                placeholder="Add to do"
                required
            />
            <button>Add</button>

        </form>
    )
}

export default AddToDo;