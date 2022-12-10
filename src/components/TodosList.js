
export function TodosList({ items, removetodo, markAsCompleted }) {
  return (
      <ul className="todo-list">
        { items.map( item => (
            <li className=''>
              <div className="view">
                <input onClick={markAsCompleted(item)} className="toggle"
                       type="checkbox"/>
                <label>{item.title}</label>
                <button onClick={()=>{removetodo(item)}} className="destroy"/>
              </div>
              <input className="edit"/>
            </li>
        ))}
      </ul>
  );
}