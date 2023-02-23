import {useRef} from 'react';
import {FaPlus} from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleSubmit }) => {

    const inputRef = useRef();

    return (
        <from className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>AddItem</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange = {(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>            
        </from>
    )
}

export default AddItem