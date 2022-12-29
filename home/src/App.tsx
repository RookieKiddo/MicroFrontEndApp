import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header name={"home"} />
    <div className="my-10">Home Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
