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
      console.error("🔥 Supabase REAL error:", error);
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
    <div
      className="referral-form-page"
      style={{ textAlign: "center", paddingTop: "2rem", paddingInline: "1rem" }}
    >
      <h2>Referrals</h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 1.5rem",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        Love our service? Spread the word and earn rewards! When you refer a
        friend, both you <strong>and</strong> your referral will receive
        <strong> 10% off</strong> your entire project. It’s our way of saying
        thanks for helping the community find a service they can trust. Just
        enter your info below and we’ll send you a personalized referral code to
        share!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "80%",
            maxWidth: "300px",
            textAlign: "center",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "80%",
            maxWidth: "300px",
            textAlign: "center",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#0a6c66",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            width: "fit-content",
          }}
        >
          Generate Referral
        </button>
      </form>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
};

export default ReferralForm;
