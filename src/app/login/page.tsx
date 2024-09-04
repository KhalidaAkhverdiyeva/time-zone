"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebaseConfig";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login: React.FC = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const handleLogin = async (
    values: { email: string; password: string },
    { setSubmitting, setErrors }: any
  ) => {
    setSubmitting(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      console.log("Token:", token);
      document.cookie = `authToken=${token}; path=/; max-age=3600; Secure; SameSite=Lax`;

      router.push("/timezone/home");
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "User not found.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      }
      setErrors({ api: errorMessage });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center p-[15px] flex-col md:flex-row md:p-[0px] items-center bg-gray-100">
      <div className="w-[400px] md:w-[500px] h-[500px] border flex flex-col items-center justify-center bg-[#7E5F7B]">
        <div className="max-w-md text-center p-8 flex flex-col gap-[50px]">
          <h2 className="text-[32px] font-bold text-white">New to our Shop?</h2>
          <p className="text-[18px] text-white">
            There are advances being made in science and technology every day,
            and a good example this is it.
          </p>
          <a
            href="/register"
            className="py-[8px] px-[16px] text-lg w-full text-[18px] font-medium text-white border-solid border-white border-[1px] rounded-md transition-colors duration-300 ease-in-out "
          >
            Create an account
          </a>
        </div>
      </div>
      <div className="w-[400px] md:w-[500px] h-[500px] border bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded flex flex-col gap-[40px] ">
          <h2 className="text-[32px] font-bold text-center">Welcome Back!</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-[30px]">
                <div className=" pb-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="block w-full py-1 border-b  border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm my-2 text-red-500"
                  />
                </div>
                <div className=" pb-2">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    className="block w-full py-1 border-b border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-500 my-2"
                  />
                </div>
                <ErrorMessage
                  name="api"
                  component="p"
                  className="text-sm text-red-500"
                />
                <div>
                  <button
                    type="submit"
                    className={`w-full px-4 py-2 text-[18px] font-medium text-blue-700 border-blue-700 border-solid border-[1px] rounded-md transition-colors duration-300 ease-in-out ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    } hover:bg-blue-700 hover:text-white`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
