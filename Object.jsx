import React, { useState } from 'react';

const Array = () => {
  const [arr, setarr] = useState({
    Name: "Rakhi Tripathi",
    Age: 19,
    Occupation: "Full Stack Developer"
  });

  return (
    <div>
      <ul>
        {Object.keys(arr).map((key, index) => (
          <li key={index}>
            {key}: {arr[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Array;