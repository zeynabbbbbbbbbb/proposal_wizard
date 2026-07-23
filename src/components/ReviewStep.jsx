export default function ReviewStep({ data, generated, onGenerate }) {
  const { client, scope, timeline, requirements } = data;

  return (
    <div>
      <div className="step-eyebrow">Step 05</div>
      <h2 className="step-title">Review & generate</h2>
      <p className="step-subtitle">Confirm everything below, then generate the proposal.</p>

      <div className="review-block">
        <h4>Client</h4>
        <div className="review-row"><span>Contact</span><span>{client.name || '—'}</span></div>
        <div className="review-row"><span>Company</span><span>{client.company || '—'}</span></div>
        <div className="review-row"><span>Email</span><span>{client.email || '—'}</span></div>
        <div className="review-row"><span>Industry</span><span>{client.industry || '—'}</span></div>
      </div>

      <div className="review-block">
        <h4>Scope</h4>
        {scope.summary ? (
          <>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 10 }}>{scope.summary}</p>
            {scope.deliverables?.filter((d) => d.included && d.text.trim()).length > 0 && (
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.8, color: 'var(--text-dim)' }}>
                {scope.deliverables
                  .filter((d) => d.included && d.text.trim())
                  .map((d) => (
                    <li key={d.id}>{d.text}</li>
                  ))}
              </ul>
            )}
          </>
        ) : (
          <p className="review-empty">No scope selected yet.</p>
        )}
      </div>

      <div className="review-block">
        <h4>Timeline</h4>
        <div className="review-row"><span>Start</span><span>{timeline.startDate || '—'}</span></div>
        <div className="review-row"><span>Duration</span><span>{timeline.duration || '—'}</span></div>
      </div>

      <div className="review-block">
        <h4>Requirements</h4>
        {requirements.notes ? <p style={{ fontSize: 14, lineHeight: 1.6 }}>{requirements.notes}</p> : <p className="review-empty">None noted.</p>}
      </div>

      <div className="generate-panel">
        {generated ? (
          <div className="generate-success">
            <span style={{ fontSize: 20 }}>✓</span>
            Proposal generated — PDF export hooks in here later
          </div>
        ) : (
          <button className="pill-btn" onClick={onGenerate}>
            Generate proposal
          </button>
        )}
      </div>
    </div>
  );
}
