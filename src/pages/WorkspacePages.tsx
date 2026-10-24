import { Fragment, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n, type Key } from './i18n'
import {
  applicants,
  blockMax,
  claims,
  criteria,
  edition,
  nominations,
  sourceLabel,
  stages,
  statusLabel,
  type Status,
} from './criteria'

type IconName =
  | 'arrow'
  | 'bell'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'document'
  | 'grid'
  | 'info'
  | 'logout'
  | 'search'
  | 'shield'
  | 'trash'
  | 'upload'
  | 'users'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    chevron: <><path d="m9 18 6-6-6-6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    document: <><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6M9 16h6" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>,
    logout: <><path d="M10 4H4v16h6M14 8l4 4-4 4M8 12h10" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.2 8 7.5 9.5 4.3-1.5 7.5-4.8 7.5-9.5V6z" /><path d="m9 12 2 2 4-4" /></>,
    trash: <><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" /></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4" /></>,
    users: <><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 11a4 4 0 0 0 0-8M22 20v-2a4 4 0 0 0-3-3.9" /></>,
  }

  return <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function initials(name: string) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('')
}

function statusTone(status: Status): 'success' | 'warning' | 'error' | 'navy' {
  if (status === 'admitted' || status === 'reviewDone' || status === 'commission' || status === 'finalized') return 'success'
  if (status === 'returned') return 'error'
  if (status === 'draft') return 'navy'
  return 'warning'
}

function StatusBadge({ tone, children }: { tone: 'success' | 'warning' | 'error' | 'navy'; children: ReactNode }) {
  return <span className={`status-badge ${tone}`}><i />{children}</span>
}

function WorkspaceHeader({ name, role, nav }: { name: string; role: string; nav?: ReactNode }) {
  const { t } = useI18n()
  return (
    <header className="workspace-header">
      <Link className="workspace-brand" to="/" aria-label="AITU Teaching Excellence Awards">
        <img className="workspace-logo" src="/logo-trophy.png" alt="AITU Teaching Excellence Awards" />
      </Link>
      {nav}
      <div className="workspace-header-actions">
        <LanguageSwitcher />
        <button className="header-icon-button" aria-label={t('notifications')}><Icon name="bell" /><i /></button>
        <div className="user-chip">
          <span>{initials(name)}</span>
          <div><strong>{name}</strong><small>{role}</small></div>
          <Icon name="chevron" />
        </div>
      </div>
    </header>
  )
}

