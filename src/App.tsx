import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import ProductPage from './ProductPage';
import firebaseConfig from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Alusta Firebase-sovellus
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App: React.FC = () => {
  console.log('Rendering App component');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Puhdista kuuntelija komponentin purkautuessa
    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <>
        <h1>Tervetuloa sivustolle!</h1>

        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/products" /> : <LoginForm auth={auth} />}
          />
          <Route path="/products" element={<ProductPage />} />
          {/* Lisää muita reittejä tarvittaessa */}
        </Routes>
      </>
    </Router>
  );
};

export default App;











