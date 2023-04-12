import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GettingGraphQLData from './components/GettingGraphQLData';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri:"http://localhost:3001/courses"
});

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
     <GettingGraphQLData />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
