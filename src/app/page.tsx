"use client";

import { useState } from "react";
import SignupPage from "./components/SignupPage";
import Success from "./components/Success";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <main className="bg-neutral-charcoal grid md:place-items-center md:p-16 min-h-screen">
      {!success ? (
        <SignupPage setEmail={setEmail} onSuccess={setSuccess} />
      ) : (
        <Success email={email} onSuccess={setSuccess} />
      )}
    </main>
  );
}
