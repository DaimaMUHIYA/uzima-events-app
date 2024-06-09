import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="login">
      <h1 className="loginTitle">Créer un compte</h1>
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
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Adresse mail" />
          <input type="text" placeholder="Mot de passe" />
          <button className="submit">S&apos;inscrire</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

// import { useState } from "react";
// import "./SignUp.css";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="firstName">Prénom :</label>
//       <input
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//       />
//       <br />
//       <label htmlFor="lastName">Nom :</label>
//       <input
//         type="text"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//       />
//       <br />
//       <label htmlFor="email">Adresse mail :</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <br />
//       <label htmlFor="password">Mot de passe :</label>
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <br />
//       <button type="submit">S'inscrire</button>
//     </form>
//   );
// };

// export default SignUp;
