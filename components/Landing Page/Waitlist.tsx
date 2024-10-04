"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export function Waitlist() {
  const [state, handleSubmit] = useForm("xkgwdbqz");
  const [email, setEmail] = useState("");

  if (state.succeeded) {
    return (
      <p className="text-center text-lg text-green-600">
        🎉 Thanks for joining the waitlist!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-sm mx-auto space-y-4 p-4 bg-gray-50 shadow-md rounded-lg"
    >
      <input
        title="Email"
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="px-4 py-2 border-none outline-none ring-1 ring-charcoal rounded-md focus:ring-2 focus:ring-skyAqua"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />

      <button
        className={`${
          state.submitting
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gradient-to-r from-deepTeal to-skyAqua hover:via-skyAqua hover:to-skyBlue text-white font-semibold"
        } px-2 py-2 rounded-lg transition duration-200`}
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <div className="flex items-center justify-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <span>Joining...</span>
          </div>
        ) : (
          "Join our waitlist"
        )}
      </button>
    </form>
  );
}
