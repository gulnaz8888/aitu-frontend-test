import { useState } from 'react'

const navigation = [
  ['ABOUT', '#about'],
  ['NOMINATIONS', '#nominations'],
  ['TIMELINE', '#timeline'],
  ['WINNERS', '#winners'],
  ['CONTACTS', '#contacts'],
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.75" />
      <path d="m16 16 4.25 4.25" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

function ContestantPreview() {
  return (
    <div className="portal-preview contestant-preview" aria-hidden="true">
      <div className="preview-topbar">
        <span className="preview-mark">A</span>
        <div className="preview-dots"><i /><i /><i /></div>
      </div>
      <div className="preview-body">
        <div className="preview-kicker">APPLICATION OVERVIEW</div>
        <div className="preview-heading">Welcome back, Applicant</div>
        <div className="progress-card">
          <div className="progress-meta"><span>Application progress</span><strong>72%</strong></div>
          <div className="progress-track"><span /></div>
          <div className="progress-steps">
            <span className="complete">01</span><i /><span className="complete">02</span><i /><span>03</span>
          </div>
        </div>
        <div className="preview-row">
          <div className="mini-card"><small>NEXT STEP</small><b>Research profile</b></div>
          <div className="mini-card accent"><small>STATUS</small><b>In progress</b></div>
        </div>
      </div>
    </div>
  )
}

function ExpertPreview() {
  return (
    <div className="portal-preview expert-preview" aria-hidden="true">
      <div className="preview-sidebar">
        <span className="preview-mark">A</span>
        <i className="active" /><i /><i /><i />
      </div>
      <div className="expert-content">
        <div className="expert-head">
          <div><small>EXPERT DASHBOARD</small><b>Assigned reviews</b></div>
          <span>08</span>
        </div>
        <div className="review-list">
          <div><span className="avatar">AM</span><p><b>Academic Leadership</b><small>Nominee #2048</small></p><em>Review</em></div>
          <div><span className="avatar gold">SK</span><p><b>Research Excellence</b><small>Nominee #1912</small></p><em>Review</em></div>
          <div><span className="avatar blue">JT</span><p><b>Teaching Innovation</b><small>Nominee #1876</small></p><em>Review</em></div>
        </div>
      </div>
    </div>
  )
}

function AdminPreview() {
  return (
    <div className="portal-preview admin-preview" aria-hidden="true">
      <div className="admin-head">
        <div><small>CONTROL CENTER</small><b>Awards overview</b></div>
        <span>2025 EDITION</span>
      </div>
      <div className="metric-grid">
        <div><small>APPLICATIONS</small><b>1,284</b><em>+18.2%</em></div>
        <div><small>IN REVIEW</small><b>386</b><em>30.1%</em></div>
        <div><small>FINALISTS</small><b>64</b><em>5.0%</em></div>
      </div>
      <div className="chart">
        <div className="chart-label"><span>Submission activity</span><small>JAN — MAY</small></div>
        <svg viewBox="0 0 420 90" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cfaa5a" stopOpacity=".34" />
              <stop offset="100%" stopColor="#cfaa5a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="chart-fill" d="M0 73C35 67 48 75 80 55s49-10 77-25 47 16 78 4 45-18 76-5 49-15 109-22v83H0Z" />
          <path className="chart-line" d="M0 73C35 67 48 75 80 55s49-10 77-25 47 16 78 4 45-18 76-5 49-15 109-22" />
        </svg>
      </div>
    </div>
  )
}

const portals = [
  {
    number: '01',
    title: 'Contestant Portal',
    description: 'Create your profile, submit supporting evidence, and track every stage of your award application.',
    action: 'Enter contestant portal',
    href: '/contestant',
    preview: <ContestantPreview />,
  },
  {
    number: '02',
    title: 'Expert Review Portal',
    description: 'A focused evaluation workspace for independent experts and distinguished academic reviewers.',
    action: 'Enter review portal',
    href: '/expert-review',
    preview: <ExpertPreview />,
  },
  {
    number: '03',
    title: 'Administrator Control Panel',
    description: 'Oversee nominations, coordinate review cycles, and manage the awards programme with clarity.',
    action: 'Open control panel',
    href: '/administrator',
    preview: <AdminPreview />,
  },
]

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="AITU Awards home">
          <span className="brand-symbol">A</span>
          <span className="brand-copy"><strong>AITU</strong><small>EXCELLENCE AWARDS</small></span>
        </a>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <button className="search-button" aria-label="Search"><SearchIcon /></button>
        </nav>

        <button
          className={menuOpen ? 'menu-button is-open' : 'menu-button'}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span />
        </button>
      </header>

      <section className="hero" id="about">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span /> INTERNATIONAL ACADEMIC RECOGNITION</div>
          <h1>AITU TEACHING<br /><span>EXCELLENCE</span> AWARDS</h1>
          <p>THE ULTIMATE RECOGNITION FOR ACADEMIC AND RESEARCH ACHIEVEMENTS</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#nominations">Submit Application <ArrowIcon /></a>
            <a className="button button-secondary" href="#criteria">View Criteria</a>
          </div>
        </div>
        <div className="edition-mark" aria-hidden="true">
          <span>EST.</span>
          <b>2025</b>
          <i />
          <small>GLOBAL EDITION</small>
        </div>
        <a className="scroll-cue" href="#nominations"><span>DISCOVER THE AWARDS</span><i /></a>
      </section>

      <section className="portals" id="nominations">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> AWARDS PLATFORM</div>
            <h2>One programme.<br />Three dedicated portals.</h2>
          </div>
          <p>Purpose-built access for every participant in the AITU Teaching Excellence Awards.</p>
        </div>

        <div className="portal-grid">
          {portals.map((portal) => (
            <article className="portal-card" key={portal.number}>
              <div className="portal-card-preview">{portal.preview}</div>
              <div className="portal-card-copy">
                <span className="card-number">{portal.number}</span>
                <h3>{portal.title}</h3>
                <p>{portal.description}</p>
                <a href={portal.href} className="card-link">{portal.action} <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="criteria-strip" id="criteria">
        <p>Applications for the 2025 global edition are now open</p>
        <a href="#nominations">View nomination criteria <ArrowIcon /></a>
      </section>

      <footer id="contacts">
        <a className="brand footer-brand" href="#"><span className="brand-symbol">A</span><span className="brand-copy"><strong>AITU</strong><small>EXCELLENCE AWARDS</small></span></a>
        <p>Recognising distinction in teaching, research, and academic leadership.</p>
        <span>© 2025 AITU AWARDS</span>
      </footer>
    </main>
  )
}
