const Footer = () => {
  return (
    <footer className="spec-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="brand" style={{ marginBottom: '12px' }}>
              <span className="brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="1.5" stroke="currentColor"/>
                  <circle cx="9" cy="12" r="3" className="stroke-primary"/>
                  <circle cx="15" cy="12" r="3" stroke="currentColor"/>
                  <line x1="9" y1="12" x2="15" y2="12" className="stroke-primary"/>
                </svg>
              </span>
              <span style={{ color: 'var(--ink)' }}>Emotional Data Model</span>
            </div>
            <p style={{ maxWidth: '360px', margin: 0, fontSize: '13px' }}>
              A protocol-level representation and persistence architecture for governed emotional data.
              Published by DeepaData Pty Ltd.
            </p>
          </div>
          <div>
            <h5>Specification</h5>
            <ul>
              <li><a href="#motivation">Motivation</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#domains">Domains</a></li>
              <li><a href="#conformance">Conformance</a></li>
              <li><a href="#envelope">.ddna</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="https://zenodo.org/records/19555166" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
              <li><a href="https://github.com/emotional-data-model/edm-spec" target="_blank" rel="noopener noreferrer">Schema</a></li>
              <li><a href="https://github.com/emotional-data-model/ddna-tools" target="_blank" rel="noopener noreferrer">ddna-tools</a></li>
              <li><a href="/llms.txt">llms.txt</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@emotionaldatamodel.org">contact@emotionaldatamodel.org</a></li>
              <li><a href="https://github.com/emotional-data-model" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://zenodo.org/records/19555166" target="_blank" rel="noopener noreferrer">Zenodo</a></li>
              <li><a href="https://deepadata.com" target="_blank" rel="noopener noreferrer">deepadata.com</a></li>
            </ul>
          </div>
        </div>
        <div className="btm">
          <span>© 2024–2026 DeepaData Pty Ltd</span>
          <span>Last updated: 2026-04-23</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
