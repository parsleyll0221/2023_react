import logo from './logo.svg';

function App() {
  const hello = "안녕하세요"
  function test() {
    return 100;
  }
  return (
    <div className="App">
      <div>{hello}{test()} web modify</div>
    </div>
  );
}

export default App;
