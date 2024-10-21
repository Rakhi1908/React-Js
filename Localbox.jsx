import React, { useEffect, useState } from 'react';

export default function Localbox() {
  const [values, setValues] = useState({ name: "", email: "" });

  const [data, setData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    return savedData || [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function submitForm(e) {
    e.preventDefault();
    if (values.name && values.email) {
      setData([...data, values]);
      setValues({ name: "", email: "" });
    }
  }

  function editItem(index) {
    const updatedName = prompt("Enter new name:", data[index].name);
    const updatedEmail = prompt("Enter new email:", data[index].email);

    if (updatedName && updatedEmail) {
      const updatedData = [...data];
      updatedData[index] = { name: updatedName, email: updatedEmail };
      setData(updatedData);
    }
  }

  function deleteItem(index) {
    setData(data.filter((_, i) => i !== index));
  }

  function clearAll() {
    setData([]);
  }

  return (
    <div>
      <h1>Localbox Miner</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.email}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {data.length > 0 && <button onClick={clearAll}>Clear All</button>}
    </div>
  );
}
