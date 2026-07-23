import { SERVICES } from '../data/services';

let idCounter = 0;
const nextId = () => `d${Date.now()}_${idCounter++}`;

export default function ScopeStep({ data, onChange }) {
  const selectedService = SERVICES.find((s) => s.id === data.serviceId);

  const handleSelectService = (service) => {
    onChange({
      serviceId: service.id,
      summary: service.summary,
      deliverables: service.deliverables.map((text) => ({
        id: nextId(),
        text,
        included: true,
      })),
    });
  };

  const updateDeliverable = (id, patch) => {
    onChange({
      deliverables: data.deliverables.map((d) => (d.id === id ? { ...d, ...patch } : d)),
    });
  };

  const removeDeliverable = (id) => {
    onChange({ deliverables: data.deliverables.filter((d) => d.id !== id) });
  };

  const addDeliverable = () => {
    onChange({ deliverables: [...data.deliverables, { id: nextId(), text: '', included: true }] });
  };

  return (
    <div>
      <div className="step-eyebrow">Step 02</div>
      <h2 className="step-title">Scope</h2>
      <p className="step-subtitle">
        Pick the service this proposal is for — we'll draft a starting scope and deliverables you can edit freely.
      </p>

      <div className="service-grid">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            type="button"
            className={`service-card ${data.serviceId === service.id ? 'service-card--selected' : ''}`}
            onClick={() => handleSelectService(service)}
          >
            {service.name}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="field-group" style={{ marginTop: 22 }}>
          <div className="field">
            <label htmlFor="scopeSummary">Scope summary</label>
            <textarea
              id="scopeSummary"
              value={data.summary}
              onChange={(e) => onChange({ summary: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Deliverables</label>
            <div className="deliverable-list">
              {data.deliverables.map((d) => (
                <div className="deliverable-row" key={d.id}>
                  <input
                    type="checkbox"
                    checked={d.included}
                    onChange={(e) => updateDeliverable(d.id, { included: e.target.checked })}
                  />
                  <input
                    type="text"
                    value={d.text}
                    onChange={(e) => updateDeliverable(d.id, { text: e.target.value })}
                    className="deliverable-input"
                  />
                  <button
                    type="button"
                    className="deliverable-remove"
                    onClick={() => removeDeliverable(d.id)}
                    aria-label="Remove deliverable"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button type="button" className="add-deliverable-btn" onClick={addDeliverable}>
              + Add deliverable
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
