const MetaStrip = () => {
  return (
    <div className="meta-strip">
      <div className="wrap row">
        <div>
          <span><b>W3C-style Technical Specification</b></span>
          <span>
            <span className="status-dot"></span>
            Status: <b style={{ color: 'hsl(var(--accent))' }}>Published Working Draft</b>
          </span>
          <span>Date: <b>March 2026</b></span>
        </div>
        <div>
          <span>DOI: <b>10.5281/zenodo.20678017</b></span>
          <span>This version: <b>v0.8.0</b></span>
        </div>
      </div>
    </div>
  );
};

export default MetaStrip;
