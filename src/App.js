import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Section Favorite
import { Favorite } from './components/Section/Favorite'

// Layout/View
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';

import Login from './pages/Auth/Login';

// Auth
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// import general styles
import './styles/styles.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Navbar />
            <Favorite />
            <div className="content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
