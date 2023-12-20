// LoginForm.tsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from 'firebase/auth'; 

interface LoginFormProps {
  auth: Auth;
}

function LoginForm({ auth }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "testi@pilvi.fi" && password === "testi1") {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log("Kirjautuminen onnistui käyttäjälle: " + user?.email);
      } catch (error: any) {
        console.error("Kirjautuminen epäonnistui:", error.message);
      }
    } else {
      console.log("Virheellinen sähköposti tai salasana");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80vh',  // Aseta korkeus tarpeen mukaan
      border: '2px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: 'auto',
      maxWidth: '400px'
    }}>
      <div>
        <h2>Kirjaudu sisään</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Sähköposti:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Salasana:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Kirjaudu sisään</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;











