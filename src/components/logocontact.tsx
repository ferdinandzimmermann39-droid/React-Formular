type LogoContactProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    contactError: string;
    setContactError: React.Dispatch<React.SetStateAction<string>>;
};

function LogoContact({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    contactError,
    setContactError,
}: LogoContactProps) {
    return (
        <>
            <div className="question">
                <h2>Fast geschafft – wie dürfen wir Sie erreichen?</h2>
            </div>

            <form className="website_ct_form">
                <div className="contact_fields">
                    <div className="contact_field">
                        <label className="contact_label">Name *</label>
                        <input
                            className="contact_input"
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                                setContactError("");
                            }}
                            placeholder="Ihr Name"
                        />
                    </div>

                    <div className="contact_field">
                        <label className="contact_label">E-Mail *</label>
                        <input
                            className="contact_input"
                            type="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                                setContactError("");
                            }}
                            placeholder="ihre@email.de"
                        />
                    </div>

                    <div className="contact_field">
                        <label className="contact_label">Telefon *</label>
                        <input
                            className="contact_input"
                            type="tel"
                            value={phone}
                            onChange={(event) => {
                                setPhone(event.target.value);
                                setContactError("");
                            }}
                            placeholder="Ihre Telefonnummer"
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

export default LogoContact;