import { useState } from 'react';
import StepRail from './components/StepRail';
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
  scope: { summary: '', deliverables: '' },
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
  const isScopeValid = data.scope.summary.trim().length > 0;

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
      <aside className="wizard-rail-panel">
        <div className="brand">
          <span className="brand-mark">WSP</span>
          <span className="brand-name">Proposal Builder</span>
        </div>
        <StepRail steps={STEPS} currentIndex={stepIndex} onStepClick={goToStep} />
      </aside>

      <main className="wizard-main">
        <div className="wizard-card">
          {renderStep()}

          <div className="wizard-nav">
            <button
              className="btn btn-ghost"
              onClick={goBack}
              disabled={stepIndex === 0}
            >
              Back
            </button>

            {stepIndex < STEPS.length - 1 ? (
              <button className="btn btn-primary" onClick={goNext} disabled={!canAdvance()}>
                Next
              </button>
            ) : (
              <span className="wizard-nav-end-hint">
                {generated ? 'Proposal generated' : 'Generate below when ready'}
              </span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
