import { useState } from 'react';
import StepRail from './components/StepRail';
import IllustrationPanel from './components/IllustrationPanel';
import ClientInfoStep from './components/ClientInfoStep';
import ScopeStep from './components/ScopeStep';
import TimelineStep from './components/TimelineStep';
import RequirementsStep from './components/RequirementsStep';
import ReviewStep from './components/ReviewStep';
import './App.css';

const STEPS = [
  { id: 'client', label: 'Client info' },
  { id: 'scope', label: 'Scope' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'review', label: 'Review & generate' },
];

const EMPTY_DATA = {
  client: { name: '', company: '', email: '', phone: '', industry: '' },
  scope: { serviceId: '', summary: '', deliverables: [] },
  timeline: { startDate: '', duration: '', milestoneNote: '' },
  requirements: { notes: '' },
};

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState(EMPTY_DATA);
  const [generated, setGenerated] = useState(false);

  const updateSection = (section, patch) => {
    setData((prev) => ({ ...prev, [section]: { ...prev[section], ...patch } }));
  };

  const goNext = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));
  const goToStep = (i) => {
    if (i <= stepIndex) setStepIndex(i);
  };

  const isClientValid = data.client.name.trim() && data.client.company.trim();
  const isScopeValid = data.scope.serviceId && data.scope.summary.trim().length > 0;

  const canAdvance = () => {
    if (stepIndex === 0) return isClientValid;
    if (stepIndex === 1) return isScopeValid;
    return true;
  };

  const handleGenerate = () => setGenerated(true);

  const renderStep = () => {
    switch (STEPS[stepIndex].id) {
      case 'client':
        return <ClientInfoStep data={data.client} onChange={(p) => updateSection('client', p)} />;
      case 'scope':
        return <ScopeStep data={data.scope} onChange={(p) => updateSection('scope', p)} />;
      case 'timeline':
        return <TimelineStep data={data.timeline} onChange={(p) => updateSection('timeline', p)} />;
      case 'requirements':
        return <RequirementsStep data={data.requirements} onChange={(p) => updateSection('requirements', p)} />;
      case 'review':
        return <ReviewStep data={data} generated={generated} onGenerate={handleGenerate} />;
      default:
        return null;
    }
  };

  return (
    <div className="wizard-shell">
      <div className="wizard-card">
        <IllustrationPanel steps={STEPS} currentIndex={stepIndex} />

        <div className="wizard-form-panel">
          <StepRail steps={STEPS} currentIndex={stepIndex} onStepClick={goToStep} />

          <div className="wizard-mobile-label">{STEPS[stepIndex].label}</div>

          <div className="wizard-body" key={stepIndex}>
            {renderStep()}
          </div>

          <div className="wizard-nav">
            <button
              className="link-btn"
              onClick={goBack}
              disabled={stepIndex === 0}
            >
              ← Previous
            </button>

            {stepIndex < STEPS.length - 1 ? (
              <button className="circle-btn" onClick={goNext} disabled={!canAdvance()} aria-label="Next step">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <span className="wizard-nav-end-hint">
                {generated ? 'Proposal generated' : 'Generate below when ready'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
