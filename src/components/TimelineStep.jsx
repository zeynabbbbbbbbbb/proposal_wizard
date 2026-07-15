export default function TimelineStep({ data, onChange }) {
  const set = (field) => (e) => onChange({ [field]: e.target.value });

  return (
    <div>
      <div className="step-eyebrow">Step 03</div>
      <h2 className="step-title">Timeline</h2>
      <p className="step-subtitle">
        Set a rough start date and duration. Detailed milestones will be generated automatically in a later build.
      </p>

      <div className="field-group">
        <div className="field-row">
          <div className="field">
            <label htmlFor="startDate">Proposed start date</label>
            <input id="startDate" type="date" value={data.startDate} onChange={set('startDate')} />
          </div>
          <div className="field">
            <label htmlFor="duration">Estimated duration</label>
            <input id="duration" value={data.duration} onChange={set('duration')} placeholder="e.g. 6 weeks" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="milestoneNote">Milestone notes (optional)</label>
          <textarea
            id="milestoneNote"
            value={data.milestoneNote}
            onChange={set('milestoneNote')}
            placeholder="Any known phases or checkpoints to mention"
          />
        </div>
      </div>
    </div>
  );
}
