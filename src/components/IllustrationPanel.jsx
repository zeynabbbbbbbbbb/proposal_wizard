import { ClientIcon, ScopeIcon, TimelineIcon, RequirementsIcon, ReviewIcon } from './StepIcons';
import './IllustrationPanel.css';

const ICONS = [ClientIcon, ScopeIcon, TimelineIcon, RequirementsIcon, ReviewIcon];

export default function IllustrationPanel({ steps, currentIndex }) {
  const Icon = ICONS[currentIndex];

  return (
    <div className="illustration-panel">
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      <div className="illustration-brand">
        <span className="illustration-brand-mark">W</span>
        <span className="illustration-brand-name">Proposal Builder</span>
      </div>

      <div className="illustration-icon-wrap">
        <Icon className="illustration-icon" />
      </div>

      <h3 className="illustration-step-label">{steps[currentIndex].label}</h3>
      <p className="illustration-step-caption">Step {currentIndex + 1} of {steps.length}</p>

      <div className="illustration-dots">
        {steps.map((step, i) => (
          <span
            key={step.id}
            className={`illustration-dot ${i === currentIndex ? 'illustration-dot--active' : ''} ${i < currentIndex ? 'illustration-dot--done' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