function WorkspaceShell({
  role,
  name,
  links,
  children,
}: {
  role: string
  name: string
  links: { href: string; label: string; icon: IconName; active?: boolean }[]
  children: ReactNode
}) {
  const { t } = useI18n()
  return (
    <div className="workspace-shell">
      <WorkspaceHeader name={name} role={role} />
      <div className="workspace-layout">
        <aside className="workspace-sidebar">
          <div className="sidebar-label">{t('workspace')}</div>
          <nav>
            {links.map((link) => (
              <a key={link.href} className={link.active ? 'active' : ''} href={link.href}><Icon name={link.icon} /> {link.label}</a>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <div className="edition-panel"><small>{t('edition')}</small><strong>{t('editionName')}</strong><span>{t('applicationsOpen')}</span></div>
            <Link to="/"><Icon name="logout" /> {t('returnToWebsite')}</Link>
          </div>
        </aside>
        <div className="workspace-main">{children}</div>
      </div>
    </div>
  )
}

function PageIntro({ eyebrow, title, text, action }: { eyebrow: string; title: string; text: string; action?: ReactNode }) {
  return (
    <div className="page-intro">
      <div>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {action}
    </div>
  )
}

type Row = { claimed: number | null; files: { name: string; meta: string }[] }

const seed = (claimed: number | null, ...names: string[]): Row => ({
  claimed,
  files: names.map((name) => ({ name, meta: 'PDF · 2.4 MB · 12 Nov 2026' })),
})

const initialRows: Record<string, Row> = {
  'I.1': seed(5, 'phd_diploma.pdf'),
  'I.2': seed(3, 'associate_professor_certificate.pdf'),
  'I.5': seed(0),
  'I.6': seed(6, 'erasmus_mobility_2025.pdf'),
  'I.7': seed(5, 'professional_development_2024.pdf'),
  'II.1': seed(10, 'mooc_course_certificate.pdf'),
  'II.2': seed(22, 'study_guide_data_science_2023.pdf', 'syllabus_machine_learning.pdf'),
  'III.1': seed(null),
  'III.2': seed(4, 'conference_talk_programme.pdf'),
}

export function ContestantWorkspace() {
  const { t, lang, date } = useI18n()
  const [rows, setRows] = useState<Record<string, Row>>(initialRows)
  const [nomination, setNomination] = useState('professor')
  const [declaration, setDeclaration] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [savedAt, setSavedAt] = useState('10:42')
  const [activeUpload, setActiveUpload] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const own = criteria.filter((item) => item.source === 'nominee')
  const rowOf = (id: string): Row => rows[id] ?? { claimed: null, files: [] }
  const isReady = (id: string) => {
    const row = rowOf(id)
    return row.claimed !== null && (row.claimed === 0 || row.files.length > 0)
  }
  const readyCount = own.filter((item) => isReady(item.id)).length
  const allReady = readyCount === own.length
  const canSubmit = allReady && declaration && !submitted
  const daysLeft = Math.max(0, Math.ceil((new Date(edition.deadline).getTime() - Date.now()) / 86400000))
  const blockTotal = (block: 1 | 2 | 3) => own.filter((item) => item.block === block).reduce((sum, item) => sum + (rowOf(item.id).claimed ?? 0), 0)
  const total = blockTotal(1) + blockTotal(2) + blockTotal(3)
  const status: Status = submitted ? 'submitted' : 'draft'

  const update = (id: string, patch: Partial<Row>) => setRows((current) => ({ ...current, [id]: { ...rowOf(id), ...patch } }))

  const setClaimed = (id: string, max: number, value: string) => {
    if (value.trim() === '') return update(id, { claimed: null })
    const number = Math.round(Number(value))
    if (Number.isNaN(number)) return
    update(id, { claimed: Math.min(max, Math.max(0, number)) })
  }

  const requestFile = (id: string) => {
    setActiveUpload(id)
    fileInputRef.current?.click()
  }

  const handleFile = (file?: File) => {
    if (!file || !activeUpload) return
    const size = file.size < 1024 * 1024 ? `${Math.max(1, Math.round(file.size / 1024))} KB` : `${(file.size / (1024 * 1024)).toFixed(1)} MB`
    const meta = `${file.name.split('.').pop()?.toUpperCase() || 'FILE'} · ${size} · ${t('uploadedToday')}`
    update(activeUpload, { files: [...rowOf(activeUpload).files, { name: file.name, meta }] })
    setActiveUpload(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const removeFile = (id: string, index: number) => update(id, { files: rowOf(id).files.filter((_, position) => position !== index) })

  const save = () => setSavedAt(new Date().toLocaleTimeString(lang === 'kk' ? 'kk-KZ' : lang === 'ru' ? 'ru-RU' : 'en-GB', { hour: '2-digit', minute: '2-digit' }))

  const checklist = [
    { label: t('chkNomination'), done: Boolean(nomination) },
    { label: t('chkCriteria'), done: allReady },
    { label: t('chkDeclaration'), done: declaration },
  ]

  return (
    <div className="contestant-dashboard">
      <WorkspaceHeader
        name="Gulnaz Yeskermes"
        role={t('roleContestant')}
        nav={
          <nav className="contestant-nav" aria-label="Contestant workspace">
            <a href="#overview">{t('navOverview')}</a>
            <a className="active" href="#evidence">{t('navEvidence')}</a>
            <a href="#profile">{t('navProfile')}</a>
          </nav>
        }
      />

      <main className="contestant-main">
        <section className="contestant-intro" id="overview">
          <div><h1>{t('portalTitle')}</h1></div>
          <div className="contestant-intro-actions">
            <span>{t('today', { t: savedAt })}</span>
            <button className="outline-action" onClick={save}>{t('saveChanges')}</button>
          </div>
        </section>

        <section className="status-overview" aria-label="Application status">
          <div className="status-primary">
            <span className="status-icon warning"><Icon name="clock" /></span>
            <div><small>{t('statusApplication')}</small><strong>{statusLabel[status][lang]}</strong><p>{allReady ? t('allRequiredDone') : t('oneRequired')}</p></div>
          </div>
          <div><small>{t('statusFilled')}</small><strong>{readyCount} / {own.length}</strong><p>{t('ofReady', { a: readyCount, b: own.length })}</p></div>
          <div><small>{t('profileLabel')}</small><strong>{t('profileComplete')}</strong><p>{t('profileVerified')}</p></div>
          <div><small>{t('deadline')}</small><strong>{date(edition.deadline)}</strong><p>{t('daysLeft', { n: daysLeft })}</p></div>
        </section>

        <div className="contestant-grid">
          <div className="contestant-column">
            <section className="evidence-manager nomination-picker">
              <div className="evidence-heading">
                <div>
                  <span>{t('step1')}</span>
                  <h2>{t('chooseNomination')}</h2>
                  <p>{t('nominationHint')}</p>
                </div>
              </div>
              <div className="nomination-options" role="radiogroup" aria-label={t('chooseNomination')}>
                {nominations.filter((item) => item.applicable).map((item) => (
                  <button
                    key={item.id}
                    role="radio"
                    aria-checked={nomination === item.id}
                    className={nomination === item.id ? 'selected' : ''}
                    disabled={submitted}
                    onClick={() => setNomination(item.id)}
                  >
                    <strong>{item.name}</strong>
                    <small>{item.conditions[lang]}</small>
                    <em>{t('passMark')}: {item.pass}</em>
                  </button>
                ))}
              </div>
            </section>

            <section className="evidence-manager" id="evidence">
              <div className="evidence-heading">
                <div>
                  <span>{t('step2')}</span>
                  <h2>{t('criteriaTitle')}</h2>
                  <p>{t('criteriaText')}</p>
                </div>
                <StatusBadge tone={allReady ? 'success' : 'warning'}>{t('ofReady', { a: readyCount, b: own.length })}</StatusBadge>
              </div>

              <input
                ref={fileInputRef}
                className="visually-hidden"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                onChange={(event) => handleFile(event.target.files?.[0])}
              />

              <div className="criteria-list">
                {criteria.map((item, index) => {
                  const showBlock = index === 0 || criteria[index - 1].block !== item.block
                  const row = rowOf(item.id)
                  const verified = item.source !== 'nominee'
                  const ready = verified || isReady(item.id)
                  return (
                    <div className="criterion-group" key={item.id}>
                      {showBlock && (
                        <div className="criterion-group-label">
                          <span>{t(`block${item.block}` as Key)} · {blockTotal(item.block)} / {blockMax[item.block]}</span>
                          <i />
                        </div>
                      )}
                      <article className={`crit-row ${ready ? 'has-file' : 'needs-file'}`}>
                        <div className="criterion-number">{item.id}</div>
                        <div className="criterion-description">
                          <div><h3>{item.title[lang]}</h3><span>{t('maxShort')} {item.max}</span></div>
                          <p>{t('verifiedBy')}: {sourceLabel[item.source][lang]}</p>
                        </div>
                        {verified ? (
                          <div className="crit-verified"><Icon name="clock" /><span>{t('awaitingVerification')}</span></div>
                        ) : (
                          <>
                            <label className="claimed-field">
                              <small>{t('claimed')}</small>
                              <span>
                                <input
                                  type="number"
                                  inputMode="numeric"
                                  min={0}
                                  max={item.max}
                                  disabled={submitted}
                                  value={row.claimed ?? ''}
                                  onChange={(event) => setClaimed(item.id, item.max, event.target.value)}
                                />
                                <em>/ {item.max}</em>
                              </span>
                            </label>
                            <div className="crit-files">
                              {row.files.map((file, position) => (
                                <div className="crit-file" key={`${file.name}-${position}`}>
                                  <Icon name="document" />
                                  <span><strong>{file.name}</strong><small>{file.meta}</small></span>
                                  {!submitted && <button aria-label={`${t('remove')} ${file.name}`} onClick={() => removeFile(item.id, position)}><Icon name="trash" /></button>}
                                </div>
                              ))}
                              {!submitted && (
                                <button className="crit-add" onClick={() => requestFile(item.id)}>
                                  <Icon name="upload" />
                                  <span><strong>{t('addFile')}</strong><small>{t('fileLimits')}</small></span>
                                </button>
                              )}
                            </div>
                          </>
                        )}
                      </article>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>

          <aside className="contestant-aside">
            <section className="profile-card" id="profile">
              <div className="profile-card-heading">
                <span>GY</span>
                <div><h2>Gulnaz Yeskermes</h2><p>{t('position')}</p></div>
              </div>
              <dl>
                <div><dt>{t('institution')}</dt><dd>Astana IT University</dd></div>
                <div><dt>{t('school')}</dt><dd>Software Engineering</dd></div>
                <div><dt>{t('applicationId')}</dt><dd>AITU-260128</dd></div>
              </dl>
              <button className="profile-edit-button">{t('editProfile')} <Icon name="arrow" /></button>
            </section>

            <section className="score-card">
              <span>{t('prelim')}</span>
              <strong>{total}<small> / 100</small></strong>
              <ul>
                {([1, 2, 3] as const).map((block) => (
                  <li key={block}><span>{t('blockLine', { n: block })}</span><b>{blockTotal(block)} / {blockMax[block]}</b></li>
                ))}
              </ul>
              <p>{t('prelimNote')}</p>
            </section>

            <section className="submission-card">
              <span>{t('submission')}</span>
              <h2>{canSubmit || submitted ? t('readyToSubmit') : t('almostReady')}</h2>
              <p>{t('submitText')}</p>
              <ul>
                {checklist.map((entry) => (
                  <li key={entry.label} className={entry.done ? 'done' : ''}><Icon name={entry.done ? 'check' : 'clock'} /> {entry.label}</li>
                ))}
              </ul>
              <label className="declaration">
                <input type="checkbox" checked={declaration} disabled={submitted} onChange={(event) => setDeclaration(event.target.checked)} />
                <span>{t('declaration')}</span>
              </label>
              <button className="primary-action" disabled={!canSubmit} onClick={() => setSubmitted(true)}>{t('submit')} <Icon name="arrow" /></button>
              <small>{submitted ? t('submittedMsg') : t('submitHint')}</small>
            </section>

            <section className="contestant-help">
              <Icon name="info" />
              <div><strong>{t('guidelines')}</strong><p>{t('guidelinesText')}</p><a href="mailto:awards@aitu.edu.kz">{t('contactSupport')}</a></div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}

type Decision = 'confirmed' | 'partial' | 'rejected' | 'clarify'
type Evaluation = { decision: Decision | null; score: string; comment: string; deadline: string; saved: boolean; locked: boolean }

const emptyEvaluation: Evaluation = { decision: null, score: '', comment: '', deadline: '2026-12-15', saved: false, locked: false }
const decisions: { id: Decision; label: Key }[] = [
  { id: 'confirmed', label: 'decConfirmed' },
  { id: 'partial', label: 'decPartial' },
  { id: 'rejected', label: 'decRejected' },
  { id: 'clarify', label: 'decClarify' },
]

const block2 = criteria.filter((item) => item.block === 2)
const queue = applicants.filter((item) => item.expert === 'Dr. Sarah Mitchell')

const initialEvaluations: Record<string, Evaluation> = {
  'AITU-260128:II.1': { decision: 'confirmed', score: '10', comment: '', deadline: '2026-12-15', saved: true, locked: false },
  'AITU-260127:II.1': { decision: 'confirmed', score: '12', comment: '', deadline: '2026-12-15', saved: true, locked: true },
  'AITU-260127:II.2': { decision: 'partial', score: '24', comment: 'Two items lack an attribution page.', deadline: '2026-12-15', saved: true, locked: true },
  'AITU-260127:II.3': { decision: 'confirmed', score: '2', comment: '', deadline: '2026-12-15', saved: true, locked: true },
  'AITU-260127:II.4': { decision: 'confirmed', score: '3', comment: '', deadline: '2026-12-15', saved: true, locked: true },
  'AITU-260124:II.1': { decision: 'confirmed', score: '9', comment: '', deadline: '2026-12-15', saved: true, locked: false },
  'AITU-260124:II.2': { decision: 'clarify', score: '', comment: 'Please provide the publication page with the year.', deadline: '2026-12-15', saved: true, locked: false },
}

export function ExpertReviewWorkspace() {
  const { t, lang, date } = useI18n()
  const [selected, setSelected] = useState(queue[0].id)
  const [criterionId, setCriterionId] = useState('II.2')
  const [evaluations, setEvaluations] = useState(initialEvaluations)
  const [message, setMessage] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)

  const applicant = queue.find((item) => item.id === selected) ?? queue[0]
  const criterion = block2.find((item) => item.id === criterionId) ?? block2[0]
  const claimed = claims[applicant.id]?.[criterion.id] ?? 0
  const key = `${applicant.id}:${criterion.id}`
  const evaluation = evaluations[key] ?? emptyEvaluation

  const progress = (id: string) => block2.filter((item) => evaluations[`${id}:${item.id}`]?.saved).length
  const lockedAll = (id: string) => block2.every((item) => evaluations[`${id}:${item.id}`]?.locked)
  const statusOf = (id: string): Status => {
    if (lockedAll(id)) return 'reviewDone'
    if (block2.some((item) => evaluations[`${id}:${item.id}`]?.decision === 'clarify')) return 'clarification'
    return 'review'
  }

  const patch = (change: Partial<Evaluation>) => {
    setMessage(null)
    setEvaluations((current) => ({ ...current, [key]: { ...(current[key] ?? emptyEvaluation), ...change, saved: false } }))
  }

  const chooseDecision = (decision: Decision) => {
    if (evaluation.locked) return
    const score = decision === 'confirmed' ? String(claimed) : decision === 'rejected' ? '0' : decision === 'clarify' ? '' : evaluation.score
    patch({ decision, score })
  }

  const save = () => {
    if (!evaluation.decision) return
    const value = Number(evaluation.score)
    if (evaluation.decision !== 'clarify' && value > criterion.max) return setMessage({ tone: 'error', text: t('scoreTooHigh') })
    if (evaluation.decision === 'partial' && (evaluation.score === '' || value <= 0 || value >= claimed)) return setMessage({ tone: 'error', text: t('scoreAboveClaim') })
    if (evaluation.decision !== 'confirmed' && evaluation.comment.trim() === '') return setMessage({ tone: 'error', text: t('commentNeeded') })
    setEvaluations((current) => ({ ...current, [key]: { ...evaluation, saved: true } }))
    setMessage({ tone: 'ok', text: evaluation.decision === 'clarify' ? t('clarifySent') : t('evaluationSaved') })
  }

  const complete = () => {
    setEvaluations((current) => {
      const next = { ...current }
      block2.forEach((item) => {
        const id = `${applicant.id}:${item.id}`
        if (next[id]?.saved) next[id] = { ...next[id], locked: true }
      })
      return next
    })
    setMessage({ tone: 'ok', text: t('locked') })
  }

  const canComplete = progress(applicant.id) === block2.length && !lockedAll(applicant.id)

  const checks: Key[][] = [['ckFormat', 'ckFormatOk'], ['ckSize', 'ckSizeOk'], ['ckPeriod', 'ckPeriodOk'], ['ckApplies', 'ckAppliesOk'], ['ckRange', 'ckRangeOk']]
  const nominationName = (id: string) => nominations.find((item) => item.id === id)?.name ?? ''

  return (
    <WorkspaceShell
      role={t('roleExpert')}
      name="Dr. Sarah Mitchell"
      links={[
        { href: '#queue', label: t('navAssigned'), icon: 'document', active: true },
        { href: '#verification', label: t('navEvidence'), icon: 'upload' },
      ]}
    >
      <PageIntro
        eyebrow={t('expertEyebrow')}
        title={t('assignedTitle')}
        text={t('assignedText')}
        action={<div className="review-deadline"><Icon name="clock" /><span><small>{t('reviewDeadline')}</small><strong>{date(edition.reviewDeadline)}</strong></span></div>}
      />

      <section className="content-panel assigned-panel" id="queue">
        <div className="panel-toolbar">
          <div><h2>{t('assignedTitle')}</h2><p>{t('queue', { n: queue.length })}</p></div>
          <div className="table-filter"><Icon name="search" /><input aria-label={t('searchApplications')} placeholder={t('searchApplications')} /></div>
        </div>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead><tr><th>{t('colApplicant')}</th><th>{t('colNomination')}</th><th>{t('colBlock')}</th><th>{t('colMyProgress')}</th><th>{t('colStatus')}</th><th /></tr></thead>
            <tbody>
              {queue.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.name}</strong><small>{item.id}</small></td>
                  <td>{nominationName(item.nomination)}</td>
                  <td>{t('blockLine', { n: 2 })}</td>
                  <td><span className="mini-progress"><i><b style={{ width: `${(progress(item.id) / block2.length) * 100}%` }} /></i>{t('evaluated', { a: progress(item.id), b: block2.length })}</span></td>
                  <td><StatusBadge tone={statusTone(statusOf(item.id))}>{statusLabel[statusOf(item.id)][lang]}</StatusBadge></td>
                  <td><button className="table-action" onClick={() => { setSelected(item.id); setMessage(null); document.querySelector('#verification')?.scrollIntoView({ behavior: 'smooth' }) }}>{t('reviewBtn')} <Icon name="arrow" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="verification-section" id="verification">
        <div className="verification-title">
          <div><span>{t('detailed')}</span><h2>{criterion.id} · {criterion.title[lang]}</h2><p>{applicant.name} · {t('blockLine', { n: 2 })}</p></div>
          <StatusBadge tone="navy">{t('evaluated', { a: progress(applicant.id), b: block2.length })}</StatusBadge>
        </div>

        <div className="criterion-tabs" role="tablist">
          {block2.map((item) => (
            <button key={item.id} role="tab" aria-selected={item.id === criterion.id} className={item.id === criterion.id ? 'selected' : ''} onClick={() => { setCriterionId(item.id); setMessage(null) }}>
              {item.id}{evaluations[`${applicant.id}:${item.id}`]?.saved && <Icon name="check" />}
            </button>
          ))}
        </div>

        <div className="verification-grid">
          <div className="document-panel">
            <div className="document-toolbar">
              <div><Icon name="document" /><span><strong>study_guide_data_science_2023.pdf</strong><small>PDF · 4.8 MB · 36</small></span></div>
              <button>{t('openFull')}</button>
            </div>
            <div className="pdf-preview">
              <div className="pdf-page">
                <div className="pdf-logo">AITU</div>
                <small>SCHOOL OF SOFTWARE ENGINEERING</small>
                <h3>DATA SCIENCE<br />STUDY GUIDE</h3>
                <i />
                <p>Undergraduate Programme<br />Academic Year 2023–2024</p>
                <span>Prepared by<br /><strong>{applicant.name}</strong></span>
              </div>
              <div className="page-count">1 / 36</div>
            </div>
          </div>

          <div className="validation-column">
            <div className="ai-panel">
              <div className="ai-heading"><span><Icon name="shield" /></span><div><small>{t('checksSub')}</small><h3>{t('checksTitle')}</h3></div><StatusBadge tone="success">{t('checksPassed', { a: checks.length, b: checks.length })}</StatusBadge></div>
              <ul>
                {checks.map(([title, text]) => (
                  <li key={title}><Icon name="check" /><span><strong>{t(title)}</strong><small>{t(text)}</small></span></li>
                ))}
              </ul>
              <p className="ai-note"><Icon name="info" /> {t('checksNote')}</p>
            </div>

            <div className="review-form">
              <div className="claim-line"><span>{t('claimedScore')}</span><strong>{claimed} / {criterion.max}</strong></div>
              <fieldset className="decision-group" disabled={evaluation.locked}>
                <legend>{t('decision')}</legend>
                {decisions.map((item) => (
                  <button key={item.id} type="button" className={evaluation.decision === item.id ? `selected ${item.id}` : ''} onClick={() => chooseDecision(item.id)}>{t(item.label)}</button>
                ))}
              </fieldset>
              {evaluation.decision !== 'clarify' && (
                <label>{t('expertScore')} <span>{t('maxPoints', { n: criterion.max })}</span>
                  <input
                    className="score-input"
                    type="number"
                    min={0}
                    max={criterion.max}
                    value={evaluation.score}
                    disabled={evaluation.locked || evaluation.decision !== 'partial'}
                    onChange={(event) => patch({ score: event.target.value })}
                  />
                </label>
              )}
              {evaluation.decision === 'clarify' && (
                <label>{t('clarifyDeadline')}
                  <input className="score-input wide" type="date" value={evaluation.deadline} disabled={evaluation.locked} onChange={(event) => patch({ deadline: event.target.value })} />
                </label>
              )}
              <label>{t('comment')}
                <textarea value={evaluation.comment} disabled={evaluation.locked} onChange={(event) => patch({ comment: event.target.value })} />
              </label>
              {message && <p className={`form-message ${message.tone}`}>{message.text}</p>}
              {evaluation.locked && <p className="form-message ok">{t('locked')}</p>}
              <div className="review-actions">
                <button className="clarify-action" disabled={evaluation.locked || !evaluation.decision} onClick={save}>{t('saveEvaluation')}</button>
                <button className="confirm-action" disabled={!canComplete} onClick={complete}><Icon name="check" /> {t('completeReview')}</button>
              </div>
              <p className="hidden-note"><Icon name="info" /> {t('hiddenScores')}</p>
            </div>
          </div>
        </div>
      </section>
    </WorkspaceShell>
  )
}

export function AdministratorWorkspace() {
  const { t, lang, date } = useI18n()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [nominationFilter, setNominationFilter] = useState('all')
  const [rankNomination, setRankNomination] = useState('professor')
  const [exportOpen, setExportOpen] = useState(false)

  const nominationName = (id: string) => nominations.find((item) => item.id === id)?.name ?? ''
  const visible = applicants.filter((item) => (
    `${item.name} ${item.id} ${item.school}`.toLowerCase().includes(query.toLowerCase())
    && (statusFilter === 'all' || item.status === statusFilter)
    && (nominationFilter === 'all' || item.nomination === nominationFilter)
  ))
  const sum = (scores: number[]) => scores.reduce((a, b) => a + b, 0)

  const total = applicants.length
  const admitted = applicants.filter((item) => !['draft', 'submitted', 'check', 'returned'].includes(item.status)).length
  const done = applicants.filter((item) => item.status === 'reviewDone').length
  const clarifications = applicants.filter((item) => item.status === 'clarification').length
  const metrics: { label: Key; value: number; note: string; icon: IconName; tone: string }[] = [
    { label: 'mTotal', value: total, note: t('perWeek'), icon: 'document', tone: 'navy' },
    { label: 'mAdmitted', value: admitted, note: t('ofTotal', { p: Math.round((admitted / total) * 100) }), icon: 'check', tone: 'emerald' },
    { label: 'mDone', value: done, note: t('ofTotal', { p: Math.round((done / total) * 100) }), icon: 'shield', tone: 'blue' },
    { label: 'mOverdue', value: 1, note: t('needsAttention'), icon: 'clock', tone: 'burgundy' },
    { label: 'mClarify', value: clarifications, note: t('openRequests'), icon: 'info', tone: 'gold' },
    { label: 'mCommission', value: done, note: t('afterReview'), icon: 'users', tone: 'navy' },
  ]

  const ranking = applicants
    .filter((item) => item.nomination === rankNomination)
    .sort((a, b) => sum(b.scores) - sum(a.scores))
  const rankedNomination = nominations.find((item) => item.id === rankNomination)

  const audit = [
    { icon: 'check' as IconName, title: t('auditEligibility'), text: 'Amina Kassenova · AITU-260127', time: t('minAgo', { n: 12 }), oldValue: statusLabel.check[lang], newValue: statusLabel.admitted[lang], reason: '' },
    { icon: 'users' as IconName, title: t('auditAssigned'), text: 'Dr. Sarah Mitchell · AITU-260128 · II', time: t('minAgo', { n: 48 }), oldValue: '—', newValue: t('blockLine', { n: 2 }), reason: '' },
    { icon: 'shield' as IconName, title: t('auditReopened'), text: 'Amina Kassenova · AITU-260127 · II.2', time: t('hourAgo', { n: 1 }), oldValue: '24 / 30', newValue: '26 / 30', reason: t('auditReopenReason') },
    { icon: 'document' as IconName, title: t('auditFile'), text: 'AITU-260128 · study_guide_data_science_2023.pdf', time: t('hourAgo', { n: 2 }), oldValue: 'v1', newValue: 'v2', reason: '' },
    { icon: 'clock' as IconName, title: t('auditReminder'), text: 'AITU-260126', time: t('yesterday'), oldValue: '', newValue: '', reason: '' },
  ]

  return (
    <WorkspaceShell
      role={t('roleAdmin')}
      name="Amina Kassenova"
      links={[
        { href: '#overview', label: t('navOverview'), icon: 'grid' },
        { href: '#applications', label: t('navApplications'), icon: 'document', active: true },
        { href: '#ranking', label: t('navRanking'), icon: 'shield' },
        { href: '#criteria', label: t('navCriteria'), icon: 'upload' },
        { href: '#users', label: t('navExperts'), icon: 'users' },
        { href: '#stages', label: t('navSettings'), icon: 'clock' },
        { href: '#audit', label: t('navAudit'), icon: 'info' },
      ]}
    >
      <PageIntro
        eyebrow={t('adminEyebrow')}
        title={t('registryTitle')}
        text={t('registryText')}
        action={
          <div className="export-menu">
            <button className="primary-action export-button" onClick={() => setExportOpen(!exportOpen)} aria-expanded={exportOpen}>{t('exportRegistry')} <Icon name="arrow" /></button>
            {exportOpen && (
              <div className="export-options">
                <button onClick={() => setExportOpen(false)}>{t('exportXlsx')}</button>
                <button onClick={() => setExportOpen(false)}>{t('exportPdf')}</button>
              </div>
            )}
          </div>
        }
      />

      <section className="metric-cards six" id="overview">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <span className={`metric-icon ${metric.tone}`}><Icon name={metric.icon} /></span>
            <p>{t(metric.label)}</p><strong>{metric.value}</strong><small>{metric.note}</small>
          </div>
        ))}
      </section>

      <section className="content-panel registry-panel" id="applications">
        <div className="panel-toolbar registry-toolbar">
          <div><h2>{t('registry')}</h2><p>{t('showing', { a: visible.length, b: total })}</p></div>
          <div className="registry-filters">
            <div className="table-filter registry-search"><Icon name="search" /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label={t('searchByName')} placeholder={t('searchByName')} /></div>
            <select aria-label={t('allStatuses')} value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              <option value="all">{t('allStatuses')}</option>
              {(Object.keys(statusLabel) as Status[]).map((status) => <option key={status} value={status}>{statusLabel[status][lang]}</option>)}
            </select>
            <select aria-label={t('allNominations')} value={nominationFilter} onChange={(event) => setNominationFilter(event.target.value)}>
              <option value="all">{t('allNominations')}</option>
              {nominations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </div>
        </div>
        <div className="data-table-wrap">
          <table className="data-table registry-table">
            <thead><tr><th>{t('colId')}</th><th>{t('colApplicant')}</th><th>{t('colSchool')}</th><th>{t('colNomination')}</th><th>{t('colExpert')}</th><th>{t('colCompletion')}</th><th>{t('colTotal')}</th><th>{t('colStatus')}</th><th>{t('colUpdated')}</th><th /></tr></thead>
            <tbody>
              {visible.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.id}</strong></td>
                  <td><div className="applicant-cell"><span>{initials(item.name)}</span><strong>{item.name}</strong></div></td>
                  <td>{item.school}</td>
                  <td>{nominationName(item.nomination)}</td>
                  <td>{item.expert}</td>
                  <td><span className="mini-progress"><i><b style={{ width: `${item.completion}%` }} /></i>{item.completion}%</span></td>
                  <td><strong>{sum(item.scores)} / 100</strong></td>
                  <td><StatusBadge tone={statusTone(item.status)}>{statusLabel[item.status][lang]}</StatusBadge></td>
                  <td><span className="date-cell">{date(item.updated)}</span></td>
                  <td><button className="more-button" aria-label={item.name}>•••</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-footer"><span>{t('rows')} <b>10</b></span><span>1–{visible.length} / {total}</span><button disabled>‹</button><button disabled>›</button></div>
      </section>

      <section className="content-panel admin-section" id="ranking">
        <div className="panel-toolbar">
          <div><span className="section-eyebrow">{t('rankingEyebrow')}</span><h2>{t('rankingTitle')}</h2><p>{t('rankingNote')}</p></div>
        </div>
        <div className="criterion-tabs inline" role="tablist">
          {nominations.filter((item) => item.applicable).map((item) => (
            <button key={item.id} role="tab" aria-selected={item.id === rankNomination} className={item.id === rankNomination ? 'selected' : ''} onClick={() => setRankNomination(item.id)}>{item.name}</button>
          ))}
          <span className="pass-line">{t('passLine', { n: rankedNomination?.pass ?? 0 })}</span>
        </div>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead><tr><th>{t('colRank')}</th><th>{t('colApplicant')}</th><th>{t('colAcademic')}</th><th>{t('colMethod')}</th><th>{t('colOrg')}</th><th>{t('colTotal')}</th><th /></tr></thead>
            <tbody>
              {ranking.map((item, index) => (
                <tr key={item.id}>
                  <td><strong>{index + 1}</strong></td>
                  <td><strong>{item.name}</strong><small>{item.id}</small></td>
                  <td>{item.scores[0]}</td><td>{item.scores[1]}</td><td>{item.scores[2]}</td>
                  <td><strong>{sum(item.scores)}</strong></td>
                  <td><StatusBadge tone={sum(item.scores) >= (rankedNomination?.pass ?? 0) ? 'success' : 'error'}>{sum(item.scores) >= (rankedNomination?.pass ?? 0) ? t('passed') : t('belowPass')}</StatusBadge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-panel admin-section" id="criteria">
        <div className="panel-toolbar">
          <div><span className="section-eyebrow">{t('criteriaEyebrow')}</span><h2>{t('criteriaAdminTitle')}</h2><p>{t('criteriaAdminText')}</p></div>
          <button className="outline-action">{t('editCriteria')}</button>
        </div>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead><tr><th>{t('colCode')}</th><th>{t('colCriterion')}</th><th>{t('colMax')}</th><th>{t('colSource')}</th></tr></thead>
            <tbody>
              {([1, 2, 3] as const).map((block) => (
                <Fragment key={block}>
                  <tr className="block-row-head"><td colSpan={2}><strong>{t(`block${block}` as Key)}</strong></td><td><strong>{criteria.filter((item) => item.block === block).reduce((a, item) => a + item.max, 0)} / {blockMax[block]}</strong></td><td>{t('blockTotal')}</td></tr>
                  {criteria.filter((item) => item.block === block).map((item) => (
                    <tr key={item.id}><td><strong>{item.id}</strong></td><td>{item.title[lang]}</td><td>{item.max}</td><td>{sourceLabel[item.source][lang]}</td></tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-panel admin-section" id="users">
        <div className="panel-toolbar">
          <div><span className="section-eyebrow">{t('usersEyebrow')}</span><h2>{t('usersTitle')}</h2><p>{t('usersText')}</p></div>
          <button className="outline-action">{t('manageUsers')}</button>
        </div>
        <ul className="plain-list">
          <li><Icon name="users" /> {t('expertsRow1')}</li>
          <li><Icon name="users" /> {t('expertsRow2')}</li>
        </ul>
      </section>

      <section className="content-panel admin-section" id="stages">
        <div className="panel-toolbar">
          <div><span className="section-eyebrow">{t('stagesEyebrow')}</span><h2>{t('stagesTitle')}</h2></div>
          <button className="outline-action">{t('editStages')}</button>
        </div>
        <ol className="stage-list">
          {stages.map((stage, index) => (
            <li key={stage.key}><small>0{index + 1}</small><strong>{t(stage.key as Key)}</strong><span>{stage.from === stage.to ? date(stage.from) : `${date(stage.from)} — ${date(stage.to)}`}</span></li>
          ))}
        </ol>
      </section>

      <section className="audit-section" id="audit">
        <div className="audit-heading"><div><span>{t('auditEyebrow')}</span><h2>{t('auditTitle')}</h2></div><button>{t('viewLog')} <Icon name="arrow" /></button></div>
        <div className="audit-list">
          {audit.map((entry) => (
            <details key={entry.title} className="audit-entry">
              <summary>
                <span className="audit-icon"><Icon name={entry.icon} /></span>
                <p><strong>{entry.title}</strong><small>{entry.text}</small></p>
                <time>{entry.time}</time>
              </summary>
              {(entry.oldValue || entry.newValue) && (
                <dl className="audit-detail">
                  <div><dt>{t('oldValue')}</dt><dd>{entry.oldValue}</dd></div>
                  <div><dt>{t('newValue')}</dt><dd>{entry.newValue}</dd></div>
                  {entry.reason && <div><dt>{t('reason')}</dt><dd>{entry.reason}</dd></div>}
                </dl>
              )}
            </details>
          ))}
        </div>
      </section>
    </WorkspaceShell>
  )
}
