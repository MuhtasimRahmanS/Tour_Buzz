import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signIn, githubLogin, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      console.log(result.user);
      toast.success("Login successful");
      navigate(location?.state ? location.state : "/");
    });
  };
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    setLoginError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        toast.success("Login successful");
        console.log(result.user);
        setSuccess("Login successful");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Incorrect email or password");
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="container mx-auto ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-center text-[#3DB043]">
          Please Login
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "You must fill the email input",
              },
            })}
            placeholder="email"
            name="email"
            className="input border-2 border-[#3DB043]"
          />
          <div>
            {errors.email && (
              <p className="text-red-600 text-sm font-medium mt-2">
                {errors.email.message}
              </p>
            )}{" "}
          </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative form-control">
            <input
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "You must fill the password input",
                },
              })}
              placeholder="password"
              name="password"
              className="input border-2 border-[#3DB043]"
            />
            <span
              className="absolute right-4 top-1/3"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div>
            {errors.password && (
              <p className="text-red-600 text-sm font-medium mt-2">
                {errors.password.message}
              </p>
            )}{" "}
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#3DB043] text-white">Login</button>
        </div>
      </form>
      {loginError && (
        <p className="text-red-600 text-sm font-medium text-center">
          {loginError}
        </p>
      )}
      {success && (
        <p className="text-green-600 text-sm font-medium text-center">
          {success}
        </p>
      )}
      <p className="text-center">
        Do not have an account,{" "}
        <Link to="/register" className="text-blue-600 text-lg font-medium">
          {" "}
          Register
        </Link>
      </p>
      <div>
        <h3 className="text-center text-2xl font-medium text-[#3DB043]">
          Login With
        </h3>
      </div>
      <div className=" md:w-3/4 lg:w-1/2 mx-auto  my-6 gap-4 flex justify-center text-white">
        <div>
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center  p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bg-[#3DB043] dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className="text-xl font-medium">Google</p>
          </button>
        </div>
        <div>
          <button
            onClick={() => handleSocialLogin(githubLogin)}
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center  p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bg-[#3DB043] dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p className="text-xl font-medium">GitHub</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
