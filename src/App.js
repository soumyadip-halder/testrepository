import React from "react";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Headline from "./components/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Headline header="Posts" desc="Click the button to render" />
      </section>
    </div>
  );
}

export default App;
