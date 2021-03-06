import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPlants from './pages/SearchPlants';
import SavedPlants from './pages/SavedPlants';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh background">
          <div className="">
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='/saved' 
              element={<SavedPlants />} 
            />
            <Route
              path='/search'
              element={<SearchPlants />}
            />
            <Route
              path='/ForgotPassword'
              element={<ForgotPassword />}
            />
            <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
          </div>
        </div>
      </Router>
      <Footer></Footer>
    </ApolloProvider>
  );
}

export default App;
