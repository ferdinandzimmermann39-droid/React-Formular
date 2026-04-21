type WebsiteTimeframeProps = {
    websiteTimeframe: string;
    setWebsiteTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

function WebsiteTimeframe({
    websiteTimeframe,
    setWebsiteTimeframe,
}: WebsiteTimeframeProps) {
    return (
        <>
            <div className="question">
                <h2>Wann soll Ihre Website idealerweise online gehen?</h2>
            </div>

            <form className="budget_form">
                <select
                    className="budget_select"
                    value={websiteTimeframe}
                    onChange={(e) => setWebsiteTimeframe(e.target.value)}
                >
                    <option value="">Bitte wählen</option>
                    <option value="So schnell wie möglich">So schnell wie möglich</option>
                    <option value="In den nächsten 2–4 Wochen">In den nächsten 2–4 Wochen</option>
                    <option value="In den nächsten 1–3 Monaten">In den nächsten 1–3 Monaten</option>
                    <option value="Ohne festen Termin">Ohne festen Termin</option>
                </select>
            </form>

            <p className="printed_budget_black">
                Gewählter Zeitraum:
                <span className="printed_budget"> {websiteTimeframe} </span>
            </p>
        </>
    );
}

export default WebsiteTimeframe;