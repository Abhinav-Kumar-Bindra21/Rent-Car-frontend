import React from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Login = ({ setShowLogin }) => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { axios, setToken } = useAppContext();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // console.log("FORM SUBMITTED");

    try {
      const endpoint = state === "login" ? "/api/user/login" : "/api/user/register";

      const payload = state === "login" ? { email, password } : { username: name, email, password };

      const { data } = await axios.post(endpoint, payload);

      // console.log("LOGIN RESPONSE:", data);

      if (data.success) {
        localStorage.setItem("token", data.token);

        setToken(data.token);

        // console.log("TOKEN SAVED");

        setShowLogin(false);

        toast.success(data.message);
      } else {
        // console.log("FAILED");

        toast.error(data.message);
      }
    } catch (error) {
      // console.log("LOGIN ERROR:", error.response?.data || error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-black rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-(--primary-color)">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-(--primary-color)"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-(--primary-color)"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-(--primary-color)"
            type="password"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span onClick={() => setState("login")} className="text-(--primary-color) cursor-pointer">
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span onClick={() => setState("register")} className="text-(--primary-color) cursor-pointer">
              click here
            </span>
          </p>
        )}
        <button
          type="submit"
          className="bg-(--primary-color) hover:bg-blue-800 transition-all text-white w-full py-2 rounded-md cursor-pointer"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
