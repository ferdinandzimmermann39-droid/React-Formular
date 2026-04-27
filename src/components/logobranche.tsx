type LogoBrancheProps = {
    logoBranche: string;
    setLogoBranche: React.Dispatch<React.SetStateAction<string>>;
    logoBrancheDesc: string;
    setLogoBrancheDesc: React.Dispatch<React.SetStateAction<string>>;
}


function LogoBranche({ logoBranche, setLogoBranche, logoBrancheDesc, setLogoBrancheDesc }: LogoBrancheProps) {
    return (
        <div className="question">
            <h2>Was macht ihr Unternehmen / Projekt ?</h2>
            <form className="website_ct_form">
                <div className="contact_fields">
                    <div className="contact_field">
                        <label className="contact_label">Name des Unternehmen</label>
                        <input
                            className="contact_input"
                            type="text"
                            placeholder="Name vom Unternehmen / Projekt"
                            value={logoBranche}
                            onChange={(e) => {
                                setLogoBranche(e.target.value);
                            }}
                        />
                    </div>
                    <div className="contact_field">
                        <label className="contact_label">Kurze Beschreibung der Tätigkeit</label>
                        <textarea
                            className="contact_textarea"
                            placeholder="Beschreiben sie kurz was ihr Unternehmen / Projekt macht"
                            value={logoBrancheDesc}
                            onChange={(e) => {
                                setLogoBrancheDesc(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LogoBranche