import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

const [person, setPerson] = useState(0);
const {id, name, height, birthDate, image} = data[person];

const previosPerson = () => {
  setPerson((person => {
    person --;
    if (person < 0) {
      return data.length-1;
    }
    return person;
  }))

}

const nextPerson = () => {
  setPerson((person => {
    person ++;
    if (person > data.length - 1) {
      person = 0;
    }
    return person;
  }))
}

  return (
    <div>
  <div className='container'> 
      <h1>10 корейских актеров, которых обожают сами корейцы</h1>
  </div>
    <div className="container">
      <img src={image} width="300px" alt="People"/>
    </div>

      <div className="container">
        <h2>{id} - {name}</h2>
      </div>

      <div className="container">
        <h2>{height}</h2>
      </div>

      <div className="container">
        <h2>{birthDate}</h2>
      </div>

    <div className="btn">
      <button onClick={previosPerson}>《 </button>
      <button onClick={nextPerson}> 》</button>
    </div>

    </div>
  );
}

export default App;
