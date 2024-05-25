"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

export default function Login() {
  const router = useRouter();

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    companyname: "",
    number: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAction = async () => {
    if (state === "Login") {
      await login();
    } else {
      await signup();
    }
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => (responseData = data));
  
    if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/admin/dashboard');
    } else {
        alert("Login failed: " + responseData.errors); // Display login failure message
    }
  };
  
  const signup = async () => {
    console.log("Signup Function Executed", formData);
    const hashedPassword = await bcrypt.hash(formData.password, 10); // Hash the password
  
    let responseData;
    await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, password: hashedPassword }), // Send the hashed password
    })
        .then((response) => response.json())
        .then((data) => (responseData = data));
  
    if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/admin/dashboard');
    } else {
        alert("Signup failed: " + responseData.errors); // Display signup failure message
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            {state === "Sign Up" && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="companyname">Company Name</Label>
                  </div>
                  <Input
                    id="companyname"
                    name="companyname"
                    value={formData.companyname}
                    onChange={changeHandler}
                    placeholder="Enter the company name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="number">Phone Number</Label>
                  </div>
                  <Input
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={changeHandler}
                    placeholder="Enter Phone number"
                    required
                  />
                </div>
              </>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full" onClick={()=>{state === "Login"?login():signup()}}>
              {state === "Login" ? "Login" : "Sign Up"}
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {state === "Sign Up" ? (
              <>
                Already have an account?{" "}
                <span className="underline" onClick={() => setState("Login")}>
                  Login here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span className="underline" onClick={() => setState("Sign Up")}>
                  Sign up
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
