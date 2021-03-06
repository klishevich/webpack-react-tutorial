import React from "react";
import ReactDOM from "react-dom";

import FormContainer from "./containers/FormContainer.jsx";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
