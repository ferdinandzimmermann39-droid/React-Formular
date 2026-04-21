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
}: WebsiteContactProps) {
    return (
        <>
            <div className="question">
                <h2>Fast geschafft – wie dürfen wir Sie erreichen?</h2>
            </div>

            <div className="contact_fields">
                <input
                    className="contact_input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="contact_input"
                    type="text"
                    placeholder="Unternehmen oder Projektname"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <input
                    className="contact_input"
                    type="email"
                    placeholder="E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="contact_input"
                    type="tel"
                    placeholder="Telefonnummer"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <textarea
                    className="contact_textarea"
                    placeholder="Zusatzwünsche oder kurze Beschreibung"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
        </>
    );
}

export default WebsiteContact;