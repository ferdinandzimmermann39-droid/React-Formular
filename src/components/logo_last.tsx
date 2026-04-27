type LogoLastProps = {
    logoOptions: string;
    logoStyle: string[]
    logoBudget: string;
    logoBranche: string;
    logoBrancheDesc: string;
    name: string;
    email: string;
    phone: string;
}


function LogoLast({
    logoOptions,
    logoStyle,
    logoBudget,
    logoBranche,
    logoBrancheDesc,
    name,
    email,
    phone
}: LogoLastProps) {
    return (
        <>
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
                        <h2>Ihre Kontaktdaten</h2>
                        <div className="website_last_item">
                            <span className="website_last_label">Name</span>
                            <p>{name}</p>
                        </div>
                        <div className="website_last_item">
                            <span className="website_last_label">E-Mail</span>
                            <p>{email}</p>
                        </div>
                        <div className="website_last_item">
                            <span className="website_last_label">Telefon</span>
                            <p>{phone}</p>
                        </div>
                        <div className="website_last_item">
                            <span className="website_last_label">Unternehmen</span>
                            <p>{logoBranche}</p>
                        </div>
                        <div className="website_last_item">
                            <span className="website_last_label">Beschreibung</span>
                            <p>{logoBrancheDesc}</p>
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
                </div>

            </section >
        </>
    );
}


export default LogoLast