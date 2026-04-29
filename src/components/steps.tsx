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
import LogoFirst from "./logofirst.tsx";
import LogoStyle from "./logostyle.tsx";
import LogoBudget from "./logobudget.tsx";
import LogoBranche from "./logobranche.tsx";
import LogoContact from "./logocontact.tsx";
import LogoLast from "./logo_last.tsx";
import LogoWebsiteLast from "./logo_website_last.tsx";

type Service = "start" | "logo" | "logo_last" | "website" | "website_last" | "logo_website" | "logo_website_last";

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
    const [logoOptions, setLogoOptions] = useState("");
    const [logoStepIndex, setLogoStepIndex] = useState(0);
    const [logoStyle, setLogoStyle] = useState<string[]>([]);
    const [logoBudget, setLogoBudget] = useState("");
    const [logoBranche, setLogoBranche] = useState("");
    const [logoBrancheDesc, setLogoBrancheDesc] = useState("");
    const [logoWebsiteStepIndex, setLogoWebsiteStepIndex] = useState(0);

    async function sendWebsiteRequest() {

        const response = await fetch("http://localhost/formular_2/send-website-mail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
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

    async function sendLogoRequest() {
        const response = await fetch("http://localhost/formular_2/send-logo-mail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                logoBranche,
                email,
                phone,
                logoBrancheDesc,
                logoOptions,
                logoStyle: logoStyle.join(", "),
                logoBudget,
            }),
        });
        return await response.json()
    }

    async function sendLogoWebsiteRequest() {
        const response = await fetch("http://localhost/formular_2/send-logo-website-mail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                logoOptions,
                logoStyle: logoStyle.join(", "),
                logoBudget,
                logoBranche,
                logoBrancheDesc,
                goals: goals.join(", "),
                existingWebsite,
                websitePages: websitePages.join(", "),
                websiteAssets,
                websiteBudget,
                websiteTimeframe,
                name,
                email,
                phone,
            }),
        });
        return await response.json()
    }

    const websiteSteps = [
        {
            component: (
                <WebsiteQuestions
                    goals={goals}
                    setGoals={setGoals}
                />
            ),
            isValid: () => goals.length > 0,
        },
        {
            component: (
                <WebsiteExisting
                    existingWebsite={existingWebsite}
                    setExistingWebsite={setExistingWebsite}
                />
            ),
            isValid: () => existingWebsite.trim() !== "",
        },
        {
            component: (
                <WebsitePages
                    websitePages={websitePages}
                    setWebsitePages={setWebsitePages}
                />
            ),
            isValid: () => websitePages.length > 0,
        },
        {
            component: (
                <WebsiteAssets
                    websiteAssets={websiteAssets}
                    setWebsiteAssets={setWebsiteAssets}
                />
            ),
            isValid: () => websiteAssets.trim() !== "",
        },
        {
            component: (
                <WebsiteBudget
                    websiteBudget={websiteBudget}
                    setWebsiteBudget={setWebsiteBudget}
                />
            ),
            isValid: () => websiteBudget.trim() !== "",
        },
        {
            component: (
                <WebsiteTimeframe
                    websiteTimeframe={websiteTimeframe}
                    setWebsiteTimeframe={setWebsiteTimeframe}
                />
            ),
            isValid: () => websiteTimeframe.trim() !== "",
        },
        {
            component: (
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
            ),
            isValid: () => {
                const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                const phoneIsValid = /^[0-9+\s()/.-]{6,}$/.test(phone);

                if (
                    name.trim() === "" ||
                    company.trim() === "" ||
                    email.trim() === "" ||
                    phone.trim() === ""
                ) {
                    setContactError("Bitte füllen Sie alle Pflichtfelder aus.");
                    return false;
                }

                if (!emailIsValid) {
                    setContactError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
                    return false;
                }

                if (!phoneIsValid) {
                    setContactError("Bitte geben Sie eine gültige Telefonnummer ein.");
                    return false;
                }

                setContactError("");
                return true;
            },
        },
    ];

    const logoSteps = [
        {
            component: (
                <LogoFirst
                    logoOptions={logoOptions}
                    setLogoOptions={setLogoOptions}
                />
            ),
            isValid: () => logoOptions.trim() !== "",
        },
        {
            component: (
                <LogoStyle
                    logoStyle={logoStyle}
                    setLogoStyle={setLogoStyle}
                />
            ),
            isValid: () => logoStyle.length > 0,
        },
        {
            component: (
                <LogoBudget
                    logoBudget={logoBudget}
                    setLogoBudget={setLogoBudget}
                />
            ),
            isValid: () => logoBudget.trim() !== "",
        },
        {
            component: (
                <LogoBranche
                    logoBranche={logoBranche}
                    setLogoBranche={setLogoBranche}
                    logoBrancheDesc={logoBrancheDesc}
                    setLogoBrancheDesc={setLogoBrancheDesc}
                />
            ),
            isValid: () =>
                logoBranche.trim() !== "" &&
                logoBrancheDesc.trim() !== "",
        },
        {
            component: (
                <LogoContact
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    contactError={contactError}
                    setContactError={setContactError}
                />
            ),
            isValid: () => {
                const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                const phoneIsValid = /^[0-9+\s()/.-]{6,}$/.test(phone);

                if (
                    name.trim() === "" ||
                    email.trim() === "" ||
                    phone.trim() === ""
                ) {
                    setContactError("Bitte füllen Sie alle Pflichtfelder aus.");
                    return false;
                }

                if (!emailIsValid) {
                    setContactError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
                    return false;
                }

                if (!phoneIsValid) {
                    setContactError("Bitte geben Sie eine gültige Telefonnummer ein.");
                    return false;
                }

                setContactError("");
                return true;
            },
        },
    ];

    const logoWebsiteSteps = [
        {
            component: (
                <LogoFirst
                    logoOptions={logoOptions}
                    setLogoOptions={setLogoOptions}
                />
            ),
            isValid: () => logoOptions.trim() !== "",
        },
        {
            component: (
                <LogoStyle
                    logoStyle={logoStyle}
                    setLogoStyle={setLogoStyle}
                />
            ),
            isValid: () => logoStyle.length > 0,
        },
        {
            component: (
                <LogoBudget
                    logoBudget={logoBudget}
                    setLogoBudget={setLogoBudget}
                />
            ),
            isValid: () => logoBudget.trim() !== "",
        },
        {
            component: (
                <LogoBranche
                    logoBranche={logoBranche}
                    setLogoBranche={setLogoBranche}
                    logoBrancheDesc={logoBrancheDesc}
                    setLogoBrancheDesc={setLogoBrancheDesc}
                />
            ),
            isValid: () =>
                logoBranche.trim() !== "" &&
                logoBrancheDesc.trim() !== "",
        },
        {
            component: (
                <WebsiteQuestions
                    goals={goals}
                    setGoals={setGoals}
                />
            ),
            isValid: () => goals.length > 0,
        },
        {
            component: (
                <WebsiteExisting
                    existingWebsite={existingWebsite}
                    setExistingWebsite={setExistingWebsite}
                />
            ),
            isValid: () => existingWebsite.trim() !== "",
        },
        {
            component: (
                <WebsitePages
                    websitePages={websitePages}
                    setWebsitePages={setWebsitePages}
                />
            ),
            isValid: () => websitePages.length > 0,
        },
        {
            component: (
                <WebsiteAssets
                    websiteAssets={websiteAssets}
                    setWebsiteAssets={setWebsiteAssets}
                />
            ),
            isValid: () => websiteAssets.trim() !== "",
        },
        {
            component: (
                <WebsiteBudget
                    websiteBudget={websiteBudget}
                    setWebsiteBudget={setWebsiteBudget}
                />
            ),
            isValid: () => websiteBudget.trim() !== "",
        },
        {
            component: (
                <WebsiteTimeframe
                    websiteTimeframe={websiteTimeframe}
                    setWebsiteTimeframe={setWebsiteTimeframe}
                />
            ),
            isValid: () => websiteTimeframe.trim() !== "",
        },
        {
            component: (
                <LogoContact
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    contactError={contactError}
                    setContactError={setContactError}
                />
            ),
            isValid: () => {
                const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                const phoneIsValid = /^[0-9+\s()/.-]{6,}$/.test(phone);

                return (
                    name.trim() !== "" &&
                    emailIsValid &&
                    phoneIsValid
                );
            },
        },
    ];


    switch (service) {
        case "logo": {
            const isFirstStep = logoStepIndex === 0;
            const isLastStep = logoStepIndex === logoSteps.length - 1;
            const currentStep = logoSteps[logoStepIndex];

            return (
                <section className="questionform">
                    <div className="questformcontent">
                        <div className="question">
                            <h1>Logo</h1>
                        </div>

                        {currentStep.component}

                        <ProgressBar
                            currentStep={logoStepIndex}
                            totalSteps={logoSteps.length}
                        />

                        <div className="q_options">
                            <button
                                type="button"
                                className="step_button"
                                onClick={() => {
                                    if (isFirstStep) {
                                        setService("start");
                                    } else {
                                        setLogoStepIndex((prev) => prev - 1);
                                    }
                                }}
                            >
                                <div><h5>Zurück</h5></div>
                            </button>

                            <button
                                className="step_button"
                                type="button"
                                onClick={() => {
                                    if (!currentStep.isValid()) {
                                        return;
                                    }

                                    if (isLastStep) {
                                        setService("logo_last");
                                    } else {
                                        setLogoStepIndex((prev) => prev + 1);
                                    }
                                }}
                            >
                                <h5>{isLastStep ? "Anfrage vorbereiten" : "Weiter"}</h5>
                            </button>
                        </div>
                    </div>
                </section>
            );
        }

        case "logo_last": {
            return (
                <>
                    <section className="questionform">
                        <div className="questformcontent">
                            <LogoLast
                                logoOptions={logoOptions}
                                logoStyle={logoStyle}
                                logoBudget={logoBudget}
                                logoBranche={logoBranche}
                                logoBrancheDesc={logoBrancheDesc}
                                name={name}
                                email={email}
                                phone={phone}
                            />
                            <div className="progressbar_outer">
                                <ProgressBar
                                    currentStep={logoStepIndex}
                                    totalSteps={logoSteps.length}
                                />
                            </div>
                            <div className="q_options">
                                {submitError && <p className="contact_error">{submitError}</p>}
                                <button
                                    type="button"
                                    className="step_button"
                                    onClick={() => setService("logo")}
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

                                            const result = await sendLogoRequest();

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
                                                setLogoStepIndex(0);

                                                setName("");
                                                setEmail("");
                                                setPhone("");
                                                setLogoBranche("");
                                                setLogoBrancheDesc("");
                                                setLogoOptions("");
                                                setLogoStyle([]);
                                                setLogoBudget("");
                                                setContactError("");
                                            } else {
                                                setSubmitError(result.message || "Die Anfrage konnte nicht gesendet werden.");
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
                </>
            );
        }

        case "website": {
            const isFirstStep = websiteStepIndex === 0;
            const isLastStep = websiteStepIndex === websiteSteps.length - 1;
            const currentStep = websiteSteps[websiteStepIndex];

            return (
                <section className="questionform">
                    <div className="questformcontent">
                        <div className="question">
                            <h1>Webseite</h1>
                        </div>

                        {currentStep.component}

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
                                    if (!currentStep.isValid()) {
                                        return;
                                    }

                                    if (isLastStep) {
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

        case "website_last": {
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
                                            setSubmitError(result.message || "Die Anfrage konnte nicht gesendet werden.");
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

        case "logo_website": {
            const isFirstStep = logoWebsiteStepIndex === 0;
            const isLastStep = logoWebsiteStepIndex === logoWebsiteSteps.length - 1;
            const currentStep = logoWebsiteSteps[logoWebsiteStepIndex];

            return (
                <section className="questionform">
                    <div className="questformcontent">
                        <div className="question">
                            <h1>Logo & Webseite</h1>
                        </div>

                        {currentStep.component}

                        <ProgressBar
                            currentStep={logoWebsiteStepIndex}
                            totalSteps={logoWebsiteSteps.length}
                        />

                        <div className="q_options">
                            <button
                                type="button"
                                className="step_button"
                                onClick={() => {
                                    if (isFirstStep) {
                                        setService("start");
                                    } else {
                                        setLogoWebsiteStepIndex((prev) => prev - 1);
                                    }
                                }}
                            >
                                <div><h5>Zurück</h5></div>
                            </button>

                            <button
                                type="button"
                                className="step_button"
                                onClick={() => {
                                    if (!currentStep.isValid()) {
                                        return;
                                    }

                                    if (isLastStep) {
                                        setService("logo_website_last");
                                    } else {
                                        setLogoWebsiteStepIndex((prev) => prev + 1);
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

        case "logo_website_last": {
            return (
                <>
                    <section className="questionform">
                        <div className="questformcontent">
                            <LogoWebsiteLast
                                logoOptions={logoOptions}
                                logoStyle={logoStyle}
                                logoBudget={logoBudget}
                                logoBranche={logoBranche}
                                logoBrancheDesc={logoBrancheDesc}
                                goals={goals}
                                existingWebsite={existingWebsite}
                                websitePages={websitePages}
                                websiteAssets={websiteAssets}
                                websiteBudget={websiteBudget}
                                websiteTimeframe={websiteTimeframe}
                                name={name}
                                email={email}
                                phone={phone}
                            />
                            <div className="progressbar_outer">
                                <ProgressBar
                                    currentStep={logoWebsiteStepIndex}
                                    totalSteps={logoWebsiteSteps.length}
                                />
                            </div>
                            <div className="q_options">
                                {submitError && <p className="contact_error">{submitError}</p>}
                                <button
                                    type="button"
                                    className="step_button"
                                    onClick={() => setService("logo_website")}
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

                                            const result = await sendLogoWebsiteRequest();

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
                                                setLogoWebsiteStepIndex(0);

                                                setGoals([]);
                                                setExistingWebsite("");
                                                setWebsitePages([]);
                                                setWebsiteAssets("");
                                                setWebsiteBudget("");
                                                setWebsiteTimeframe("");
                                                setName("");
                                                setLogoBranche("");
                                                setLogoBrancheDesc("");
                                                setLogoOptions("");
                                                setLogoStyle([]);
                                                setLogoBudget("");
                                                setEmail("");
                                                setPhone("");
                                                setContactError("");
                                            } else {
                                                setSubmitError(result.message || "Die Anfrage konnte nicht gesendet werden.");
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
                </>
            );
        }
        case "start":
        default: {
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
    }
}

export default Steps;