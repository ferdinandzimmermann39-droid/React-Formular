import WebsiteQuestion from "./websitequestion";

type WebsiteQuestionProps = {
    goals: string[];
    setGoals: React.Dispatch<React.SetStateAction<string[]>>;
};



function WebsiteQuestions({ goals, setGoals }: WebsiteQuestionProps) {


    return (
        <>
            <div className="question">
                <h2>Was soll Ihre Website für Sie leisten?</h2>
            </div>
            <form className="choice_form">


                <WebsiteQuestion
                    goals={goals}
                    setGoals={setGoals}
                    antwort="Professioneller und vertrauenswürdiger auftreten"
                />
                <WebsiteQuestion
                    goals={goals}
                    setGoals={setGoals}
                    antwort="Mehr Anfragen über meine Website gewinnen"
                />
                <WebsiteQuestion
                    goals={goals}
                    setGoals={setGoals}
                    antwort="Online besser gefunden werden"
                />
                <WebsiteQuestion
                    goals={goals}
                    setGoals={setGoals}
                    antwort="Vertrauen bei neuen Kunden aufbauen"
                />
                <WebsiteQuestion
                    goals={goals}
                    setGoals={setGoals}
                    antwort="Meine Leistungen klar präsentieren"
                />
                <WebsiteQuestion
                    goals={goals}
                    setGoals={setGoals}
                    antwort="Produkte oder Dienstleistungen online verkaufen"
                />
            </form>
        </>
    );

};

export default WebsiteQuestions