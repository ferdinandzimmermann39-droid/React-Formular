type LogoBudgetProps = {
    logoBudget: string;
    setLogoBudget: React.Dispatch<React.SetStateAction<string>>;

}

function LogoBudget({
    logoBudget,
    setLogoBudget,
}: LogoBudgetProps) {
    return (
        <div className="questformcontent">
            <div className="question">
                <h2>Was ist ihr Budget fürs Logo?</h2>
            </div>

            <form className="budget_form" action="">
                <select
                    className="budget_select"
                    name="logobudget"
                    id="logobudget"
                    value={logoBudget}
                    onChange={(e) => setLogoBudget(e.target.value)}
                >
                    <option value="">Bitte wählen</option>
                    <option value="100 €">100 €</option>
                    <option value="200 €">200 €</option>
                    <option value="300 €">300 €</option>
                    <option value="300 € +">300 € +</option>
                </select>
            </form>

            <p className="printed_budget_black">Gewähltes Budget: <span className="printed_budget"> {logoBudget} </span></p>

        </div>
    );
}

export default LogoBudget
