type logoOptionsProps = {
    logoOptions: string;
    setLogoOptions: React.Dispatch<React.SetStateAction<string>>;
}


const options = [
    "Neues Logo",
    "Logo überarbeiten",
]

function LogoFirst({ logoOptions, setLogoOptions }: logoOptionsProps) {
    return (
        <>
            <div className="question">
                <h2>Was benötigen Sie?</h2>
            </div>
            <div className="single_choice_list">
                {options.map((option) => (
                    <label key={option} className="single_choice_item">
                        <input
                            type="radio"
                            name="logoFirst"
                            value={option}
                            checked={logoOptions === option}
                            onChange={(e) => setLogoOptions(e.target.value)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </>

    )
}

export default LogoFirst