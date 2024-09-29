import { useMutation } from "@tanstack/react-query";
import api from "../lib/Axios";
import toast from "react-hot-toast";

interface Login {

  email: string;
  password: string;
  
}


async function loginUser(data: Login) {
  const response = await api.post("/user/login", data);
  return response.data; 
}

const useLogin= () => {
  const mutation = useMutation({
    mutationFn: loginUser,
    onError: (error: any) => {
      console.error("Signup error:", error);
      if (error.response && error.response.data) {
        console.error("Detailed error message from server:", error.response);
        toast.error(error.response.data.error ||error.response.data.message || 'Signin failed. Please try again',{
            position:'top-right'
        });
       
      } else {
       
        console.log('Signup failed. Please try again.')
        toast.error('Sign in failed. Please try again',{
            position:'top-right'
        });
      }
    },
    onSuccess: (data) => {

      if (data.token) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data));
        toast.success('Login Successfully, Welcame back',{
            position:'top-right'
      });
      }
    },
  });


  const handleLogin = (data: Login) => {
    
    mutation.mutate(data);
  };

  return { handleLogin, mutation }; 
};

export default useLogin
