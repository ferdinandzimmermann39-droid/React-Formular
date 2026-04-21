type WebsiteQuestionProps = {
    goals: string[];
    setGoals: React.Dispatch<React.SetStateAction<string[]>>;
    antwort: string;
};



function WebsiteQuestion({ goals, setGoals, antwort }: WebsiteQuestionProps) {

    const toggleGoal = (goal: string) => {
        setGoals((prevGoals) =>
            prevGoals.includes(goal)
                ? prevGoals.filter((item) => item !== goal)
                : [...prevGoals, goal]
        );
    };
    //Zeile 9: Erstelle eine Funktion mit dem Parameter "goal" Typ: STRING || das Argument wird übergeben beim Aufruf (togglegoal("Professioneller auftreten"))
    //Zeile 10 In der Funktion toggleGoal führst du die Funktion setGoals aus ||  alles ab dieser Zeile bis Zeile 14 ist das Argument das du setGoals übergibst
    //In diesem Argument wird aber selbst eine Funktion ausgeführt - prevGoals bekommt den aktuellen Wert von goals (Ein Array mit Strings (Das die ausgewählten Ziele speichert)) 
    //Zeile 11: prevGoals.includes(goal) Prüft: Ist das goal (also das Argument das übergeben wird von toggleGoal("blabla")) bereits in prevGoals enthalten? 
    // WENN JA:
    //Zeile 12: prevGoals.filter((item) => item !== goal) wird ausgeführt wenn goal bereits in prevGoals existiert - 
    // und diese Zeile ist dafür da um dieses goal wieder aus dem Array "goals" zu entfernen
    // filter Methode davon erklärt: angewandt auf prevGoals, es geht prevgoals durch mit einer Bedingung:
    //  ( (item) => !== goal ) filter methode erwartet diese schreibweise mit funktion (item) das aktuell geprüfte element -- item !== goal ist die bedindung
    //  dieses goal (was getoggelt wird) - wenn es drin ist im Array (wenn es ausgewählt ist) - mach das array neu - aber OHNE dieses goal das getoggelt wurde
    // ERGEBNIS: getoggeltes Ziel nicht mehr ausgewählt
    // WENN NEIN:
    // Zeile 13: Nimm alle bisherigen Werte aus prevGoals (die ausgewählten) und häng goal hinten dran.
    // ERGEBNIS: getoggeltes Ziel wird ausgewählt
    return (

        <label>
            <input className="choice"
                type="checkbox"
                checked={goals.includes(antwort)}
                onChange={() => toggleGoal(antwort)} />
            {antwort}
        </label>

    );

};

export default WebsiteQuestion