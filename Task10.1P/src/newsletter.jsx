// frontend/src/components/NewsletterSubscription.jsx
import React, { useState } from "react";
import axios from "axios";
import "./newsletter.css"; // Ensure you have this CSS file

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const res = await axios.post("http://localhost:3007/subscribe", { email });
      setResponseMessage(res.data.message);
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setResponseMessage(error.response.data.message);
      } else {
        setResponseMessage("Subscription failed. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h1>Subscribe to DEV@Deakin</h1>
      <form id="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <p id="response-message">{responseMessage}</p>
    </div>
  );
};

export default NewsletterSubscription;
