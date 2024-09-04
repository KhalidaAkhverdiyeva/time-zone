"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebaseConfig";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const Register: React.FC = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const handleRegister = async (
    values: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    { setSubmitting, setErrors }: any
  ) => {
    setSubmitting(true);

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      router.push("/timezone/home");
    } catch (error) {
      setErrors({ api: "Registration failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center p-[15px] md:p-[0px] flex-col md:flex-row items-center bg-gray-100">
      <div className="w-[400px] md:w-[600px] h-[550px] border bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded flex flex-col gap-[20px]">
          <h2 className="text-[32px] font-bold text-center">
            Create an Account
          </h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-[10px]">
                <div className="">
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="block w-full py-1 border-b border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-sm mt-1 text-red-500"
                  />
                </div>
                <div className="">
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="block w-full py-1 border-b border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-sm mt-1 text-red-500"
                  />
                </div>
                <div className="">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="block w-full py-1 border-b border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm mt-1 text-red-500"
                  />
                </div>
                <div className="">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    className="block w-full py-1 border-b border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm mt-1 text-red-500"
                  />
                </div>
                <div className="">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="block w-full py-1 border-b border-gray-300 focus:outline-none"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-sm mt-1 text-red-500"
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
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="w-[400px] md:w-[600px] h-[550px] border flex flex-col items-center justify-center bg-[#7E5F7B]">
        <div className="max-w-md text-center p-8 flex flex-col gap-[50px]">
          <h2 className="text-[32px] font-bold text-white">Register</h2>
          <p className="text-[18px] text-white">
            Join us to explore the latest advancements in science and
            technology.
          </p>
          <a
            href="/login"
            className="py-[8px] px-[16px] text-lg w-full text-[18px] font-medium text-white border-solid border-white border-[1px] rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
