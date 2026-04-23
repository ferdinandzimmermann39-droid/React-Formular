import { useState } from "react";
import WebsiteQuestions from "./websitequestions.tsx";
import WebsiteBudget from "./websitebudget.tsx";
import WebsiteExisting from "./websiteexisting.tsx";
import WebsitePages from "./websitepages.tsx";
import WebsiteAssets from "./websiteassets.tsx";
import WebsiteTimeframe from "./websitetimeframe.tsx";
import WebsiteContact from "./websitecontact.tsx";
import WebsiteLast from "./website_last.tsx";
import ProgressBar from "./progressbar.tsx";
import Swal from "sweetalert2";

type Service = "start" | "logo" | "website" | "logo_website" | "website_last";

function Steps() {
    const [service, setService] = useState<Service>("start");
    const [websiteStepIndex, setWebsiteStepIndex] = useState(0);

    const [goals, setGoals] = useState<string[]>([]);

    const [websiteBudget, setWebsiteBudget] = useState("");

    const [existingWebsite, setExistingWebsite] = useState("");
    const [websitePages, setWebsitePages] = useState<string[]>([]);
    const [websiteAssets, setWebsiteAssets] = useState("");
    const [websiteTimeframe, setWebsiteTimeframe] = useState("");

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [contactError, setContactError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");



    async function sendWebsiteRequest() {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "3b03a035-b7b6-42ed-8335-4e1578ebc2bf",
                subject: `Neue Website-Anfrage von ${name}`,
                from_name: "Website Formular",

                name,
                company,
                email,
                phone,
                message,

                goals: goals.join(", "),
                existingWebsite,
                websitePages: websitePages.join(", "),
                websiteAssets,
                websiteBudget,
                websiteTimeframe,
            }),
        });

        return await response.json();
    }


    const websiteSteps = [
        <WebsiteQuestions
            key="website-goals"
            goals={goals}
            setGoals={setGoals}
        />,
        <WebsiteExisting
            key="website-existing"
            existingWebsite={existingWebsite}
            setExistingWebsite={setExistingWebsite}
        />,
        <WebsitePages
            key="website-pages"
            websitePages={websitePages}
            setWebsitePages={setWebsitePages}
        />,
        <WebsiteAssets
            key="website-assets"
            websiteAssets={websiteAssets}
            setWebsiteAssets={setWebsiteAssets}
        />,
        <WebsiteBudget
            key="website-budget"
            websiteBudget={websiteBudget}
            setWebsiteBudget={setWebsiteBudget}
        />,
        <WebsiteTimeframe
            key="website-timeframe"
            websiteTimeframe={websiteTimeframe}
            setWebsiteTimeframe={setWebsiteTimeframe}
        />,
        <WebsiteContact
            name={name}
            setName={setName}
            company={company}
            setCompany={setCompany}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            message={message}
            setMessage={setMessage}
            contactError={contactError}
            setContactError={setContactError}
        />
    ];

    if (service === "logo") {
        return (
            <section className="questionform">
                <div className="questformcontent">
                    <div className="question">
                        <h1>Logo</h1>
                    </div>

                    <div className="q_options">
                        <button
                            type="button"
                            className="step_button"
                            onClick={() => setService("start")}
                        >
                            <div><h5>Zurück</h5></div>
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    if (service === "website") {
        const isFirstStep = websiteStepIndex === 0;
        const isLastStep = websiteStepIndex === websiteSteps.length - 1;

        return (
            <section className="questionform">
                <div className="questformcontent">
                    <div className="question">
                        <h1>Webseite</h1>
                    </div>

                    {websiteSteps[websiteStepIndex]}

                    <ProgressBar
                        currentStep={websiteStepIndex}
                        totalSteps={websiteSteps.length}
                    />
                    <div className="q_options">
                        <button
                            type="button"
                            className="step_button"
                            onClick={() => {
                                if (isFirstStep) {
                                    setService("start");
                                } else {
                                    setWebsiteStepIndex((prev) => prev - 1);
                                }
                            }}
                        >
                            <div><h5>Zurück</h5></div>
                        </button>

                        <button
                            type="button"
                            className="step_button"
                            onClick={() => {
                                const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                                const phoneIsValid = /^[0-9+\s()/.-]{6,}$/.test(phone);

                                if (websiteStepIndex === 0 && goals.length === 0) {
                                    return;
                                }

                                if (websiteStepIndex === 1 && existingWebsite === "") {
                                    return;
                                }

                                if (websiteStepIndex === 2 && websitePages.length === 0) {
                                    return;
                                }

                                if (websiteStepIndex === 3 && websiteAssets === "") {
                                    return;
                                }

                                if (websiteStepIndex === 4 && websiteBudget === "") {
                                    return;
                                }

                                if (websiteStepIndex === 5 && websiteTimeframe === "") {
                                    return;
                                }

                                if (websiteStepIndex === 6) {
                                    if (
                                        name.trim() === "" ||
                                        company.trim() === "" ||
                                        email.trim() === "" ||
                                        phone.trim() === ""
                                    ) {
                                        setContactError("Bitte füllen Sie alle Pflichtfelder aus.");
                                        return;
                                    }

                                    if (!emailIsValid) {
                                        setContactError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
                                        return;
                                    }

                                    if (!phoneIsValid) {
                                        setContactError("Bitte geben Sie eine gültige Telefonnummer ein.");
                                        return;
                                    }

                                    setContactError("");
                                }

                                if (isLastStep) {
                                    console.log({
                                        goals,
                                        existingWebsite,
                                        websitePages,
                                        websiteAssets,
                                        websiteBudget,
                                        websiteTimeframe,
                                        name,
                                        company,
                                        email,
                                        phone,
                                        message,
                                    });
                                    setService("website_last");
                                } else {
                                    setWebsiteStepIndex((prev) => prev + 1);
                                }
                            }}
                        >
                            <div><h5>{isLastStep ? "Anfrage vorbereiten" : "Weiter"}</h5></div>
                        </button>
                    </div>

                </div>
            </section>
        );
    }
    if (service === "website_last") {
        return (
            <section className="questionform">
                <div className="questformcontent">
                    <WebsiteLast
                        goals={goals}
                        existingWebsite={existingWebsite}
                        websitePages={websitePages}
                        websiteAssets={websiteAssets}
                        websiteBudget={websiteBudget}
                        websiteTimeframe={websiteTimeframe}
                        name={name}
                        company={company}
                        email={email}
                        phone={phone}
                        message={message}
                    />
                    <div className="progressbar_outer">
                        <ProgressBar
                            currentStep={websiteStepIndex}
                            totalSteps={websiteSteps.length}
                        />
                    </div>
                    <div className="q_options">
                        {submitError && <p className="contact_error">{submitError}</p>}
                        <button
                            type="button"
                            className="step_button"
                            onClick={() => setService("website")}
                        >
                            <div><h5>Zurück</h5></div>
                        </button>
                        <button
                            type="button"
                            className="step_button"
                            disabled={isSubmitting}
                            onClick={async () => {
                                try {
                                    setIsSubmitting(true);
                                    setSubmitError("");

                                    const result = await sendWebsiteRequest();

                                    if (result.success) {
                                        await Swal.fire({
                                            title: "Nachricht gesendet!",
                                            text: "Vielen Dank für Ihre Anfrage.",
                                            icon: "success",
                                            confirmButtonText: "Okay",
                                            background: "#f5f5f5",
                                            color: "#222222",
                                            confirmButtonColor: "#2f810e",
                                        });
                                        setService("start");
                                        setWebsiteStepIndex(0);
                                        setGoals([]);
                                        setExistingWebsite("");
                                        setWebsitePages([]);
                                        setWebsiteAssets("");
                                        setWebsiteBudget("");
                                        setWebsiteTimeframe("");
                                        setName("");
                                        setCompany("");
                                        setEmail("");
                                        setPhone("");
                                        setMessage("");
                                        setContactError("");

                                    } else {
                                        setSubmitError("Die Anfrage konnte nicht gesendet werden.");
                                    }
                                } catch (error) {
                                    console.error(error);
                                    setSubmitError("Beim Senden ist ein Fehler aufgetreten.");
                                } finally {
                                    setIsSubmitting(false);
                                }
                            }}
                        >
                            <div><h5>{isSubmitting ? "Wird gesendet..." : "Anfrage senden"}</h5></div>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
    if (service === "logo_website") {
        return (
            <section className="questionform">
                <div className="questformcontent">
                    <div className="question">
                        <h1>Logo & Webseite</h1>
                    </div>

                    <div className="q_options">
                        <button
                            type="button"
                            className="step_button"
                            onClick={() => setService("start")}
                        >
                            <div><h5>Zurück</h5></div>
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
                    <button
                        type="button"
                        className="q_option_link"
                        onClick={() => setService("logo")}
                    >
                        <div className="q_option">
                            <h3>Logo</h3>
                            <div className="logodiv">
                                <img src="/shield.svg" alt="Logo" />
                            </div>
                        </div>
                    </button>

                    <button
                        type="button"
                        className="q_option_link"
                        onClick={() => {
                            setWebsiteStepIndex(0);
                            setService("website");
                        }}
                    >
                        <div className="q_option">
                            <h3>Webseite</h3>
                            <div className="logodiv">
                                <img src="/world.svg" alt="Website Logo" />
                            </div>
                        </div>
                    </button>

                    <button
                        type="button"
                        className="q_option_link"
                        onClick={() => setService("logo_website")}
                    >
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

export default Steps;