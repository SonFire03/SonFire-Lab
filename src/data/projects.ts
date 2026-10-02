export type Project = {
  name: string;
  url: string;
  tags: string[];
  summary: string;
  detail: string;
  tech: string[];
  featured: boolean;
};

// Sélection éditoriale basée sur les descriptions, README et sources des dépôts publics.
export const projects: Project[] = [
  {
    name: 'IronAudit',
    url: 'https://github.com/SonFire03/IronAudit',
    tags: ['Linux', 'Sécurité'],
    summary: 'Un audit local de posture Linux, pensé pour produire des constats lisibles et actionnables.',
    detail: 'IronAudit exécute des contrôles locaux en lecture seule, classe les constats par sévérité, calcule un score de risque plafonné et fournit des pistes de remédiation. Les rapports peuvent être exportés en terminal, JSON, Markdown, HTML, PDF ou SARIF. Le projet précise qu’il ne remplace ni un scanner de vulnérabilités ni une certification de conformité.',
    tech: ['Python'],
    featured: true,
  },
  {
    name: 'NEXUS // ARCHIVES OMEGA',
    url: 'https://github.com/SonFire03/nexus-archives',
    tags: ['Web', 'Narratif'],
    summary: 'Une expérience narrative cyberpunk en français, jouable dans un site statique.',
    detail: 'NEXUS propose une enquête interactive à travers des archives, des documents, une carte accessible et plusieurs chapitres jouables. La progression locale est importable et exportable ; l’application ne dépend pas d’un backend et embarque ses illustrations localement.',
    tech: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright'],
    featured: true,
  },
  {
    name: 'Mini SOC Dashboard',
    url: 'https://github.com/SonFire03/mini_soc_dashboard',
    tags: ['SOC', 'Détection'],
    summary: 'Un tableau de bord local pour ingérer des journaux, trier les alertes et suivre des incidents.',
    detail: 'L’application FastAPI + SQLite accepte des journaux fichiers ou JSON, applique des règles simples ou corrélées, suit le cycle de vie des alertes et les chronologies d’incidents, puis produit des rapports. Le README documente aussi les mises à jour WebSocket, le suivi en direct de fichiers et des métriques Prometheus.',
    tech: ['Python', 'FastAPI', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'YAML'],
    featured: true,
  },
  {
    name: 'IncidentDesk',
    url: 'https://github.com/SonFire03/DFIR_Case_Manager',
    tags: ['DFIR', 'SOC'],
    summary: 'Un espace défensif de suivi d’incidents, de preuves et de notes d’enquête.',
    detail: 'IncidentDesk structure le cycle de vie des dossiers, une chronologie d’investigation, les IOC, les artefacts et les notes analyste. Il sait produire des rapports Markdown, HTML et JSON et propose une interface web responsive. Le dépôt le présente clairement comme un outil défensif, pas comme un SIEM ou un outil offensif.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'SQLite', 'Jinja2'],
    featured: true,
  },
  {
    name: 'Threat Intel Aggregator',
    url: 'https://github.com/SonFire03/Threat_Intel_Aggregator',
    tags: ['CTI', 'SOC'],
    summary: 'Un atelier local pour consolider des indicateurs de compromission et garder leur contexte.',
    detail: 'Le projet importe des IOC en TXT, CSV ou JSON, les normalise, déduplique les observations, applique un scoring local et permet les tags, watchlists et exports. Une interface web et une API REST exposent les espaces IOC, imports et exports.',
    tech: ['Python', 'FastAPI', 'HTML', 'CSS'],
    featured: true,
  },
  {
    name: 'PocketSOC for Termux',
    url: 'https://github.com/SonFire03/pocketsoc-termux',
    tags: ['Android', 'SOC'],
    summary: 'Un kit de supervision défensive et de triage local adapté à Termux.',
    detail: 'PocketSOC regroupe des commandes de vérification locale, de triage, de baseline et de reporting pour un usage personnel, pédagogique ou homelab sur Android. Son README précise ses limites : ce n’est ni un framework offensif ni un remplacement d’EDR, MDM ou SIEM professionnel.',
    tech: ['Python', 'Termux'],
    featured: false,
  },
  {
    name: 'AUTOHACK',
    url: 'https://github.com/SonFire03/autohack',
    tags: ['Sécurité', 'Terminal'],
    summary: 'Un catalogue de commandes organisé pour les labs, CTF et homelabs autorisés.',
    detail: 'AUTOHACK propose une interface terminal Rich, une recherche filtrable, des niveaux de risque, des garde-fous d’exécution, des packs guidés et des exports. Le projet documente aussi les modes dry-run/lab, la rédaction des secrets dans les journaux et des vérifications d’intégrité du catalogue.',
    tech: ['Python', 'Rich', 'FastAPI', 'Uvicorn'],
    featured: false,
  },
  {
    name: 'ADB Manager Pro',
    url: 'https://github.com/SonFire03/adb_manager',
    tags: ['Android', 'Desktop'],
    summary: 'Une console desktop pour administrer et diagnostiquer des appareils Android via ADB.',
    detail: 'ADB Manager Pro documente la gestion multi-appareils USB/Wi-Fi, l’explorateur de fichiers, le terminal et logcat, les transferts avec aperçu dry-run, les snapshots et leur comparaison, les rapports d’audit et des contrôles de santé informatifs. Des confirmations et un mode sûr visent à réduire les erreurs d’opération.',
    tech: ['Python', 'PySide6', 'ADB'],
    featured: false,
  },
];

export const tryHackMeCertificates = [
  'Blue Team Pathway',
  'Web Fundamentals',
  'Jr Penetration Tester',
  'Introduction to Cyber Security',
  'CompTIA Pentest+',
  'Beginner Pathway',
  'Pre Security',
  'Offensive Pentesting',
];

export const tryHackMeCertificatesUrl = 'https://sonfire03.github.io/mon-site/projet/certif/certifications.html?filter=tryhackme';
