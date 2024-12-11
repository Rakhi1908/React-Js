import React, { useState } from 'react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { app } from '../Firebase1';

const db = getFirestore(app);

export default function Firestore() {
  const [users, setUsers] = useState([]);

  // Function to add data to Firestore
  async function addData() {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
      alert('Failed to add document. Please try again.');
    }
  }

  // Function to fetch data from Firestore
  async function fetchData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(), 
      }));
      setUsers(usersList); 
    } catch (error) {
      console.error('Error fetching documents:', error);
      alert('Failed to fetch documents. Please try again.');
    }
  }

  return (
    <div>
      <button onClick={addData}>Add Data</button>
      <button onClick={fetchData}>Fetch Data</button>
      <h3>Users List:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first} {user.last} (Born: {user.born})
          </li>
        ))}
      </ul>
    </div>
  );
}