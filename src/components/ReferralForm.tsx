import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const ReferralForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState<string>("");

  const generateReferralCode = () =>
    Math.random().toString(36).substring(2, 8).toUpperCase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = generateReferralCode();
    setReferralCode(code);

    const { error } = await supabase.from("customers").insert([
      {
        name,
        email,
        referral_code: code,
      },
    ]);

    if (error) {
      console.error("🔥 Supabase REAL error:", error); // NEW better error log
      setStatus("Failed to save to database.");
      return;
    }

    setStatus("Referral code saved successfully!");

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: "Bearer re_test_1234567890abcdef",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Referral App <noreply@resend.dev>",
          to: email,
          subject: "Thanks for your referral!",
          html: `<p>Hi ${name},</p><p>Thanks for signing up! Your referral code is <strong>${code}</strong>.</p>`,
        }),
      });

      console.log("Email sent");
    } catch (err) {
      console.error("Email error:", err);
      setStatus("Failed to send referral email.");
    }
  };

  return (
    <div className="referral-form-page">
      <h2>Referrals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Generate Referral</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ReferralForm;
