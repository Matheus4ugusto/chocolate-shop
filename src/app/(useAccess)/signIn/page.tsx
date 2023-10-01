"use client";

import Form from "@/components/Form";
import SignIn__Inputs from "@/components/signIn__Inputs";

export default function signIn() {
  return (
    <main
      style={{
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form>
        <SignIn__Inputs />
      </Form>
    </main>
  );
}
