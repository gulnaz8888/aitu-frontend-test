import { useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router'

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

function WorkspaceShell({
  role,
  name,
  active,
  children,
}: {
  role: string
  name: string
  active: string
  children: ReactNode
}) {
  return (
    <div className="workspace-shell">
      <header className="workspace-header">
        <Link className="workspace-brand" to="/">
            <img 
              src="/logo-trophy.png" 
              alt="AITU Teaching Excellence Awards" 
              className="w-12 h-12 object-contain bg-transparent border-0" 
            />
          <span><strong>AITU</strong><small>EXCELLENCE AWARDS</small></span>
        </Link>
        <div className="workspace-header-actions">
          <button className="header-icon-button" aria-label="Notifications"><Icon name="bell" /><i /></button>
          <div className="user-chip">
            <span>{name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>
            <div><strong>{name}</strong><small>{role}</small></div>
            <Icon name="chevron" />
          </div>
        </div>
      </header>
      <div className="workspace-layout">
        <aside className="workspace-sidebar">
          <div className="sidebar-label">WORKSPACE</div>
          <nav>
            <a className={active === 'overview' ? 'active' : ''} href="#overview"><Icon name="grid" /> Overview</a>
            <a className={active === 'application' ? 'active' : ''} href="#application"><Icon name="document" /> {role === 'Administrator' ? 'Applications' : role === 'Expert Reviewer' ? 'Assigned Reviews' : 'My Application'}</a>
            <a href="#documents"><Icon name="upload" /> {role === 'Administrator' ? 'Documents' : 'Evidence Files'}</a>
            {role === 'Administrator' && <a href="#reviewers"><Icon name="users" /> Reviewers</a>}
          </nav>
          <div className="sidebar-bottom">
            <div className="edition-panel"><small>CURRENT EDITION</small><strong>2026 Global Awards</strong><span>Applications open</span></div>
            <Link to="/"><Icon name="logout" /> Return to website</Link>
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

function StatusBadge({ tone, children }: { tone: 'success' | 'warning' | 'error' | 'navy'; children: ReactNode }) {
  return <span className={`status-badge ${tone}`}><i />{children}</span>
}

type EvidenceItem = {
  id: string
  block: string
  title: string
  guidance: string
  points: number
  file?: string
  fileMeta?: string
}

const initialEvidence: EvidenceItem[] = [
  { id: '1.1', block: 'Block I', title: 'Academic qualifications', guidance: 'Degree certificates and professional credentials', points: 3, file: 'academic_qualifications.pdf', fileMeta: 'PDF · 2.4 MB · 14 May 2025' },
  { id: '1.2', block: 'Block I', title: 'Teaching experience', guidance: 'Verified teaching record and appointment history', points: 5, file: 'teaching_experience_record.pdf', fileMeta: 'PDF · 1.8 MB · 14 May 2025' },
  { id: '2.1', block: 'Block II', title: 'Course and curriculum design', guidance: 'Curricula, syllabi, or course development evidence', points: 5, file: 'curriculum_design_portfolio.pdf', fileMeta: 'PDF · 6.1 MB · 13 May 2025' },
  { id: '2.2', block: 'Block II', title: 'Innovative teaching practice', guidance: 'Case study with evidence of measurable outcomes', points: 5, file: 'innovation_case_study.pdf', fileMeta: 'PDF · 4.7 MB · 13 May 2025' },
  { id: '2.3', block: 'Block II', title: 'Published study guides', guidance: 'Published learning materials with clear attribution', points: 3, file: 'study_guide_data_science_2023.pdf', fileMeta: 'PDF · 4.8 MB · 14 May 2025' },
  { id: '3.1', block: 'Block III', title: 'Research and scholarly impact', guidance: 'Publication record, citations, and academic service', points: 8 },
]

export function ContestantWorkspace() {
  const [evidence, setEvidence] = useState(initialEvidence)
  const [activeUpload, setActiveUpload] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const uploadedCount = evidence.filter((item) => item.file).length

  const requestFile = (criterionId: string) => {
    setActiveUpload(criterionId)
    fileInputRef.current?.click()
  }

  const handleFile = (file?: File) => {
    if (!file || !activeUpload) return
    const size = file.size < 1024 * 1024
      ? `${Math.max(1, Math.round(file.size / 1024))} KB`
      : `${(file.size / (1024 * 1024)).toFixed(1)} MB`
    setEvidence((items) => items.map((item) => (
      item.id === activeUpload
        ? { ...item, file: file.name, fileMeta: `${file.name.split('.').pop()?.toUpperCase() || 'FILE'} · ${size} · Uploaded today` }
        : item
    )))
    setActiveUpload(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const removeFile = (criterionId: string) => {
    setEvidence((items) => items.map((item) => (
      item.id === criterionId ? { ...item, file: undefined, fileMeta: undefined } : item
    )))
  }

  return (
    <div className="contestant-dashboard">
      <header className="workspace-header">
        <Link className="workspace-brand" to="/">
        <img 
          src="/logo-trophy.png" 
          alt="AITU Teaching Excellence Awards" 
          className="w-12 h-12 object-contain bg-transparent border-0" 
        />
          <span><strong>AITU</strong><small>EXCELLENCE AWARDS</small></span>
        </Link>
        <nav className="contestant-nav" aria-label="Contestant workspace">
          <a href="#overview">Overview</a>
          <a className="active" href="#evidence">Evidence</a>
          <a href="#profile">Profile</a>
        </nav>
        <div className="workspace-header-actions">
          <button className="header-icon-button" aria-label="Notifications"><Icon name="bell" /><i /></button>
          <div className="user-chip">
            <span>GY</span>
            <div><strong>Gulnaz Yeskermes</strong><small>Contestant</small></div>
            <Icon name="chevron" />
          </div>
        </div>
      </header>

      <main className="contestant-main">
        <section className="contestant-intro" id="overview">
          <div>
            <h1>Participant Portal</h1>
          </div>
          <div className="contestant-intro-actions">
            <span>Last saved today at 10:42</span>
            <button className="outline-action">Save changes</button>
          </div>
        </section>

        <section className="status-overview" aria-label="Application status">
          <div className="status-primary">
            <span className="status-icon warning"><Icon name="clock" /></span>
            <div><small>APPLICATION STATUS</small><strong>In progress</strong><p>One required criterion remains</p></div>
          </div>
          <div><small>EVIDENCE FILES</small><strong>{uploadedCount} of {evidence.length}</strong><p>Required documents added</p></div>
          <div><small>PROFILE</small><strong>Complete</strong><p>Details verified</p></div>
          <div><small>SUBMISSION DEADLINE</small><strong>31 May 2026</strong><p>16 days remaining</p></div>
        </section>

        <div className="contestant-grid">
          <section className="evidence-manager" id="evidence">
            <div className="evidence-heading">
              <div>
                <span>ASSESSMENT EVIDENCE</span>
                <h2>Required criteria</h2>
                <p>Upload one clear document for every criterion. Files remain editable until submission.</p>
              </div>
              <StatusBadge tone={uploadedCount === evidence.length ? 'success' : 'warning'}>
                {uploadedCount} of {evidence.length} ready
              </StatusBadge>
            </div>

            <input
              ref={fileInputRef}
              className="visually-hidden"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(event) => handleFile(event.target.files?.[0])}
            />

            <div className="criteria-list">
              {evidence.map((item, index) => {
                const showBlock = index === 0 || evidence[index - 1].block !== item.block
                return (
                  <div className="criterion-group" key={item.id}>
                    {showBlock && (
                      <div className="criterion-group-label">
                        <span>{item.block}</span>
                        <i />
                      </div>
                    )}
                    <article className={`evidence-row ${item.file ? 'has-file' : 'needs-file'}`}>
                      <div className="criterion-number">{item.id}</div>
                      <div className="criterion-description">
                        <div><h3>{item.title}</h3><span>Up to {item.points} points</span></div>
                        <p>{item.guidance}</p>
                      </div>
                      {item.file ? (
                        <div className="evidence-file">
                          <span className="evidence-file-icon"><Icon name="document" /></span>
                          <div><strong>{item.file}</strong><small>{item.fileMeta}</small></div>
                        </div>
                      ) : (
                        <button className="upload-file-button" onClick={() => requestFile(item.id)}>
                          <Icon name="upload" />
                          <span><strong>Upload evidence</strong><small>PDF, DOCX, JPG or PNG · Max 20 MB</small></span>
                        </button>
                      )}
                      <div className="evidence-row-actions">
                        {item.file ? (
                          <>
                            <button onClick={() => requestFile(item.id)}>Replace</button>
                            <button className="remove-file" aria-label={`Remove ${item.file}`} onClick={() => removeFile(item.id)}><Icon name="trash" /></button>
                          </>
                        ) : (
                          <StatusBadge tone="warning">Required</StatusBadge>
                        )}
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>
          </section>

          <aside className="contestant-aside">
            <section className="profile-card" id="profile">
              <div className="profile-card-heading">
                <span>GY</span>
                <div><h2>Gulnaz Yeskermes</h2><p>Associate Professor</p></div>
              </div>
              <dl>
                <div><dt>Institution</dt><dd>Astana IT University</dd></div>
                <div><dt>Department</dt><dd>Software Engineering</dd></div>
                <div><dt>Application ID</dt><dd>AITU-250128</dd></div>
              </dl>
              <button className="profile-edit-button">Edit profile <Icon name="arrow" /></button>
            </section>

            <section className="submission-card">
              <span>SUBMISSION</span>
              <h2>Almost ready</h2>
              <p>Add the remaining evidence file, review your declaration, and submit your application.</p>
              <ul>
                <li className="done"><Icon name="check" /> Profile information</li>
                <li className="done"><Icon name="check" /> Five evidence files</li>
                <li><Icon name="clock" /> One evidence file</li>
                <li><Icon name="clock" /> Declaration and consent</li>
              </ul>
              <button className="primary-action" disabled>Submit application <Icon name="arrow" /></button>
              <small>Submission unlocks when all requirements are complete.</small>
            </section>

            <section className="contestant-help">
              <Icon name="info" />
              <div><strong>Evidence guidelines</strong><p>Use concise, relevant documents that clearly show your contribution.</p><a href="mailto:awards@aitu.edu.kz">Contact support</a></div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}

const assignedApplications = [
  { teacher: 'Teacher 1: Gulnaz Yeskermes', block: 'Block II', progress: '5 / 6', status: 'Ready for Review' },
  { teacher: 'Teacher 2: Aigerim Sarsembayeva', block: 'Block I', progress: '4 / 4', status: 'Ready for Review' },
  { teacher: 'Teacher 3: Daniyar Akhmetov', block: 'Block III', progress: '3 / 5', status: 'Awaiting Files' },
]

export function ExpertReviewWorkspace() {
  const [selectedTeacher, setSelectedTeacher] = useState(assignedApplications[0].teacher)

  return (
    <WorkspaceShell role="Expert Reviewer" name="Dr. Sarah Mitchell" active="application">
      <PageIntro
        eyebrow="EXPERT PANEL · REVIEW CYCLE 02"
        title="Assigned Applications"
        text="Review submitted evidence independently against the published AITU assessment framework."
        action={<div className="review-deadline"><Icon name="clock" /><span><small>REVIEW DEADLINE</small><strong>28 May 2025</strong></span></div>}
      />

      <section className="content-panel assigned-panel" id="overview">
        <div className="panel-toolbar">
          <div><h2>Assigned applications</h2><p>3 applications in your current review queue</p></div>
          <div className="table-filter"><Icon name="search" /><input aria-label="Search assigned applications" placeholder="Search applications" /></div>
        </div>
        <div className="data-table-wrap">
          <table className="data-table">
            <thead><tr><th>APPLICANT</th><th>ASSIGNED BLOCK</th><th>UPLOAD PROGRESS</th><th>STATUS</th><th /></tr></thead>
            <tbody>
              {assignedApplications.map((application) => (
                <tr key={application.teacher}>
                  <td><strong>{application.teacher}</strong><small>Astana IT University</small></td>
                  <td>{application.block}</td>
                  <td><span className="mini-progress"><i><b style={{ width: `${parseInt(application.progress) / parseInt(application.progress.slice(-1)) * 100}%` }} /></i>{application.progress}</span></td>
                  <td><StatusBadge tone={application.status === 'Ready for Review' ? 'success' : 'warning'}>{application.status}</StatusBadge></td>
                  <td><button className="table-action" onClick={() => { setSelectedTeacher(application.teacher); document.querySelector('#verification')?.scrollIntoView({ behavior: 'smooth' }) }}>Review <Icon name="arrow" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="verification-section" id="verification">
        <div className="verification-title">
          <div><span>DETAILED VERIFICATION</span><h2>Criterion 2.3 · Published study guides</h2><p>{selectedTeacher} · Block II evidence review</p></div>
          <StatusBadge tone="navy">Evidence 5 of 6</StatusBadge>
        </div>

        <div className="verification-grid">
          <div className="document-panel">
            <div className="document-toolbar">
              <div><Icon name="document" /><span><strong>study_guide_data_science_2023.pdf</strong><small>PDF · 4.8 MB · 36 pages</small></span></div>
              <button>Open full screen</button>
            </div>
            <div className="pdf-preview">
              <div className="pdf-page">
                <div className="pdf-logo">AITU</div>
                <small>SCHOOL OF SOFTWARE ENGINEERING</small>
                <h3>DATA SCIENCE<br />STUDY GUIDE</h3>
                <i />
                <p>Undergraduate Programme<br />Academic Year 2023–2024</p>
                <span>Prepared by<br /><strong>Gulnaz Yeskermes</strong></span>
              </div>
              <div className="page-count">1 / 36</div>
            </div>
          </div>

          <div className="validation-column">
            <div className="ai-panel">
              <div className="ai-heading"><span><Icon name="shield" /></span><div><small>AI-ASSISTED VALIDATION</small><h3>Evidence integrity check</h3></div><StatusBadge tone="success">Passed</StatusBadge></div>
              <div className="validation-score"><span>94<small>%</small></span><div><strong>High confidence</strong><p>Document content aligns with the selected criterion.</p></div></div>
              <ul>
                <li><Icon name="check" /><span><strong>Document authenticity</strong><small>No irregularities detected</small></span></li>
                <li><Icon name="check" /><span><strong>Criterion relevance</strong><small>Strong match to Criterion 2.3</small></span></li>
                <li><Icon name="check" /><span><strong>Author verification</strong><small>Applicant name found on page 1</small></span></li>
                <li className="warning-item"><Icon name="info" /><span><strong>Date confirmation</strong><small>Publication year verified as 2023</small></span></li>
              </ul>
              <p className="ai-note"><Icon name="info" /> AI findings are advisory. The final assessment remains the responsibility of the expert reviewer.</p>
            </div>

            <div className="review-form">
              <label>Reviewer score <span>Maximum 3 points</span>
                <div className="score-picker"><button>0</button><button>1</button><button>2</button><button className="selected">3</button></div>
              </label>
              <label>Reviewer note<textarea defaultValue="The submitted study guide is complete, clearly attributed, and directly relevant to the criterion. Maximum score recommended." /></label>
              <div className="review-actions">
                <button className="clarify-action">Request Clarification</button>
                <button className="confirm-action"><Icon name="check" /> Confirm Evidence</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WorkspaceShell>
  )
}

const applicants = [
  { id: 'AITU-250128', name: 'Gulnaz Yeskermes', department: 'Computational Sciences', completion: 82, status: 'In Review' },
  { id: 'AITU-250127', name: 'Aigerim Sarsembayeva', department: 'General Education', completion: 100, status: 'Eligible' },
  { id: 'AITU-250126', name: 'Daniyar Akhmetov', department: 'Cybersecurity', completion: 64, status: 'Incomplete' },
  { id: 'AITU-250125', name: 'Mariya Kim', department: 'Business & Management', completion: 100, status: 'Eligible' },
  { id: 'AITU-250124', name: 'Timur Nurgaliyev', department: 'Software Engineering', completion: 94, status: 'In Review' },
]

export function AdministratorWorkspace() {
  const [query, setQuery] = useState('')
  const visibleApplicants = applicants.filter((applicant) => `${applicant.name} ${applicant.id} ${applicant.department}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <WorkspaceShell role="Administrator" name="Amina Kassenova" active="application">
      <PageIntro
        eyebrow="ADMINISTRATION · 2025 GLOBAL EDITION"
        title="Application Registry"
        text="Monitor application eligibility, completion, and review activity across the awards programme."
        action={<button className="primary-action export-button">Export registry <Icon name="arrow" /></button>}
      />

      <section className="metric-cards" id="overview">
        <div><span className="metric-icon navy"><Icon name="document" /></span><p>TOTAL APPLICATIONS</p><strong>128</strong><small>+14 this week</small></div>
        <div><span className="metric-icon emerald"><Icon name="check" /></span><p>ELIGIBLE</p><strong>104</strong><small>81.3% of total</small></div>
        <div><span className="metric-icon blue"><Icon name="shield" /></span><p>COMPLETED</p><strong>76</strong><small>59.4% of total</small></div>
        <div><span className="metric-icon burgundy"><Icon name="clock" /></span><p>OVERDUE</p><strong>8</strong><small>Requires attention</small></div>
      </section>

      <section className="content-panel registry-panel" id="application">
        <div className="panel-toolbar registry-toolbar">
          <div><h2>Applicant registry</h2><p>Showing {visibleApplicants.length} of 128 applications</p></div>
          <div className="registry-filters">
            <div className="table-filter registry-search"><Icon name="search" /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search applicants" placeholder="Search by name or ID" /></div>
            <select aria-label="Filter by status"><option>All statuses</option><option>Eligible</option><option>In Review</option><option>Incomplete</option></select>
            <select aria-label="Filter by block"><option>All blocks</option><option>Block I</option><option>Block II</option><option>Block III</option></select>
          </div>
        </div>
        <div className="data-table-wrap">
          <table className="data-table registry-table">
            <thead><tr><th>APPLICATION ID</th><th>APPLICANT</th><th>DEPARTMENT</th><th>COMPLETION</th><th>STATUS</th><th>LAST UPDATED</th><th /></tr></thead>
            <tbody>
              {visibleApplicants.map((applicant, index) => (
                <tr key={applicant.id}>
                  <td><strong>{applicant.id}</strong></td>
                  <td><div className="applicant-cell"><span>{applicant.name.split(' ').map((part) => part[0]).join('')}</span><strong>{applicant.name}</strong></div></td>
                  <td>{applicant.department}</td>
                  <td><span className="mini-progress"><i><b style={{ width: `${applicant.completion}%` }} /></i>{applicant.completion}%</span></td>
                  <td><StatusBadge tone={applicant.status === 'Eligible' ? 'success' : applicant.status === 'Incomplete' ? 'error' : 'warning'}>{applicant.status}</StatusBadge></td>
                  <td><span className="date-cell">{14 - index} May 2025<small>{10 + index}:24 AM</small></span></td>
                  <td><button className="more-button" aria-label={`Actions for ${applicant.name}`}>•••</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-footer"><span>Rows per page: <b>10</b></span><span>1–5 of 128</span><button disabled>‹</button><button>›</button></div>
      </section>

      <section className="audit-section">
        <div className="audit-heading"><div><span>SYSTEM ACTIVITY</span><h2>Audit Log</h2></div><button>View complete log <Icon name="arrow" /></button></div>
        <div className="audit-list">
          <div><span className="audit-icon"><Icon name="check" /></span><p><strong>Eligibility status updated</strong><small>Amina Kassenova marked AITU-250127 as eligible</small></p><time>12 minutes ago</time></div>
          <div><span className="audit-icon blue"><Icon name="users" /></span><p><strong>Reviewer assigned</strong><small>Dr. Sarah Mitchell assigned to Gulnaz Yeskermes · Block II</small></p><time>48 minutes ago</time></div>
          <div><span className="audit-icon gold"><Icon name="document" /></span><p><strong>Evidence file replaced</strong><small>Applicant AITU-250128 uploaded study_guide_data_science_2023.pdf</small></p><time>2 hours ago</time></div>
          <div><span className="audit-icon burgundy"><Icon name="clock" /></span><p><strong>Deadline reminder issued</strong><small>Automated reminder sent to 8 overdue applicants</small></p><time>Yesterday, 4:30 PM</time></div>
        </div>
      </section>
    </WorkspaceShell>
  )
}
