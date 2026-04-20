const ManifoldDiagram = () => {
  return (
    <div className="manifold-card">
      <svg viewBox="0 0 480 500" xmlns="http://www.w3.org/2000/svg" aria-label="EDM manifold diagram">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0 H0 V24" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.08"/>
          </pattern>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 Z" fill="currentColor" opacity="0.6"/>
          </marker>
        </defs>
        <rect x="0" y="0" width="480" height="500" fill="url(#grid)"/>

        {/* Layer 3: Compute (dashed) */}
        <g fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
          <rect x="28" y="34" width="424" height="82" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 3"/>
          <text x="40" y="52" opacity="0.5" letterSpacing="1">LAYER 03 · COMPUTE</text>
          <g opacity="0.8">
            <rect x="44" y="66" width="88" height="38" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="2 2"/>
            <text x="88" y="89" textAnchor="middle" fontSize="10">Retrieval</text>
            <rect x="140" y="66" width="88" height="38" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="2 2"/>
            <text x="184" y="89" textAnchor="middle" fontSize="10">Appraisal</text>
            <rect x="236" y="66" width="88" height="38" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="2 2"/>
            <text x="280" y="89" textAnchor="middle" fontSize="10">Agentic</text>
            <rect x="332" y="66" width="112" height="38" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="2 2"/>
            <text x="388" y="89" textAnchor="middle" fontSize="10">Vector search</text>
          </g>
        </g>

        {/* Connector: reads/computes over */}
        <g stroke="currentColor" strokeOpacity="0.4" fill="none">
          <line x1="240" y1="116" x2="240" y2="138" markerEnd="url(#arr)"/>
        </g>
        <text x="248" y="132" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.5" letterSpacing="0.5">reads / computes over</text>

        {/* Layer 2: Persistence (.ddna envelope) */}
        <g className="layer-persistence">
          <rect x="28" y="148" width="424" height="94" rx="3" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeOpacity="0.55"/>
          <text x="40" y="166" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)" letterSpacing="1">LAYER 02 · PERSISTENCE · .DDNA ENVELOPE</text>
          <g fontFamily="var(--font-mono)" fontSize="10" fill="currentColor">
            <rect x="44" y="180" width="98" height="48" rx="2" fill="var(--bg)" stroke="var(--accent)" strokeOpacity="0.45"/>
            <text x="93" y="200" textAnchor="middle" fontWeight="600">Byte-stable</text>
            <text x="93" y="214" textAnchor="middle" opacity="0.6" fontSize="9">container</text>

            <rect x="150" y="180" width="98" height="48" rx="2" fill="var(--bg)" stroke="var(--accent)" strokeOpacity="0.45"/>
            <text x="199" y="200" textAnchor="middle" fontWeight="600">Governance</text>
            <text x="199" y="214" textAnchor="middle" opacity="0.6" fontSize="9">enforcement</text>

            <rect x="256" y="180" width="98" height="48" rx="2" fill="var(--bg)" stroke="var(--accent)" strokeOpacity="0.45"/>
            <text x="305" y="200" textAnchor="middle" fontWeight="600">Integrity</text>
            <text x="305" y="214" textAnchor="middle" opacity="0.6" fontSize="9">hash / sign</text>

            <rect x="362" y="180" width="82" height="48" rx="2" fill="var(--bg)" stroke="var(--accent)" strokeOpacity="0.45"/>
            <text x="403" y="200" textAnchor="middle" fontWeight="600">VitaPass</text>
            <text x="403" y="214" textAnchor="middle" opacity="0.6" fontSize="9">identity</text>
          </g>
        </g>

        {/* Connector: encapsulates */}
        <g stroke="currentColor" strokeOpacity="0.4" fill="none">
          <line x1="240" y1="242" x2="240" y2="264" markerEnd="url(#arr)"/>
        </g>
        <text x="248" y="258" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.5" letterSpacing="0.5">encapsulates</text>

        {/* Layer 1: Representation — the manifold itself */}
        <g className="layer-representation">
          <rect x="28" y="274" width="424" height="206" rx="3" fill="var(--primary)" fillOpacity="0.08" stroke="var(--primary)" strokeOpacity="0.6"/>
          <text x="40" y="292" fontFamily="var(--font-mono)" fontSize="9" fill="var(--primary)" letterSpacing="1">LAYER 01 · REPRESENTATION · AFFECTIVE MANIFOLD</text>

          {/* 5 domain nodes connected to center */}
          <g fill="var(--bg)" stroke="var(--primary)" strokeWidth="1.2">
            {/* center */}
            <circle cx="240" cy="390" r="26" strokeWidth="1.5"/>
            {/* satellite nodes: top, left, right, bottom-left, bottom-right */}
            <circle cx="240" cy="318" r="18"/>
            <circle cx="116" cy="360" r="18"/>
            <circle cx="364" cy="360" r="18"/>
            <circle cx="154" cy="452" r="18"/>
            <circle cx="326" cy="452" r="18"/>
          </g>

          {/* connections */}
          <g stroke="var(--primary)" strokeOpacity="0.5" fill="none">
            <line x1="240" y1="336" x2="240" y2="364"/>
            <line x1="134" y1="360" x2="214" y2="384"/>
            <line x1="346" y1="360" x2="266" y2="384"/>
            <line x1="170" y1="444" x2="220" y2="406"/>
            <line x1="310" y1="444" x2="260" y2="406"/>
            {/* inter-node arcs (suggesting manifold) */}
            <path d="M 134 360 Q 150 310, 222 318" strokeOpacity="0.18" strokeDasharray="2 3"/>
            <path d="M 346 360 Q 330 310, 258 318" strokeOpacity="0.18" strokeDasharray="2 3"/>
            <path d="M 170 444 Q 130 430, 134 378" strokeOpacity="0.18" strokeDasharray="2 3"/>
            <path d="M 310 444 Q 350 430, 346 378" strokeOpacity="0.18" strokeDasharray="2 3"/>
            <path d="M 170 444 Q 240 480, 310 444" strokeOpacity="0.18" strokeDasharray="2 3"/>
          </g>

          {/* labels */}
          <g fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
            <text x="240" y="393" textAnchor="middle" fontWeight="600" fill="var(--primary)">core</text>
            <text x="240" y="321" textAnchor="middle" fill="var(--primary)" fontSize="8.5">narrative</text>
            <text x="116" y="363" textAnchor="middle" fill="var(--primary)" fontSize="8.5">constel.</text>
            <text x="364" y="363" textAnchor="middle" fill="var(--primary)" fontSize="8.5">milky_way</text>
            <text x="154" y="455" textAnchor="middle" fill="var(--primary)" fontSize="8.5">gravity</text>
            <text x="326" y="455" textAnchor="middle" fill="var(--primary)" fontSize="8.5">impulse</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ManifoldDiagram;
