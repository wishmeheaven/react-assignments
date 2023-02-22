

const ToDoItem = ({item, handleCheck}) => {
    return (
        <li className="item">
            <input type="checkbox"                
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
            />        
        <label
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
        </li>
    )
}

export default ToDoItem