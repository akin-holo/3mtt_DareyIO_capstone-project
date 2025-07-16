import AuthForm from "../components/authForm";
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

   return <AuthForm type="registration" onSubmit={handleRegister} />
}

export default Register;