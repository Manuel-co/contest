"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Define Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    // Handle login logic here
    console.log("Email:", values.email);
    console.log("Password:", values.password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-4">
                {/* Email Field */}
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    as={Input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-2"
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"} // Toggle password visibility
                    placeholder="Enter your password"
                    as={Input}
                  />
                  {/* Eye icon for show/hide password */}
                  <div
                    className="absolute right-2 top-9 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-2"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
