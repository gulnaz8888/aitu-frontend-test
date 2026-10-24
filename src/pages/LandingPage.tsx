import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n, type Key } from './i18n'
import { blockMax, nominations, stages } from './criteria'

const navigation: [Key, string][] = [
  ['navAbout', '#about'],
  ['navNominations', '#nominations'],
  ['navTimeline', '#timeline'],
  ['navResults', '#results'],
  ['navContacts', '#contacts'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

function ContestantPreview() {
  const { t } = useI18n()
  return (
    <div className="portal-preview contestant-preview" aria-hidden="true">
      <div className="preview-topbar">
        <img src="/logo-trophy.png" alt="" className="preview-logo" />
        <div className="preview-dots"><i /><i /><i /></div>
      </div>
      <div className="preview-body">
        <div className="preview-kicker">{t('previewOverview')}</div>
        <div className="preview-heading">{t('previewWelcome')}</div>
        <div className="progress-card">
          <div className="progress-meta"><span>{t('previewProgress')}</span><strong>72%</strong></div>
          <div className="progress-track"><span /></div>
          <div className="progress-steps">
            <span className="complete">01</span><i /><span className="complete">02</span><i /><span>03</span>
          </div>
        </div>
        <div className="preview-row">
          <div className="mini-card"><small>{t('previewNext')}</small><b>{t('previewNextValue')}</b></div>
          <div className="mini-card accent"><small>{t('previewStatus')}</small><b>{t('previewStatusValue')}</b></div>
        </div>
      </div>
    </div>
  )
}

function ExpertPreview() {
  const { t } = useI18n()
  return (
    <div className="portal-preview expert-preview" aria-hidden="true">
      <div className="preview-sidebar">
        <img src="/logo-trophy.png" alt="" className="preview-logo" />
        <i className="active" /><i /><i /><i />
      </div>
      <div className="expert-content">
        <div className="expert-head">
          <div><small>{t('previewExpert')}</small><b>{t('previewAssigned')}</b></div>
          <span>04</span>
        </div>
        <div className="review-list">
          <div><span className="avatar">GY</span><p><b>II.2 · 22 / 30</b><small>AITU-260128</small></p><em>{t('previewReview')}</em></div>
          <div><span className="avatar gold">AS</span><p><b>II.2 · 26 / 30</b><small>AITU-260127</small></p><em>{t('previewReview')}</em></div>
          <div><span className="avatar blue">TN</span><p><b>II.1 · 9 / 14</b><small>AITU-260124</small></p><em>{t('previewReview')}</em></div>
        </div>
      </div>
    </div>
  )
}

function AdminPreview() {
  const { t } = useI18n()
  return (
    <div className="portal-preview admin-preview" aria-hidden="true">
      <div className="admin-head">
        <div><small>{t('previewControl')}</small><b>{t('previewOverviewTitle')}</b></div>
        <span>2026</span>
      </div>
      <div className="metric-grid">
        <div><small>{t('previewApplications')}</small><b>128</b><em>+14</em></div>
        <div><small>{t('previewAdmitted')}</small><b>104</b><em>81.3%</em></div>
        <div><small>{t('previewOverdue')}</small><b>8</b><em>6.3%</em></div>
      </div>
      <div className="chart">
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

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, date } = useI18n()

  const portals = [
    { number: '01', title: t('portalContestant'), description: t('portalContestantText'), action: t('enterContestant'), href: '/contestant', preview: <ContestantPreview /> },
    { number: '02', title: t('portalExpert'), description: t('portalExpertText'), action: t('enterExpert'), href: '/expert-review', preview: <ExpertPreview /> },
    { number: '03', title: t('portalAdmin'), description: t('portalAdminText'), action: t('enterAdmin'), href: '/administrator', preview: <AdminPreview /> },
  ]

  const blocks = [
    { max: blockMax[1], name: t('block1') },
    { max: blockMax[2], name: t('block2') },
    { max: blockMax[3], name: t('block3') },
  ]

  return (
    <main>
      <header className="site-header">
        <a className="site-logo" href="#" aria-label="AITU Teaching Excellence Awards">
          <img src="/logo-trophy.png" alt="AITU Teaching Excellence Awards" />
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          <div className="nav-links">
            {navigation.map(([key, href]) => (
              <a key={key} href={href} onClick={() => setMenuOpen(false)}>{t(key)}</a>
            ))}
          </div>
          <div className="nav-tools">
            <LanguageSwitcher />
            <a href="/login" className="login-button">{t('login')}</a>
          </div>
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

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span /> {t('eyebrow')}</div>
          <h1>{t('heroLine1')}<br /><span>{t('heroHighlight')}</span> {t('heroLine2')}</h1>
          <div className="hero-actions">
            <a className="button button-primary" href="/login">{t('apply')} <ArrowIcon /></a>
            <a className="button button-secondary" href="#nominations">{t('viewCriteria')}</a>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>{t('discover')}</span><i /></a>
      </section>

      <section className="info-section" id="about">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> {t('aboutEyebrow')}</div>
            <h2>{t('aboutTitle')}</h2>
          </div>
          <p>{t('aboutText')}</p>
        </div>
        <div className="stat-row">
          <div><strong>100</strong><span>{t('statPoints')}</span></div>
          <div><strong>3</strong><span>{t('statBlocks')}</span></div>
          <div><strong>4</strong><span>{t('statNominations')}</span></div>
        </div>
        <div className="block-row">
          {blocks.map((block, index) => (
            <div key={block.name}><small>{['I', 'II', 'III'][index]}</small><b>{block.name}</b><em>{block.max}</em></div>
          ))}
        </div>
      </section>

      <section className="info-section alt" id="nominations">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> {t('nomEyebrow')}</div>
            <h2>{t('nomTitle')}</h2>
          </div>
        </div>
        <div className="nomination-grid">
          {nominations.map((nomination, index) => (
            <article className="nomination-card" key={nomination.id}>
              <span className="card-number">0{index + 1}</span>
              <h3>{nomination.name}</h3>
              <p>{nomination.conditions[lang]}</p>
              <div className="nomination-meta">
                {nomination.applicable
                  ? <><small>{t('passMark')}</small><b>{nomination.pass} {t('pointsShort')}</b></>
                  : <b>{t('noApplication')}</b>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section" id="timeline">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> {t('timeEyebrow')}</div>
            <h2>{t('timeTitle')}</h2>
          </div>
        </div>
        <ol className="timeline">
          {stages.map((stage, index) => (
            <li key={stage.key}>
              <i />
              <small>0{index + 1}</small>
              <b>{t(stage.key as Key)}</b>
              <span>{stage.from === stage.to ? date(stage.from) : `${date(stage.from)} — ${date(stage.to)}`}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="info-section alt" id="results">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> {t('resultsEyebrow')}</div>
            <h2>{t('resultsTitle')}</h2>
          </div>
          <p>{t('resultsText')}</p>
        </div>
      </section>

      <section className="portals" id="platform">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> {t('portalsEyebrow')}</div>
            <h2>{t('portalsTitle')}</h2>
          </div>
          <p>{t('portalsText')}</p>
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

      <footer id="contacts">
        <a className="footer-logo" href="#"><img src="/logo-trophy.png" alt="AITU Awards" /></a>
        <p>{t('footerText')}</p>
        <span>{t('footerRights')} · <a href="mailto:awards@aitu.edu.kz">awards@aitu.edu.kz</a></span>
      </footer>
    </main>
  )
}
