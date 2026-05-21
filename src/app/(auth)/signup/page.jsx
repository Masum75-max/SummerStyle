"use client";
import { Check } from "@gravity-ui/icons";
import { authClient } from "../../../lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); 
    const Inputdata = Object.fromEntries(formData.entries());

    try {
    
      const { data, error } = await authClient.signUp.email({
        email: Inputdata.email,
        password: Inputdata.password,
        image: Inputdata.photoUrl,
        name: Inputdata.username,
      });

      if (error) {
        console.log("Signup error:", error);
        alert("Signup failed: " + (error.message || "Unknown error"));
      } else {
        console.log("Signup successful:", data);
        alert("Signup successful! Please check your email to verify your account.");
      }
    } catch (err) {
      console.log("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <Form
      className="flex w-96 flex-col gap-4"
      onSubmit={onSubmit}
    >
      <TextField className="w-full max-w-64" name="username">
        <Label>Username</Label>
        <Input placeholder="Enter username" />
        <Description>Choose a unique username for your account</Description>
      </TextField>

      <TextField className="w-full max-w-64" name="photoUrl">
        <Label>Photo URL</Label>
        <Input placeholder="Enter photo URL" />
        <Description>Enter the URL of your profile photo</Description>
      </TextField>

      <TextField
        isRequired
        name="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input type="email" placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input type="password" placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="flat"> {/* 'secondary' এর বদলে HeroUI তে সাধারণত 'flat' বা 'ghost' ব্যবহার হয় */}
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default SignUpPage;