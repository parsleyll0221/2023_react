import { useState } from 'react';
import logo from './logo.svg';

function App() {
  let [listData,setListData] = useState(1)
  return (
    <div className="App">
      <div>{listData}</div>
      <button onClick={()=>{setListData(listData+1)}}>click</button>
      <div className="han"></div>
    </div>
  );
}

export default App;
