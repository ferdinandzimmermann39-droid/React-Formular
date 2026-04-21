import { useState } from "react";

type Step = "start" | "logo" | "website" | "logo_website";

function Questions() {
  const [step, setStep] = useState<Step>("start");

  const [goals, setGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setGoals((prevGoals) =>
      prevGoals.includes(goal)
        ? prevGoals.filter((item) => item !== goal)
        : [...prevGoals, goal]
    );
  };

  if (step === "logo") {
    return (
      <section className="questionform">
        <div className="questformcontent">
          <div className="question">
            <h1>Logo</h1>
          </div>

          <div className="q_options">
            <button type="button" className="back_button" onClick={() => setStep("start")}>
              <div>
                <h5>Zurück</h5>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (step === "website") {
    return (
      <section className="questionform">
        <div className="questformcontent">
          <div className="question">
            <h1>Webseite</h1>
          </div>

          <div className="question">
            <h2>Was soll das Ergebnis für Sie leisten?</h2>


            <form className="choice_form">
              <label>
                <input className="choice"
                  type="checkbox"
                  checked={goals.includes("Professioneller auftreten")}
                  onChange={() => toggleGoal("Professioneller auftreten")}
                />
                Professioneller auftreten
              </label>

              <label>
                <input className="choice"
                  type="checkbox"
                  checked={goals.includes("Mehr Anfragen gewinnen")}
                  onChange={() => toggleGoal("Mehr Anfragen gewinnen")}
                />
                Mehr Anfragen gewinnen
              </label>


              <label>
                <input className="choice"
                  type="checkbox"
                  checked={goals.includes("Online besser gefunden werden")}
                  onChange={() => toggleGoal("Online besser gefunden werden")}
                />
                Online besser gefunden werden
              </label>

              <label>
                <input className="choice"
                  type="checkbox"
                  checked={goals.includes("Eine starke Marke aufbauen")}
                  onChange={() => toggleGoal("Eine starke Marke aufbauen")}
                />
                Eine starke Marke aufbauen
              </label>
            </form>
          </div>
          <div className="q_options">
            <button type="button" className="back_button" onClick={() => setStep("start")}>
              <div>
                <h5>Zurück</h5>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (step === "logo_website") {
    return (
      <section className="questionform">
        <div className="questformcontent">
          <div className="question">
            <h1>Logo & Webseite</h1>
          </div>

          <div className="q_options">
            <button type="button" className="back_button" onClick={() => setStep("start")}>
              <div>
                <h5>Zurück</h5>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="questionform">
      <div className="questformcontent">
        <div className="question">
          <h1>Was benötigen Sie?</h1>
        </div>

        <div className="q_options">
          <button type="button" className="q_option_link" onClick={() => setStep("logo")}>
            <div className="q_option">
              <h3>Logo</h3>
              <div className="logodiv">
                <img src="/shield.svg" alt="Logo" />
              </div>
            </div>
          </button>

          <button type="button" className="q_option_link" onClick={() => setStep("website")}>
            <div className="q_option">
              <h3>Webseite</h3>
              <div className="logodiv">
                <img src="/world.svg" alt="Website Logo" />
              </div>
            </div>
          </button>

          <button type="button" className="q_option_link" onClick={() => setStep("logo_website")}>
            <div className="q_option">
              <h3>Logo & Webseite</h3>
              <div className="logodiv">
                <img src="/shield.svg" alt="Logo" />
                <p>&</p>
                <img src="/world.svg" alt="Website Logo" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Questions;