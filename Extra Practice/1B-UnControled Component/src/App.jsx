import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default App;