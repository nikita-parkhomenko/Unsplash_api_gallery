import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import ImageList from './components/image-list/image-list';
import FullSizeImage from './components/full-size-image/full-size-image';

import './App.css';

const App = () =>  (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={ImageList} />
      <Route exact path="/:id" component={FullSizeImage} />
    </div>
  </BrowserRouter>
  );


export default App;
