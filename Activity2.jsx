import React, { useState } from 'react';
const AddList = () => {
  const [name, setName] = useState('');
  const [List, setList] = useState([]);
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...List, name]);
    setName('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default AddList;
