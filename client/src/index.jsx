import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './component/App';
import GlobalStyles from './GlobalStyle';
import Navbar from './component/navbar/Navbar';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
  <Router>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('app'),
);
