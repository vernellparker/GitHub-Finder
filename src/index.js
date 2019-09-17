import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);
ReactDOM.render(<App />, document.getElementById("root"));
