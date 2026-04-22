type WebsiteContactProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    company: string;
    setCompany: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    contactError: string;
    setContactError: React.Dispatch<React.SetStateAction<string>>;
};

function WebsiteContact({
    name,
    setName,
    company,
    setCompany,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    contactError,
    setContactError,
}: WebsiteContactProps) {
    return (
        <>
            <div className="question">
                <h2>Fast geschafft – wie dürfen wir Sie erreichen?</h2>
            </div>

            <form className="website_ct_form">
                <div className="contact_fields">
                    <div className="contact_field">
                        <label className="contact_label">Name</label>
                        <input
                            className="contact_input"
                            type="text"
                            placeholder="Ihr Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setContactError("");
                            }}
                        />
                    </div>

                    <div className="contact_field">
                        <label className="contact_label">Unternehmen oder Projektname</label>
                        <input
                            className="contact_input"
                            type="text"
                            placeholder="Unternehmen oder Projektname"
                            value={company}
                            onChange={(e) => {
                                setCompany(e.target.value);
                                setContactError("");
                            }}
                        />
                    </div>

                    <div className="contact_field">
                        <label className="contact_label">E-Mail-Adresse</label>
                        <input
                            className="contact_input"
                            type="email"
                            placeholder="ihre@email.de"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setContactError("");
                            }}
                        />
                    </div>

                    <div className="contact_field">
                        <label className="contact_label">Telefonnummer</label>
                        <input
                            className="contact_input"
                            type="tel"
                            placeholder="Ihre Telefonnummer"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setContactError("");
                            }}
                        />
                    </div>

                    <div className="contact_field">
                        <label className="contact_label">Zusatzwünsche oder kurze Beschreibung</label>
                        <textarea
                            className="contact_textarea"
                            placeholder="Geben Sie hier weitere Informationen an"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setContactError("");
                            }}
                        />
                    </div>

                    {contactError && (
                        <p className="contact_error">{contactError}</p>
                    )}
                </div>
            </form>
        </>
    );
}


export default WebsiteContact;