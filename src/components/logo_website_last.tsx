type LogoWebsiteLastProps = {
    logoOptions: string;
    logoStyle: string[];
    logoBudget: string;
    logoBranche: string;
    logoBrancheDesc: string;
    goals: string[];
    existingWebsite: string;
    websitePages: string[];
    websiteAssets: string;
    websiteBudget: string;
    websiteTimeframe: string;
    name: string;
    email: string;
    phone: string;
};

function LogoWebsiteLast({
    logoOptions,
    logoStyle,
    logoBudget,
    logoBranche,
    logoBrancheDesc,
    goals,
    existingWebsite,
    websitePages,
    websiteAssets,
    websiteBudget,
    websiteTimeframe,
    name,
    email,
    phone,
}: LogoWebsiteLastProps) {
    return (
        <section className="website_last_wrap">
            <div className="website_last_top">
                <p className="website_last_overline">Ihre Anfrage</p>
                <h1 className="website_last_title">Zusammenfassung</h1>
                <p className="website_last_subtitle">
                    Prüfen Sie Ihre Angaben, bevor Sie ihre unverbindliche Anfrage absenden.
                </p>
            </div>

            <div className="website_last_grid">
                <div className="website_last_box">
                    <h2>Ihre Informationen</h2>
                    <div className="website_last_item">
                        <span className="website_last_label">Name</span>
                        <p>{name}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Unternehmen</span>
                        <p>{logoBranche}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Beschreibung</span>
                        <p>{logoBrancheDesc}</p>
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
                    <h2>Informationen fürs Logo</h2>

                    <div className="website_last_item">
                        <span className="website_last_label">Neu / Überarbeiten</span>
                        <p>{logoOptions}</p>
                    </div>

                    <div className="website_last_item">
                        <span className="website_last_label">Unternehmen</span>
                        <p>{logoBranche}</p>
                    </div>

                    <div className="website_last_item">
                        <span className="website_last_label">Beschreibung</span>
                        <p>{logoBrancheDesc}</p>
                    </div>

                    <div className="website_last_item">
                        <span className="website_last_label">Budget</span>
                        <p>{logoBudget}</p>
                    </div>
                    <h4 className="website_last_label">Gewünschter Style</h4>
                    <div className="website_last_tags">
                        {logoStyle.map((style) => (
                            <div key={style} className="website_last_tag">
                                {style}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="website_last_box website_last_box_full">
                    <h2>Informationen für die Website</h2>
                    <div className="website_last_item">
                        <span className="website_last_label">Gibt es bereits eine Website?</span>
                        <p>{existingWebsite}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Sind bereits Inhalte vorhanden?</span>
                        <p>{websiteAssets}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Gewünschte Seiten</span>
                    </div>
                    <div className="website_last_tags">
                        {websitePages.map((page) => (
                            <div key={page} className="website_last_tag">
                                {page}
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="website_last_item">
                        <span className="website_last_label">Ziele</span>
                    </div>
                    <div className="website_last_tags">
                        {goals.map((goal) => (
                            <div key={goal} className="website_last_tag">
                                {goal}
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="website_last_item">
                        <span className="website_last_label">Gewähltes Budget</span>
                        <p>{websiteBudget}</p>
                    </div>
                    <div className="website_last_item">
                        <span className="website_last_label">Gewünschter Zeitrahmen</span>
                        <p>{websiteTimeframe}</p>
                    </div>

                </div>


            </div>
        </section>
    );
}

export default LogoWebsiteLast;