import { useState } from "react";
import WebsiteQuestions from "./websitequestions.tsx";
import WebsiteBudget from "./websitebudget.tsx";
import WebsiteExisting from "./websiteexisting.tsx";
import WebsitePages from "./websitepages.tsx";
import WebsiteAssets from "./websiteassets.tsx";
import WebsiteTimeframe from "./websitetimeframe.tsx";
import WebsiteContact from "./websitecontact.tsx";
import WebsiteLast from "./website_last.tsx";

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
            key="website-contact"
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
                                if (
                                    websiteStepIndex === 6 &&
                                    (
                                        name.trim() === "" ||
                                        company.trim() === "" ||
                                        email.trim() === "" ||
                                        phone.trim() === ""
                                    )
                                ) {
                                    return;
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

                    <div className="q_options">
                        <button
                            type="button"
                            className="step_button"
                            onClick={() => setService("website")}
                        >
                            <div><h5>Zurück</h5></div>
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