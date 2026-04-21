type WebsitePagesProps = {
    websitePages: string[];
    setWebsitePages: React.Dispatch<React.SetStateAction<string[]>>;
};

function WebsitePages({
    websitePages,
    setWebsitePages,
}: WebsitePagesProps) {
    const options = [
        "Startseite",
        "Über uns",
        "Leistungen",
        "Kontaktformular",
        "Galerie / Referenzen",
        "Blog / News",
        "Terminbuchung",
        "Online-Shop",
        "Ich bin mir noch unsicher",
    ];

    const togglePage = (page: string) => {
        setWebsitePages((prev) =>
            prev.includes(page)
                ? prev.filter((item) => item !== page)
                : [...prev, page]
        );
    };

    return (
        <>
            <div className="question">
                <h2>Welche Bereiche soll Ihre Website enthalten?</h2>
            </div>
            <form className="choice_form">


                {options.map((option) => (
                    <label key={option}>
                        <input
                            className="choice"
                            type="checkbox"
                            checked={websitePages.includes(option)}
                            onChange={() => togglePage(option)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </form>
        </>
    );
}

export default WebsitePages;