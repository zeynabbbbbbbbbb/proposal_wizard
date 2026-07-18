import './StepRail.css';

export default function StepRail({ steps, currentIndex, onStepClick }) {
  return (
    <nav className="step-rail" aria-label="Proposal steps">
      {steps.map((step, i) => {
        const state = i < currentIndex ? 'done' : i === currentIndex ? 'active' : 'upcoming';
        const isLast = i === steps.length - 1;

        return (
          <div key={step.id} style={{ display: 'flex', alignItems: 'center', flex: isLast ? '0 0 auto' : 1 }}>
            <button
              className={`rail-node rail-node--${state}`}
              onClick={() => onStepClick(i)}
              disabled={state === 'upcoming'}
              aria-current={state === 'active' ? 'step' : undefined}
              title={step.label}
            >
              {state === 'done' ? '✓' : i + 1}
            </button>
            {!isLast && <div className={`rail-line rail-line--${state === 'done' ? 'filled' : 'empty'}`} />}
          </div>
        );
      })}
    </nav>
  );
}
