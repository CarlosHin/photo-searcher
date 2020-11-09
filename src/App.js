import logo from './logo.svg';
import React from 'react';
import './assets/styles/index.css';
import Search from './components/Search.js';
import Header from './components/Header.js';
import Carousel from './components/Carousel';
import Footer from './components/Footer.js';

import { Provider } from 'react-redux';
import { createStore,compose } from 'redux';
import reducer from './reducers/index.js'

const store = createStore(reducer, {
  photos: [],
  isLoading: false,
  actualPage:0,
  totalPages: 0
});

const App = () => (
  <Provider store={store}>
    <Header />
    <Search />
    <Carousel/>
    <Footer />
  </Provider>


)

export default App;
