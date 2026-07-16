import './StepRail.css';

export default function StepRail({ steps, currentIndex, onStepClick }) {
  return (
    <nav className="step-rail" aria-label="Proposal steps">
      {steps.map((step, i) => {
        const state = i < currentIndex ? 'done' : i === currentIndex ? 'active' : 'upcoming';
        const isLast = i === steps.length - 1;

        return (
          <div className="rail-item" key={step.id}>
            <div className="rail-node-row">
              <div className="rail-node-col">
                <button
                  className={`rail-node rail-node--${state}`}
                  onClick={() => onStepClick(i)}
                  disabled={state === 'upcoming'}
                  aria-current={state === 'active' ? 'step' : undefined}
                >
                  {state === 'done' ? '✓' : i + 1}
                </button>
                <span className={`rail-label rail-label--${state}`}>{step.label}</span>
              </div>
              {!isLast && <div className={`rail-line rail-line--${state === 'done' ? 'filled' : 'empty'}`} />}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
