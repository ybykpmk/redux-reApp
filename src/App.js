import React from 'react';
import Counter from './component/Counter';
import IncreaseCounter from './component/IncreaseCounter';
import DecreaseCounter from './component/DecreaseCounter';
import IncreaseByTwoCounter  from './component/IncreaseByTwoCounter';
import DecreaseByThreeCounter from './component/DecreaseByThreeCounter';
import IncreaseByUserSetCounter from './component/IncreaseByUserSetCounter';


function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
      <br/><br/>
      <DecreaseByThreeCounter></DecreaseByThreeCounter>
      <br/><br/>
      <IncreaseByUserSetCounter></IncreaseByUserSetCounter>
    </div>
  );
}

export default App;
