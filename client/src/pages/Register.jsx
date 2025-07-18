import AuthForm from "../components/AuthForm";
import axios from "axios";

const Register = () => {
   const handleRegister = async (data) => {
      try {
         const res = await axios.post("/api/auth/register", data);
         alert("Registration successful");
      } catch (err) {
         alert(err.response?.data?.message || "Registration failed");
      }
   };

   return (
      <div className="register-page">
          <AuthForm type="register" onSubmit={handleRegister} />
         <p className="form-link">
            Already have an account? <Link to="/login">Log in</Link>
         </p>
      </div>
   )
   
}

export default Register;