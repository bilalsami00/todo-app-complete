import { useState } from 'react';
import './App.css';

function App() {
  const mystyle = {
    color: 'blue',
    backgroundColor: 'white',
    padding: '10px',
    fontFamily: 'math',
  };

  // creating a list
  const [list, setList] = useState(['18 march 23', 'apple5', 'peach', 'banana']);

  // usestate for input
  const [inputValue, setInputValue] = useState('');

  // delete list
  const deleteTodo = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  // update list
  // update same value
  // clear input field
  // editmode false
  const updateTodo = () => {
    setInputValue('');
    setEditMode(false);

    let update = [...list];
    update[editIndex] = inputValue; // h.w
    setList(update); // h.w
  };

  // edit list
  const editTodo = (item, index) => {
    setInputValue(item);
    setEditMode(true);

    //h.w
    setEditIndex(index);
  };

  // checkbox state and handler
  const [checkedList, setCheckedList] = useState([]);

  const handleChecked = (index) => {
    let newList = [...checkedList];
    if (newList.includes(index)) {
      newList = newList.filter((item) => item !== index);
    } else {
      newList.push(index);
    }
    setCheckedList(newList);
  };

  ///////////////////////////////////////  19march2023  ///////////////////////////////////////////////////////
  const [editMode, setEditMode] = useState(false);
  const [updateList, setUpdateList] = useState();

  const [editIndex, setEditIndex] = useState(false);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const addItem = () => {
    let copyArr = [...list]; // let copyArr = list --> copy by refrence WE NEED COPY BY VALUE
    copyArr.push(inputValue);
    setList(copyArr);
  };

  return (
    <>
      <div className="App">
        <header style={{ backgroundColor: 'gray' }} className="App-header">
          <div style={mystyle}>
            <h1>TODO APP</h1>

            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

            {editMode ? (
              <button onClick={updateTodo}>Update</button>
            ) : (
              <button onClick={addItem}>ADD</button>
            )}

            <h1>{inputValue}</h1>

            <button onClick={addItem}>ADD</button>

            {list.map((item, index) => {
              return (
                <div key={index}>
                  <label>
                    <input type="checkbox" checked={checkedList.includes(index)} onChange={() => handleChecked(index)} />
                    <span style={{ textDecoration: checkedList.includes(index) ? 'line-through' : 'none' }}>{item}</span>
                  </label>
                  <button onClick={() => deleteTodo(index)}>delete</button>
                  <button onClick={() => editTodo(item, index)}>edit</button>
                </div>
              );
            })}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
