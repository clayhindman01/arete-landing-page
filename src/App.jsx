import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Replace this with Supabase / Mailchimp / ConvertKit later
    console.log(email);

    setSubmitted(true);
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="logo">
          ARETE
        </div>

      </header>

      <main>
        <section className="hero">
          <p className="tagline">
            Excellence through action.
          </p>

          <h1>
            Build discipline.
            <br />
            Become who you want to be.
          </h1>

          <p className="subtitle">
            Arete is your AI accountability partner that turns your goals
            into daily actions, adapts your plan, and helps you build
            lasting habits.
          </p>

          <form className="signup" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success">
                You're on the list. We'll notify you when Arete launches.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                  Join the Waitlist
                </button>
              </>
            )}
          </form>

          <p className="note">
            No spam. Early users get lifetime launch perks.
          </p>
        </section>


        <section className="features">
          <Feature
            title="Daily Check-ins"
            text="Reflect on your progress and let Arete understand what is working."
          />

          <Feature
            title="Adaptive Plans"
            text="Your daily tasks evolve based on your consistency, goals, and feedback."
          />

          <Feature
            title="Build Momentum"
            text="Track streaks, complete commitments, and create lasting discipline."
          />
        </section>


        <section className="how">
          <h2>
            Discipline shouldn't depend on motivation.
          </h2>

          <p>
            Most people know what they should do.
            The hard part is doing it consistently.
            Arete bridges the gap between intention and action.
          </p>
        </section>


        <section className="cta">
          <h2>
            Ready to start becoming your best self?
          </h2>

          <button>
            Join the Waitlist
          </button>
        </section>
      </main>
    </div>
  );
}


function Feature({ title, text }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}