"use client";

import FormSignIn from "@/components/FormSignIn";

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
      <FormSignIn />
    </main>
  );
}
