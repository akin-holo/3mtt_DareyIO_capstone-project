import AuthForm from "../components/AuthForm";
import axios from "axios";

const Login = () => {
   const handleLogin = async (data) => {
      try {
         const res = await axios.post("/api/auth/login", data);
         localStorage.setItem("token", res.data.token);
         alert("Login successful");
      } catch (err) {
         alert(err.response?.data?.message || "Login failed");
      }
   };

   return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;