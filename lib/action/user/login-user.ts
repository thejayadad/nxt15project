'use server'
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        email,
        password,
      });
    } catch (error) {
      const someError = error as CredentialsSignin;
      return someError.cause;
    }
    redirect("/");
  };

  export {login}