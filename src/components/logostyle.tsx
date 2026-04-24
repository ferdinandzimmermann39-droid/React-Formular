type LogoStyleProps = {
    logoStyle: string[];
    setLogoStyle: React.Dispatch<React.SetStateAction<string[]>>;
};

function LogoStyle({
    logoStyle,
    setLogoStyle,
}: LogoStyleProps) {
    const options = [
        "Modern",
        "Schlicht",
        "Hochwertig",
        "Auffällig",
        "Seriös"
    ];

    const togglePage = (page: string) => {
        setLogoStyle((prev) =>
            prev.includes(page)
                ? prev.filter((item) => item !== page)
                : [...prev, page]
        );
    };

    return (
        <>
            <div className="question">
                <h2>Welche Eigenschaften soll ihr Logo aufweisen?</h2>
            </div>
            <form className="choice_form">
                {options.map((option) => (
                    <label key={option}>
                        <input
                            className="choice"
                            type="checkbox"
                            checked={logoStyle.includes(option)}
                            onChange={() => togglePage(option)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </form>
        </>
    );
}

export default LogoStyle;