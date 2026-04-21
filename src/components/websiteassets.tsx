type WebsiteAssetsProps = {
    websiteAssets: string;
    setWebsiteAssets: React.Dispatch<React.SetStateAction<string>>;
};

function WebsiteAssets({
    websiteAssets,
    setWebsiteAssets,
}: WebsiteAssetsProps) {
    const options = [
        "Ja, Texte, Bilder und Logo sind vorhanden",
        "Teilweise vorhanden",
        "Nein, ich brauche Unterstützung dabei",
    ];

    return (
        <>
            <div className="question">
                <h2>Gibt es bereits Inhalte für die Website?</h2>
            </div>

            <div className="single_choice_list">
                {options.map((option) => (
                    <label key={option} className="single_choice_item">
                        <input
                            type="radio"
                            name="websiteAssets"
                            value={option}
                            checked={websiteAssets === option}
                            onChange={(e) => setWebsiteAssets(e.target.value)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </>
    );
}

export default WebsiteAssets;