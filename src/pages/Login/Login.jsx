import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1 className="loginTitle">Connectez-vous</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <span className="icon">
              <FaGooglePlusG />
              Google
            </span>
          </div>
          <div className="loginButton facebook">
            <span className="icon">
              <FaFacebookF />
              Facebook
            </span>
          </div>
          <div className="loginButton github">
            <span className="icon">
              <FaGithub />
              Github
            </span>
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OU</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="text" placeholder="Mot de passe" />
          <button className="submit">Connexion</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import { useState } from "react";
// import "./Login.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="login-page">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Adresse mail :</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Mot de passe :</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
