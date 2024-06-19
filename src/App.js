function App() {
  return (
    <div className="app">
      <section className="side-nav">
      <button onclick="displayResult()">+ New prompt</button>
      <ul className="historical">
        <li></li>
      </ul>
      <nav>
        <p>Welcome back</p>
      </nav>
      </section>
      <section className="main">
        <h1>This is using OpenAI API!</h1>
        <ul>
          <li></li>
        </ul>
        <div className="bottom-div">
          <div className="container">
            <input type="text" id="inputField" />
            <button onclick="displayResult()">Submit</button>
          </div>
          <p className="generic-info">
            This application is using Chat GPT. The goal is to test basic functionality
            and allow experiementation of the OpenAI API.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
