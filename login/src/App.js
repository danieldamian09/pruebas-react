import { useState } from 'react';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("formulario enviado")
    setEmail("");
    setPassword("")
  }


  return (
    <div className="App">
      <form
        onSubmit={handleFormSubmit}
      >
        <h2>Iniciar Sesion</h2>
        <label htmlFor="email">
          Correo
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <label htmlFor="password">
          Contraseña
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
