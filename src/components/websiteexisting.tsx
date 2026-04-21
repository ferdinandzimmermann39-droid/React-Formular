type WebsiteExistingProps = {
    existingWebsite: string;
    setExistingWebsite: React.Dispatch<React.SetStateAction<string>>;
};

function WebsiteExisting({
    existingWebsite,
    setExistingWebsite,
}: WebsiteExistingProps) {
    const options = [
        "Nein, ich brauche eine neue Website",
        "Ja, aber sie ist veraltet",
        "Ja, ich möchte sie verbessern lassen"
    ];

    return (
        <>
            <div className="question">
                <h2>Gibt es bereits eine Website?</h2>
            </div>

            <div className="single_choice_list">
                {options.map((option) => (
                    <label key={option} className="single_choice_item">
                        <input
                            type="radio"
                            name="existingWebsite"
                            value={option}
                            checked={existingWebsite === option}
                            onChange={(e) => setExistingWebsite(e.target.value)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </>
    );
}

export default WebsiteExisting;