import Home from './components/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => { return response.json() })
      .then((response) => {
        console.log(response);
      })
  }, [])

  return (
    <>
      <Home />
    </>
  );
}
export default App;
