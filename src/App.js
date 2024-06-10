function App() {
  return (
    <div className="app">
      <section className="side-nav"></section>
      <button onclick="displayResult()">+ New prompt</button>
      <ul className="historical"></ul>
      <nav>
        <p>Welcome back</p>
      </nav>
      <section className="main">
        <h1>This is using OpenAI API!</h1>
        <ul>
          <li></li>
        </ul>
        <div>
          <div className="container">
            <input type="text" id="inputField" />
            <button onclick="displayResult()">Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
