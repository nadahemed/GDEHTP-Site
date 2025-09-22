

```markdown
## Great Debaters EHTP — Technique

### Stack
- HTML, CSS, JavaScript (vanilla)
- Chart.js (graphiques)
- Font Awesome (icônes)
- Netlify (hébergement + DNS)

### Structure
```
.
├─ GD.html            # Entrée principale
├─ GD.css             # Styles (clair/sombre, responsive)
├─ GD.js              # Logique (sections, carrousel, charts)
├─ index.html         # Redirection vers GD.html
├─ netlify.toml       # Config Netlify (publish + redirects)
└─ board/             # Images (équipe, etc.)
```

### Lancer en local
- Ouvrir `GD.html` directement, ou servir le dossier:
```bash
# Python 3
python -m http.server 8080
# Node (serve)
npx serve .
```
- Ouvrir: `http://localhost:8080/GD.html`

### Déploiement Netlify

- Dossier public: `.` (pas de build)
- Fichier: `netlify.toml` déjà présent

#### Option A — Drag & Drop
1. Netlify → Sites → Add new site → Deploy manually
2. Glisser le dossier du projet (ou zip)
3. Pour mettre à jour: redeposez le dossier/zip

#### Option B — Git
1. Pousser sur GitHub
2. Netlify → Add new site → Import from Git → repo
3. Build command: (vide) • Publish directory: `.`

### DNS & SSL
- Domaine acheté chez Netlify: actif en minutes, propagation souvent <1h (max 24h)
- Domaine externe → NS vers Netlify: 1–24h (rarement 48h)
- SSL (Let’s Encrypt): 5–15 min après configuration

Vérification:
```bash
nslookup votredomaine.com 1.1.1.1
nslookup www.votredomaine.com 8.8.8.8
```
Propagation: `whatsmydns.net`

### Points de modification rapides
- Carrousel (images/chemins): `GD.js` (initialisation carrousel)
- Noms/équipes (Bureau): `GD.js`
- Téléphone footer/contact: `GD.js` et/ou `GD.html` (actuel: +212 7 02 24 55 29)
- Histogramme (années 2020–2025): `createMembersChart` dans `GD.js`
- Palmarès (cartes): `loadPalmaresSection` dans `GD.js`
- Événements (définition/partenaires/sponsors): `loadEvenementsSection` dans `GD.js`
- Styles badges/visibilité: `.member-badge`, `.member-info h3` dans `GD.css`
- Mode sombre (À propos noir pur): `body.dark .definition-section` dans `GD.css`

### Dépannage
- Carrousel immobile: vérifier chemins d’images + réinitialisation après chargement de section
- Graphiques absents: Chart.js chargé + appels `createMembersChart()`/`createSectionsChart()` après insertion du template
- DNS non visible: attendre propagation, navigation privée, tester sur réseau mobile, vider cache DNS

### Commandes utiles
```bash
# Serveur local (Python)
python -m http.server 8080

# Serveur local (Node)
npx serve .

# Vérifs DNS
nslookup votredomaine.com 1.1.1.1
nslookup www.votredomaine.com 8.8.8.8
```
```
