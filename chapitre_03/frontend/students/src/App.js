import React, { useEffect, useState } from 'react';
import Add from './components/Add';
import List from './components/List';




function App() {
  const [prenom, setPrenom] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((response) => { return response.json() })
      .then((response) =>
        setPrenom(response));
  }, [])

  return (

    <>
      <List prenom={prenom}></List>
      <Add />
    </>
  );
}
export default App;


