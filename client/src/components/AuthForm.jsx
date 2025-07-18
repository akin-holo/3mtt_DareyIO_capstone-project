import { useState } from "react";
import "../styles/AuthForm.css";

const AuthForm = ({ type, onSubmit }) => {
   const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: ""
   });

   const handleChange = e => {
      setFormData({ ...formData, [e.target.name] : e.target.value })
   };

   const handleSubmit = e => {
      e.preventDefault();
      onSubmit(formData);
   };

   return (
      <form onSubmit={handleSubmit} className="auth-form">
         {type === "register" && (
            <input
               type="text"
               name="username"
               placeholder="username"
               value={formData.username}
               onChange={handleChange}
               required
            />
         )}

            <input 
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={handleChange}
               required
            />

            <input
               type="password"
               name="password"
               placeholder="password"
               value={formData.password}
               onChange={handleChange}
               required
            />

            <button type="submit">{type === "login" ? "Log in" : "register"}</button>
      </form>
   );

};

export default AuthForm