const VersionsSection = () => {
  const versions = [
    {
      version: "v0.8.1",
      date: "June 2026",
      status: "published",
      doi: "10.5281/zenodo.20678017",
      notes: "DOI anchoring, whitepaper refresh, schema URL alignment",
      current: true,
    },
    {
      version: "v0.8.0",
      date: "April 2026",
      status: "archived",
      doi: "10.5281/zenodo.19555166",
      notes: "Partner profiles, conformance matrix, versioning model, Level-3 path",
      current: false,
    },
    {
      version: "v0.7.0",
      date: "March 2026",
      status: "archived",
      doi: "10.5281/zenodo.19211903",
      notes: "10-domain manifold complete, governance slots stable",
      current: false,
    },
    {
      version: "v0.6.0",
      date: "February 2026",
      status: "archived",
      doi: "10.5281/zenodo.14992765",
      notes: "Impulse domain added, envelope renamed .ddna",
      current: false,
    },
    {
      version: "v0.5.0",
      date: "November 2025",
      status: "archived",
      doi: "10.5281/zenodo.14205103",
      notes: "W3C Data Integrity Proofs (eddsa-jcs-2022), VitaPass identity binding",
      current: false,
    },
    {
      version: "v0.4.1",
      date: "October 2025",
      status: "archived",
      doi: "10.5281/zenodo.17808652",
      notes: "EU AI Act positioning, rebrand to EDM Initiative",
      current: false,
    },
    {
      version: "v0.4.0",
      date: "October 2025",
      status: "archived",
      doi: "10.5281/zenodo.14002003",
      notes: "First public draft, 8 representational domains",
      current: false,
    },
  ];

  return (
    <section className="spec-section" id="versions">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">
            <b>Versions</b>
          </div>
          <div>
            <h2 className="sec-title">Versioning is a structural commitment.</h2>
            <p className="sec-lede">
              Every published schema is archived with DOI anchoring. Minor revisions preserve
              canonical byte stability within a major line.
            </p>
          </div>
        </div>

        <table className="versions">
          <thead>
            <tr>
              <th>Version</th>
              <th>Date</th>
              <th>Status</th>
              <th>DOI</th>
              <th style={{ textAlign: 'right' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {versions.map((v) => (
              <tr key={v.version} className={v.current ? "current" : ""}>
                <td className="ver">{v.version}</td>
                <td>{v.date}</td>
                <td>
                  <span className={`badge-status ${v.status}`}>{v.status}</span>
                </td>
                <td className="mono dim">{v.doi}</td>
                <td style={{ textAlign: 'right' }} className="dim">{v.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VersionsSection;
