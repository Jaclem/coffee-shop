import { useState } from 'react';

function Search(props) {
  const [input, setValue] = useState('');
  const [updated, setUpdate] = useState(input);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  
  const buttonClick = (e) => {
    e.preventDefault();
    setUpdate(input);
    console.log(input);
  }

  return (
    <form>
      <input onChange={handleChange}></input>
      <button onClick={buttonClick}>{ props.label }</button>
      <h1>{ updated }</h1>
    </form>
  )
}

export default Search;