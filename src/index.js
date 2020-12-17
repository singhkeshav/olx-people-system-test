import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { API_END_POINT } from './config/config';
const cache = new InMemoryCache();
//API End Point ....
const link = new HttpLink({
  uri: API_END_POINT
});
// Apollo Client ....
const client = new ApolloClient({
  cache,
  link
})
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

