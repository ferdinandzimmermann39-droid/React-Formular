type ProgressBarProps = {
    currentStep: number;
    totalSteps: number;
};

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    const currentStepNumber = currentStep + 1;
    const progressPercent = (currentStepNumber / totalSteps) * 100;

    return (
        <div className="progressbar_wrapper">
            <div className="progressbar_info">
            </div>

            <div
                className="progressbar_track"
                role="progressbar"
                aria-valuenow={currentStepNumber}
                aria-valuemin={1}
                aria-valuemax={totalSteps}
                aria-label="Fortschritt des Formulars"
            >
                <div
                    className="progressbar_fill"
                    style={{ width: `${progressPercent}%` }}
                />

                <span className="progressbar_center_text">
                    {Math.round(progressPercent)}%
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;