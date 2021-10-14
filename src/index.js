import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, Qu } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import {ReactQueryDevtools} from 'react-query/devtools'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
        <ReactQueryDevtools initialIsOpen={false}/>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
