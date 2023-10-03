import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchRickAndMorty from './containers/home';
import GlobalStyle from './styles/GlobalStyle'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <SearchRickAndMorty/>
  <GlobalStyle/>
  </>
);

