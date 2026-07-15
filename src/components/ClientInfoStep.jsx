export default function ClientInfoStep({ data, onChange }) {
  const set = (field) => (e) => onChange({ [field]: e.target.value });

  return (
    <div>
      <div className="step-eyebrow">Step 01</div>
      <h2 className="step-title">Client info</h2>
      <p className="step-subtitle">Who is this proposal for? These details appear on the cover of the final document.</p>

      <div className="field-group">
        <div className="field-row">
          <div className="field">
            <label htmlFor="name">Contact name</label>
            <input id="name" value={data.name} onChange={set('name')} placeholder="e.g. Ayesha Khan" />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" value={data.company} onChange={set('company')} placeholder="e.g. Meridian Bank" />
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={data.email} onChange={set('email')} placeholder="ayesha@meridian.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" value={data.phone} onChange={set('phone')} placeholder="+92 3xx xxxxxxx" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="industry">Industry</label>
          <select id="industry" value={data.industry} onChange={set('industry')}>
            <option value="">Select an industry</option>
            <option value="banking">Banking & finance</option>
            <option value="retail">Retail & e-commerce</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}
