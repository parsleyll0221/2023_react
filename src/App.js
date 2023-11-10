import logo from './logo.svg';

function App() {
  const hello = "안녕하세요"
  function test() {
    return 100;
  }
  return (
    <div className="App">
      <div>{hello}{test()} house modify_2 win</div>
    </div>
  );
}

export default App;
