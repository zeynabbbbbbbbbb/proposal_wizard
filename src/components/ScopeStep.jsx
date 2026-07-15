export default function ScopeStep({ data, onChange }) {
  const set = (field) => (e) => onChange({ [field]: e.target.value });

  return (
    <div>
      <div className="step-eyebrow">Step 02</div>
      <h2 className="step-title">Scope</h2>
      <p className="step-subtitle">
        Describe the service being proposed. A dedicated scope generator will refine this automatically in a later build.
      </p>

      <div className="field-group">
        <div className="field">
          <label htmlFor="summary">Scope summary</label>
          <textarea
            id="summary"
            value={data.summary}
            onChange={set('summary')}
            placeholder="e.g. Voice biometric authentication integration for the call center IVR system..."
          />
        </div>

        <div className="field">
          <label htmlFor="deliverables">Key deliverables</label>
          <textarea
            id="deliverables"
            value={data.deliverables}
            onChange={set('deliverables')}
            placeholder="e.g. Enrollment flow, verification API, admin dashboard"
          />
        </div>
      </div>
    </div>
  );
}
