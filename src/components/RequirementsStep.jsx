export default function RequirementsStep({ data, onChange }) {
  const set = (field) => (e) => onChange({ [field]: e.target.value });

  return (
    <div>
      <div className="step-eyebrow">Step 04</div>
      <h2 className="step-title">Requirements</h2>
      <p className="step-subtitle">
        Note any special requirements, compliance needs, or constraints. A checker will flag missing items automatically in a later build.
      </p>

      <div className="field-group">
        <div className="field">
          <label htmlFor="notes">Requirements & notes</label>
          <textarea
            id="notes"
            value={data.notes}
            onChange={set('notes')}
            placeholder="e.g. Must comply with State Bank of Pakistan data residency rules"
            style={{ minHeight: 160 }}
          />
        </div>
      </div>
    </div>
  );
}
