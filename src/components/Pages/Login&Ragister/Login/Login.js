import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const { signIn, providerLogIn } = useContext(AuthContext);
  const handleLogin = (data) => {
    console.log(data);

    // signIn(data.email, data.password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     setLoginUserEmail(data.email);
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //     setLoginError(error.message);
    //   });
  };

  // handleGoogleLogin
  // const handleGoogleLogin = () => {
  //   providerLogIn()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div className=" flex justify-center items-center">
      <div className="p-7 w-94">
        <h2 className="text-2xl text-center mb-5">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* email  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 carecter" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forgate Password ?</span>
            </label>
          </div>
          <input className="btn btn-info text-white w-full" type="submit" />
          <div></div>
        </form>
        <p>
          New to Doctors Protal ?
          <Link to="/signup" className="text-info">
            Create a new Acount
          </Link>
        </p>
        <div className="divider text-secondary">OR</div>
        <button className="btn btn-outline w-full">CONTINT WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
