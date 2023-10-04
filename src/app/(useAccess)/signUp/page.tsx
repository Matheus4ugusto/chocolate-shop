"use client"

import FormSignUp from "@/components/FormSignUp";

export default function signUp() {
  return( <main style={{
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <FormSignUp/>
  </main>    );
}