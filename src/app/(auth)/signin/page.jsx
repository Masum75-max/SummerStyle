"use client";
import { Check } from "@gravity-ui/icons";
import { authClient } from "../../../lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
  

  
const SignInPage = () => {

    const googleSignIn = async () => {
       const  data = await authClient.signIn.social({
            provider: "google",
       });
       console.log(data);
    }

  const path = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); 
    const Inputdata = Object.fromEntries(formData.entries());

  
    
      const { data, error } = await authClient.signIn.email({
        email: Inputdata.email,
        password: Inputdata.password
    
      });

      if(!error){
            path.push('/');
      }
      else{
        alert("Invalid email or password. Please try again.");
      }

   
  };

  return (
    <>
    <Form
      className="flex w-96 flex-col gap-4 p-4 rounded-lg bg-white shadow-md"
      onSubmit={onSubmit}
    >
     

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
        
      </div>

      <div>
        Dont have an account? <Link href="/signup" className="text-green-600 hover:underline">Sign Up</Link>
      </div>
    </Form>

    <div>
        <p className="text-center mt-4 text-gray-600">Or sign in with</p>
    <div className="flex justify-center gap-4 mt-2">
          <Button variant="outline" onClick={googleSignIn}>
            Google
          </Button>
    </div>
     </div>
    </>

      
  );
}
     


export default SignInPage;