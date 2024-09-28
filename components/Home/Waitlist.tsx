"use client";

export function Waitlist() {
  const handleWaitlist = () => {
    alert("Added to waitlist");
  };
  return (
    <button
      className="bg-gradient-to-r from-deepTeal to-skyAqua hover:via-skyAqua hover:to-skyBlue text-white font-bold p-4 rounded-lg"
      onClick={handleWaitlist}
    >
      Join our waitlist
    </button>
  );
}
