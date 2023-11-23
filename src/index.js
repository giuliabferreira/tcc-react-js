import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()


ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById('root')
);