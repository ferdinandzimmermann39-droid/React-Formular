type WebsiteBudgetProps = {
    websiteBudget: string;
    setWebsiteBudget: React.Dispatch<React.SetStateAction<string>>;

}

function WebsiteBudget({
    websiteBudget,
    setWebsiteBudget,
}: WebsiteBudgetProps) {
    return (
        <div className="questformcontent">
            <div className="question">
                <h2>Was ist ihr Budget für die Website?</h2>
            </div>

            <form className="budget_form" action="">
                <select
                    className="budget_select"
                    name="websitebudget"
                    id="websitebudget"
                    value={websiteBudget}
                    onChange={(e) => setWebsiteBudget(e.target.value)}
                >
                    <option value="">Bitte wählen</option>
                    <option value="Unter 500 €">Unter 500 €</option>
                    <option value="500 € – 1.000 €">500 € – 1.000 €</option>
                    <option value="1.000 € – 1.500 €">1.000 € – 1.500 €</option>
                    <option value="1.500 € – 2.000 €">1.500 € – 2000 €</option>
                    <option value="2.000 € +">2.000 € +</option>
                </select>
            </form>

            <p className="printed_budget_black">Gewähltes Budget: <span className="printed_budget"> {websiteBudget} </span></p>

        </div>
    );
}

export default WebsiteBudget
