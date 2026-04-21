type WebsiteLastProps = {
    goals: string[];
    existingWebsite: string;
    websitePages: string[];
    websiteAssets: string;
    websiteBudget: string;
    websiteTimeframe: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
};

function WebsiteLast({
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
}: WebsiteLastProps) {
    return (
        <section className="website_last_wrap">
            <div className="website_last_top">
                <p className="website_last_overline">Ihre Anfrage</p>
                <h1 className="website_last_title">Zusammenfassung</h1>
                <p className="website_last_subtitle">
                    Prüfen Sie Ihre Angaben, bevor die Anfrage vorbereitet wird.
                </p>
            </div>

            <div className="website_last_grid">
                <div className="website_last_box">
                    <h2>Kontakt</h2>
                    <div className="website_last_item">
                        <span className="website_last_label">Name</span>
                        <p>{name}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Unternehmen</span>
                        <p>{company}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">E-Mail</span>
                        <p>{email}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Telefon</span>
                        <p>{phone}</p>
                    </div>
                </div>

                <div className="website_last_box">
                    <h2>Projekt</h2>
                    <div className="website_last_item">
                        <span className="website_last_label">Bestehende Website</span>
                        <p>{existingWebsite}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Inhalte vorhanden</span>
                        <p>{websiteAssets}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Budget</span>
                        <p>{websiteBudget}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Zeitrahmen</span>
                        <p>{websiteTimeframe}</p>
                    </div>
                </div>

                <div className="website_last_box">
                    <h2>Ziele</h2>
                    <div className="website_last_tags">
                        {goals.map((goal) => (
                            <div key={goal} className="website_last_tag">
                                {goal}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="website_last_box">
                    <h2>Gewünschte Seiten</h2>
                    <div className="website_last_tags">
                        {websitePages.map((page) => (
                            <div key={page} className="website_last_tag">
                                {page}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="website_last_box website_last_box_full">
                    <h2>Zusätzliche Nachricht</h2>
                    <p className="website_last_message">
                        {message.trim() !== ""
                            ? message
                            : "Keine zusätzliche Nachricht angegeben."}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WebsiteLast;