import { useSyncExternalStore } from 'react'
import type { Lang } from './criteria'

const en = {
  navAbout: 'ABOUT', navNominations: 'NOMINATIONS', navTimeline: 'TIMELINE', navResults: 'RESULTS', navContacts: 'CONTACTS',
  login: 'Log In', apply: 'Submit Application', viewCriteria: 'View Criteria', discover: 'DISCOVER THE AWARDS',
  eyebrow: 'INTERNAL ACADEMIC RECOGNITION',
  logoAlt: 'AITU Teaching Excellence Awards',
  navLogoAria: 'AITU Teaching Excellence Awards',
  heroLine1: 'AITU TEACHING',
  heroHighlight: 'EXCELLENCE',
  heroLine2: 'AWARDS',
  aboutEyebrow: 'ABOUT THE AWARDS', aboutTitle: 'Recognising the best teaching at Astana IT University',
  aboutText: 'The competition digitalises the full cycle: application, expert review, automatic scoring, commission decision and appeal. Every action is recorded and the final decision always belongs to the Competition Commission.',
  statPoints: 'maximum points', statBlocks: 'assessment blocks', statNominations: 'nominations',
  block1: 'Academic activity', block2: 'Teaching and methodological activity', block3: 'Organisational and methodological activity',
  nomEyebrow: 'NOMINATIONS', nomTitle: 'Four ways to be recognised', passMark: 'Pass mark', pointsShort: 'points', noApplication: 'No application needed',
  timeEyebrow: 'TIMELINE', timeTitle: 'From application to results',
  stageApplications: 'Applications', stageCheck: 'Completeness check', stageExpert: 'Expert review', stageCommission: 'Competition Commission', stageAppeal: 'Appeals', stageResults: 'Results published',
  resultsEyebrow: 'RESULTS', resultsTitle: 'Winners are announced after the Commission decides',
  resultsText: 'Preliminary results become visible to participants at the appeal stage. Final results are published only after the Competition Commission confirms them.',
  portalsEyebrow: 'AWARDS PLATFORM', portalsTitle: 'One platform, three workspaces',
  portalsText: 'Sign in once with your corporate account. The platform opens the workspace that matches your role.',
  portalContestant: 'Participant', portalContestantText: 'Choose a nomination, enter claimed points, attach evidence and track every status of your application.',
  portalExpert: 'Expert', portalExpertText: 'Evaluate only the assigned block and applicants, confirm evidence or request clarification.',
  portalAdmin: 'Administrator', portalAdminText: 'Configure criteria and stages, assign experts, monitor progress and export rankings.',
  enterContestant: 'Open participant workspace', enterExpert: 'Open expert workspace', enterAdmin: 'Open administrator workspace',
  footerText: 'Recognising distinction in teaching, research, and academic leadership.', footerRights: '© 2026 AITU AWARDS',
  previewOverview: 'APPLICATION OVERVIEW', previewWelcome: 'Welcome back', previewProgress: 'Application progress', previewNext: 'NEXT STEP', previewNextValue: 'Add evidence', previewStatus: 'STATUS', previewStatusValue: 'Draft',
  previewExpert: 'EXPERT DASHBOARD', previewAssigned: 'Assigned reviews', previewReview: 'Review',
  previewControl: 'CONTROL CENTER', previewOverviewTitle: 'Competition overview', previewApplications: 'APPLICATIONS', previewAdmitted: 'ADMITTED', previewOverdue: 'OVERDUE',

  workspace: 'WORKSPACE', notifications: 'Notifications', returnToWebsite: 'Return to website', edition: 'CURRENT EDITION', editionName: 'Awards 2026', applicationsOpen: 'Applications open',
  navOverview: 'Overview', navMyApplication: 'My application', navEvidence: 'Evidence', navProfile: 'Profile', navAssigned: 'Assigned reviews', navApplications: 'Applications', navRanking: 'Ranking',
  navCriteria: 'Criteria', navExperts: 'Experts & assignments', navSettings: 'Competition stages', navUsers: 'Users & roles', navAudit: 'Audit log',
  roleContestant: 'Contestant', roleExpert: 'Expert', roleAdmin: 'Administrator',
  search: 'Search', replace: 'Replace', remove: 'Remove', required: 'Required', cancel: 'Cancel', daysLeft: '{n} days remaining', today: 'Last saved today at {t}', saveChanges: 'Save changes', saved: 'Saved',

  portalTitle: 'Participant Portal', statusApplication: 'APPLICATION STATUS', statusFilled: 'CRITERIA READY', profileLabel: 'PROFILE', profileComplete: 'Complete', profileVerified: 'Details verified', deadline: 'SUBMISSION DEADLINE',
  oneRequired: 'Required criteria remain', allRequiredDone: 'All required criteria are ready',
  step1: 'STEP 1 · NOMINATION', chooseNomination: 'Choose your nomination', nominationHint: 'Only one nomination per competition period.',
  step2: 'STEP 2 · ASSESSMENT', criteriaTitle: 'Assessment criteria', criteriaText: 'Enter claimed points and attach supporting documents to each criterion. Files remain editable until submission.',
  ofReady: '{a} of {b} ready', claimed: 'Claimed points', maxShort: 'max', verifiedBy: 'Verified by', awaitingVerification: 'Awaiting verification', addFile: 'Add file', fileLimits: 'PDF, DOCX, XLSX, JPG or PNG · max 20 MB', uploadedToday: 'Uploaded today',
  prelim: 'Preliminary score', prelimNote: 'Only confirmed points count in the final result.', blockLine: 'Block {n}',
  submission: 'SUBMISSION', almostReady: 'Almost ready', readyToSubmit: 'Ready to submit', submitText: 'Complete every required criterion, accept the declaration and submit your application.',
  chkNomination: 'Nomination selected', chkCriteria: 'Required criteria completed', chkDeclaration: 'Declaration and consent',
  declaration: 'I confirm that the information is accurate and consent to its verification.', submit: 'Submit application', submitHint: 'Submission unlocks when all requirements are complete.', submittedMsg: 'Application submitted. Status: Submitted.',
  guidelines: 'Evidence guidelines', guidelinesText: 'Use concise, relevant documents that clearly show your contribution.', contactSupport: 'Contact support', institution: 'Institution', school: 'School', applicationId: 'Application ID', editProfile: 'Edit profile', position: 'Associate Professor',

  expertEyebrow: 'EXPERT PANEL · BLOCK II', assignedTitle: 'Assigned Applications', assignedText: 'Review only the block and applicants assigned to you by the administrator.', reviewDeadline: 'REVIEW DEADLINE',
  queue: '{n} applications in your queue', searchApplications: 'Search applications', colApplicant: 'APPLICANT', colNomination: 'NOMINATION', colBlock: 'ASSIGNED BLOCK', colMyProgress: 'MY PROGRESS', colStatus: 'STATUS', evaluated: '{a} / {b} evaluated',
  reviewBtn: 'Review', detailed: 'DETAILED REVIEW', criterionLabel: 'Criterion', claimedScore: 'Claimed by applicant', decision: 'Expert decision',
  decConfirmed: 'Confirmed', decPartial: 'Partially confirmed', decRejected: 'Not confirmed', decClarify: 'Needs clarification',
  expertScore: 'Expert score', maxPoints: 'Maximum {n} points', comment: 'Expert comment', commentNeeded: 'A comment is required when the score is reduced or the evidence is not confirmed.',
  scoreTooHigh: 'The score cannot exceed the criterion maximum.', scoreAboveClaim: 'Partial score must be between 0 and the claimed points.', clarifyDeadline: 'Response deadline', clarifySent: 'Clarification request sent to the applicant.',
  saveEvaluation: 'Save evaluation', completeReview: 'Complete review', evaluationSaved: 'Evaluation saved.', locked: 'Review completed and locked. Any later change is recorded in the audit log.',
  hiddenScores: 'Scores of other experts are hidden until you complete your own review.', openFull: 'Open full screen',
  checksTitle: 'Automated checks', checksSub: 'Rule-based verification', checksPassed: '{a} of {b} passed',
  ckFormat: 'File format', ckFormatOk: 'PDF, within the allowed formats', ckSize: 'File size', ckSizeOk: '4.8 MB · limit 20 MB', ckPeriod: 'Accounting period', ckPeriodOk: 'Published in 2023, within the period',
  ckApplies: 'Criterion applicability', ckAppliesOk: 'Applies to the selected nomination', ckRange: 'Claimed score range', ckRangeOk: 'Within the criterion maximum',
  checksNote: 'Checks are deterministic. Scores are assigned only by the expert.',

  adminEyebrow: 'ADMINISTRATION · EDITION 2026', registryTitle: 'Application Registry', registryText: 'Monitor eligibility, completion, expert review and ranking across the awards programme.',
  exportRegistry: 'Export', exportXlsx: 'Excel (.xlsx)', exportPdf: 'PDF',
  mTotal: 'TOTAL APPLICATIONS', mAdmitted: 'ADMITTED', mDone: 'REVIEWS COMPLETED', mOverdue: 'OVERDUE', mClarify: 'CLARIFICATIONS', mCommission: 'READY FOR COMMISSION',
  perWeek: '+2 this week', ofTotal: '{p}% of total', needsAttention: 'Requires attention', openRequests: 'Open requests', afterReview: 'After expert review',
  registry: 'Applicant registry', showing: 'Showing {a} of {b} applications', searchByName: 'Search by name or ID', allStatuses: 'All statuses', allNominations: 'All nominations',
  colId: 'APPLICATION ID', colSchool: 'SCHOOL', colExpert: 'EXPERT', colCompletion: 'COMPLETION', colTotal: 'TOTAL', colUpdated: 'LAST UPDATED', rows: 'Rows per page:',
  rankingEyebrow: 'RANKING', rankingTitle: 'Ranking by nomination', rankingNote: 'The final decision on winners is made by the Competition Commission. The system never assigns the winner status.',
  colRank: '#', colAcademic: 'ACADEMIC /40', colMethod: 'TEACHING /50', colOrg: 'ORG. /10', passed: 'Passed', belowPass: 'Below pass mark', passLine: 'Pass mark: {n}',
  criteriaEyebrow: 'CONFIGURATION', criteriaAdminTitle: 'Scoring criteria', criteriaAdminText: 'Stored as configuration. Edited by the administrator without changing code.', colCode: 'CODE', colCriterion: 'CRITERION', colMax: 'MAX', colSource: 'CONFIRMED BY', blockTotal: 'Block total', editCriteria: 'Edit criteria',
  stagesEyebrow: 'COMPETITION STAGES', stagesTitle: 'Schedule', editStages: 'Edit dates',
  usersEyebrow: 'ACCESS', usersTitle: 'Users, roles and assignments', usersText: 'Experts see only the assigned block, criteria and applicants.', manageUsers: 'Manage users',
  expertsRow1: 'Dr. Sarah Mitchell · Block II · all admitted applicants', expertsRow2: 'Prof. Aidos Bekov · Block I · selected applicants',
  auditEyebrow: 'SYSTEM ACTIVITY', auditTitle: 'Audit Log', viewLog: 'View complete log', oldValue: 'Old value', newValue: 'New value', reason: 'Reason',
  auditEligibility: 'Eligibility status updated', auditAssigned: 'Expert assigned', auditReopened: 'Completed review reopened', auditFile: 'Evidence file replaced', auditReminder: 'Deadline reminder issued',
  auditReopenReason: 'Applicant provided a corrected document', minAgo: '{n} minutes ago', hourAgo: '{n} hours ago', yesterday: 'Yesterday',
}

export type Key = keyof typeof en

const ru: Record<string, string> = {
  navAbout: 'О КОНКУРСЕ', navNominations: 'НОМИНАЦИИ', navTimeline: 'СРОКИ', navResults: 'РЕЗУЛЬТАТЫ', navContacts: 'КОНТАКТЫ',
  login: 'Войти', apply: 'Подать заявку', viewCriteria: 'Критерии', discover: 'УЗНАТЬ О КОНКУРСЕ',
  eyebrow: 'ВНУТРЕННЕЕ АКАДЕМИЧЕСКОЕ ПРИЗНАНИЕ',
  logoAlt: 'Лучший преподаватель Astana IT University ',
  navLogoAria: 'Лучший преподаватель Astana IT University ',
  heroLine1: 'Лучший',
  heroHighlight: 'преподаватель',
  heroLine2: 'Astana IT University',
  aboutEyebrow: 'О КОНКУРСЕ', aboutTitle: 'Признание лучших преподавателей Astana IT University',
  aboutText: 'Платформа цифровизирует весь цикл: подачу заявки, экспертизу, автоматический расчет баллов, решение комиссии и апелляцию. Каждое действие фиксируется, а финальное решение всегда принимает Конкурсная комиссия.',
  statPoints: 'максимальный балл', statBlocks: 'блока оценки', statNominations: 'номинации',
  block1: 'Академическая деятельность', block2: 'Учебно-методическая деятельность', block3: 'Организационно-методическая деятельность',
  nomEyebrow: 'НОМИНАЦИИ', nomTitle: 'Четыре номинации конкурса', passMark: 'Проходной балл', pointsShort: 'баллов', noApplication: 'Заявка не требуется',
  timeEyebrow: 'СРОКИ', timeTitle: 'От заявки до результатов',
  stageApplications: 'Прием заявок', stageCheck: 'Проверка полноты', stageExpert: 'Экспертиза', stageCommission: 'Конкурсная комиссия', stageAppeal: 'Апелляция', stageResults: 'Публикация результатов',
  resultsEyebrow: 'РЕЗУЛЬТАТЫ', resultsTitle: 'Победители объявляются после решения комиссии',
  resultsText: 'Предварительные результаты видны участникам на этапе апелляции. Окончательные результаты публикуются только после подтверждения Конкурсной комиссией.',
  portalsEyebrow: 'ПЛАТФОРМА КОНКУРСА', portalsTitle: 'Одна платформа, три кабинета',
  portalsText: 'Войдите один раз через корпоративную учетную запись. Платформа откроет кабинет вашей роли.',
  portalContestant: 'Конкурсант', portalContestantText: 'Выберите номинацию, укажите заявленные баллы, прикрепите документы и отслеживайте статус заявки.',
  portalExpert: 'Эксперт', portalExpertText: 'Оценивайте только назначенный блок и конкурсантов, подтверждайте документы или запрашивайте уточнение.',
  portalAdmin: 'Администратор', portalAdminText: 'Настраивайте критерии и сроки, назначайте экспертов, следите за прогрессом и выгружайте рейтинги.',
  enterContestant: 'Открыть кабинет конкурсанта', enterExpert: 'Открыть кабинет эксперта', enterAdmin: 'Открыть кабинет администратора',
  footerText: 'Признание достижений в преподавании, науке и академическом лидерстве.', footerRights: '© 2026 AITU AWARDS',
  previewOverview: 'ОБЗОР ЗАЯВКИ', previewWelcome: 'С возвращением', previewProgress: 'Прогресс заявки', previewNext: 'СЛЕДУЮЩИЙ ШАГ', previewNextValue: 'Добавить документы', previewStatus: 'СТАТУС', previewStatusValue: 'Черновик',
  previewExpert: 'КАБИНЕТ ЭКСПЕРТА', previewAssigned: 'Назначенные заявки', previewReview: 'Оценить',
  previewControl: 'ЦЕНТР УПРАВЛЕНИЯ', previewOverviewTitle: 'Обзор конкурса', previewApplications: 'ЗАЯВКИ', previewAdmitted: 'ДОПУЩЕНЫ', previewOverdue: 'ПРОСРОЧЕНО',

  workspace: 'КАБИНЕТ', notifications: 'Уведомления', returnToWebsite: 'Вернуться на сайт', edition: 'ТЕКУЩИЙ КОНКУРС', editionName: 'Awards 2026', applicationsOpen: 'Прием заявок открыт',
  navOverview: 'Обзор', navMyApplication: 'Моя заявка', navEvidence: 'Документы', navProfile: 'Профиль', navAssigned: 'Назначенные заявки', navApplications: 'Заявки', navRanking: 'Рейтинг',
  navCriteria: 'Критерии', navExperts: 'Эксперты и назначения', navSettings: 'Этапы конкурса', navUsers: 'Пользователи и роли', navAudit: 'Журнал аудита',
  roleContestant: 'Конкурсант', roleExpert: 'Эксперт', roleAdmin: 'Администратор',
  search: 'Поиск', replace: 'Заменить', remove: 'Удалить', required: 'Обязательно', cancel: 'Отмена', daysLeft: 'Осталось дней: {n}', today: 'Сохранено сегодня в {t}', saveChanges: 'Сохранить', saved: 'Сохранено',

  portalTitle: 'Кабинет конкурсанта', statusApplication: 'СТАТУС ЗАЯВКИ', statusFilled: 'КРИТЕРИИ ГОТОВЫ', profileLabel: 'ПРОФИЛЬ', profileComplete: 'Заполнен', profileVerified: 'Данные подтверждены', deadline: 'СРОК ПОДАЧИ',
  oneRequired: 'Остались обязательные критерии', allRequiredDone: 'Все обязательные критерии готовы',
  step1: 'ШАГ 1 · НОМИНАЦИЯ', chooseNomination: 'Выберите номинацию', nominationHint: 'Участие возможно только в одной номинации за конкурсный период.',
  step2: 'ШАГ 2 · ОЦЕНКА', criteriaTitle: 'Критерии оценки', criteriaText: 'Укажите заявленные баллы и прикрепите подтверждающие документы к каждому критерию. Файлы можно менять до отправки.',
  ofReady: 'Готово {a} из {b}', claimed: 'Заявлено баллов', maxShort: 'макс.', verifiedBy: 'Подтверждает', awaitingVerification: 'Ожидает подтверждения', addFile: 'Добавить файл', fileLimits: 'PDF, DOCX, XLSX, JPG или PNG · до 20 МБ', uploadedToday: 'Загружено сегодня',
  prelim: 'Предварительный балл', prelimNote: 'В итог идут только подтвержденные баллы.', blockLine: 'Блок {n}',
  submission: 'ОТПРАВКА', almostReady: 'Почти готово', readyToSubmit: 'Готово к отправке', submitText: 'Заполните все обязательные критерии, примите декларацию и отправьте заявку.',
  chkNomination: 'Номинация выбрана', chkCriteria: 'Обязательные критерии заполнены', chkDeclaration: 'Декларация и согласие',
  declaration: 'Подтверждаю достоверность сведений и согласен на их проверку.', submit: 'Отправить заявку', submitHint: 'Отправка станет доступна после выполнения всех требований.', submittedMsg: 'Заявка отправлена. Статус: Подана.',
  guidelines: 'Рекомендации по документам', guidelinesText: 'Прикладывайте краткие и релевантные документы, которые ясно показывают ваш вклад.', contactSupport: 'Написать в поддержку', institution: 'Организация', school: 'Школа', applicationId: 'Номер заявки', editProfile: 'Редактировать профиль', position: 'Associate Professor',

  expertEyebrow: 'ЭКСПЕРТНАЯ ПАНЕЛЬ · БЛОК II', assignedTitle: 'Назначенные заявки', assignedText: 'Оценивайте только блок и конкурсантов, назначенных вам администратором.', reviewDeadline: 'СРОК ЭКСПЕРТИЗЫ',
  queue: 'Заявок в вашей очереди: {n}', searchApplications: 'Поиск заявок', colApplicant: 'КОНКУРСАНТ', colNomination: 'НОМИНАЦИЯ', colBlock: 'БЛОК', colMyProgress: 'МОЙ ПРОГРЕСС', colStatus: 'СТАТУС', evaluated: 'Оценено {a} из {b}',
  reviewBtn: 'Оценить', detailed: 'ПОДРОБНАЯ ЭКСПЕРТИЗА', criterionLabel: 'Критерий', claimedScore: 'Заявлено конкурсантом', decision: 'Решение эксперта',
  decConfirmed: 'Подтверждено', decPartial: 'Подтверждено частично', decRejected: 'Не подтверждено', decClarify: 'Требует уточнения',
  expertScore: 'Балл эксперта', maxPoints: 'Максимум {n} баллов', comment: 'Комментарий эксперта', commentNeeded: 'При снижении балла или отказе в подтверждении комментарий обязателен.',
  scoreTooHigh: 'Балл не может превышать максимум критерия.', scoreAboveClaim: 'Частичный балл должен быть от 0 до заявленного.', clarifyDeadline: 'Срок ответа', clarifySent: 'Запрос на уточнение отправлен конкурсанту.',
  saveEvaluation: 'Сохранить оценку', completeReview: 'Завершить экспертизу', evaluationSaved: 'Оценка сохранена.', locked: 'Экспертиза завершена и заблокирована. Любое изменение фиксируется в журнале аудита.',
  hiddenScores: 'Баллы других экспертов скрыты до завершения вашей экспертизы.', openFull: 'Открыть на весь экран',
  checksTitle: 'Автоматические проверки', checksSub: 'Проверка по правилам', checksPassed: 'Пройдено {a} из {b}',
  ckFormat: 'Формат файла', ckFormatOk: 'PDF, допустимый формат', ckSize: 'Размер файла', ckSizeOk: '4,8 МБ · лимит 20 МБ', ckPeriod: 'Период учета', ckPeriodOk: 'Издано в 2023 году, входит в период',
  ckApplies: 'Применимость критерия', ckAppliesOk: 'Применим к выбранной номинации', ckRange: 'Диапазон заявленного балла', ckRangeOk: 'В пределах максимума критерия',
  checksNote: 'Проверки детерминированные. Баллы присваивает только эксперт.',

  adminEyebrow: 'АДМИНИСТРИРОВАНИЕ · КОНКУРС 2026', registryTitle: 'Реестр заявок', registryText: 'Следите за допуском, полнотой, экспертизой и рейтингом по всему конкурсу.',
  exportRegistry: 'Экспорт', exportXlsx: 'Excel (.xlsx)', exportPdf: 'PDF',
  mTotal: 'ВСЕГО ЗАЯВОК', mAdmitted: 'ДОПУЩЕНО', mDone: 'ЭКСПЕРТИЗ ЗАВЕРШЕНО', mOverdue: 'ПРОСРОЧЕНО', mClarify: 'ЗАПРОСОВ НА УТОЧНЕНИЕ', mCommission: 'ГОТОВО ДЛЯ КОМИССИИ',
  perWeek: '+2 за неделю', ofTotal: '{p}% от общего числа', needsAttention: 'Требует внимания', openRequests: 'Открытые запросы', afterReview: 'После экспертизы',
  registry: 'Реестр конкурсантов', showing: 'Показано {a} из {b} заявок', searchByName: 'Поиск по имени или номеру', allStatuses: 'Все статусы', allNominations: 'Все номинации',
  colId: 'НОМЕР ЗАЯВКИ', colSchool: 'ШКОЛА', colExpert: 'ЭКСПЕРТ', colCompletion: 'ЗАПОЛНЕНО', colTotal: 'ИТОГО', colUpdated: 'ОБНОВЛЕНО', rows: 'Строк на странице:',
  rankingEyebrow: 'РЕЙТИНГ', rankingTitle: 'Рейтинг по номинациям', rankingNote: 'Окончательное решение о победителях принимает Конкурсная комиссия. Система не присваивает статус победителя.',
  colRank: '№', colAcademic: 'АКАДЕМ. /40', colMethod: 'УЧЕБНО-МЕТОД. /50', colOrg: 'ОРГ. /10', passed: 'Пройден', belowPass: 'Ниже порога', passLine: 'Проходной балл: {n}',
  criteriaEyebrow: 'КОНФИГУРАЦИЯ', criteriaAdminTitle: 'Критерии оценки', criteriaAdminText: 'Хранятся как конфигурация. Администратор меняет их без изменения кода.', colCode: 'КОД', colCriterion: 'КРИТЕРИЙ', colMax: 'МАКС.', colSource: 'ПОДТВЕРЖДАЕТ', blockTotal: 'Итого по блоку', editCriteria: 'Изменить критерии',
  stagesEyebrow: 'ЭТАПЫ КОНКУРСА', stagesTitle: 'График', editStages: 'Изменить даты',
  usersEyebrow: 'ДОСТУП', usersTitle: 'Пользователи, роли и назначения', usersText: 'Эксперт видит только назначенный блок, критерии и конкурсантов.', manageUsers: 'Управление пользователями',
  expertsRow1: 'Dr. Sarah Mitchell · Блок II · все допущенные конкурсанты', expertsRow2: 'Prof. Aidos Bekov · Блок I · выбранные конкурсанты',
  auditEyebrow: 'АКТИВНОСТЬ СИСТЕМЫ', auditTitle: 'Журнал аудита', viewLog: 'Открыть весь журнал', oldValue: 'Было', newValue: 'Стало', reason: 'Причина',
  auditEligibility: 'Статус допуска изменен', auditAssigned: 'Назначен эксперт', auditReopened: 'Завершенная экспертиза открыта повторно', auditFile: 'Файл заменен', auditReminder: 'Отправлено напоминание о сроке',
  auditReopenReason: 'Конкурсант предоставил исправленный документ', minAgo: '{n} мин. назад', hourAgo: '{n} ч. назад', yesterday: 'Вчера',
}

const kk: Record<string, string> = {
  navAbout: 'КОНКУРС ТУРАЛЫ', navNominations: 'НОМИНАЦИЯЛАР', navTimeline: 'МЕРЗІМДЕР', navResults: 'НӘТИЖЕЛЕР', navContacts: 'БАЙЛАНЫС',
  login: 'Кіру', apply: 'Өтінім беру', viewCriteria: 'Критерийлер', discover: 'КОНКУРСПЕН ТАНЫСУ',
  eyebrow: 'ІШКІ АКАДЕМИЯЛЫҚ МОЙЫНДАУ',
  logoAlt: 'AITU Педагогикалық шеберлік сыйлығы',
  navLogoAria: 'AITU Педагогикалық шеберлік сыйлығы',
  aboutEyebrow: 'КОНКУРС ТУРАЛЫ', aboutTitle: 'Astana IT University-дің үздік оқытушыларын мойындау',
  aboutText: 'Платформа бүкіл циклды цифрландырады: өтінім беру, сараптама, ұпайларды автоматты есептеу, комиссия шешімі және апелляция. Әр әрекет тіркеледі, ал түпкілікті шешімді әрқашан Конкурстық комиссия қабылдайды.',
  statPoints: 'максималды ұпай', statBlocks: 'бағалау блогы', statNominations: 'номинация',
  block1: 'Академиялық қызмет', block2: 'Оқу-әдістемелік қызмет', block3: 'Ұйымдастыру-әдістемелік қызмет',
  nomEyebrow: 'НОМИНАЦИЯЛАР', nomTitle: 'Конкурстың төрт номинациясы', passMark: 'Өту ұпайы', pointsShort: 'ұпай', noApplication: 'Өтінім қажет емес',
  timeEyebrow: 'МЕРЗІМДЕР', timeTitle: 'Өтінімнен нәтижеге дейін',
  stageApplications: 'Өтінім қабылдау', stageCheck: 'Толықтығын тексеру', stageExpert: 'Сараптама', stageCommission: 'Конкурстық комиссия', stageAppeal: 'Апелляция', stageResults: 'Нәтижелерді жариялау',
  resultsEyebrow: 'НӘТИЖЕЛЕР', resultsTitle: 'Жеңімпаздар комиссия шешімінен кейін жарияланады',
  resultsText: 'Алдын ала нәтижелер қатысушыларға апелляция кезеңінде көрінеді. Түпкілікті нәтижелер Конкурстық комиссия растағаннан кейін ғана жарияланады.',
  portalsEyebrow: 'КОНКУРС ПЛАТФОРМАСЫ', portalsTitle: 'Бір платформа, үш кабинет',
  portalsText: 'Корпоративтік тіркелгі арқылы бір рет кіріңіз. Платформа рөліңізге сәйкес кабинетті ашады.',
  portalContestant: 'Конкурсант', portalContestantText: 'Номинацияны таңдаңыз, мәлімделген ұпайларды енгізіңіз, құжаттарды тіркеңіз және өтінім мәртебесін қадағалаңыз.',
  portalExpert: 'Сарапшы', portalExpertText: 'Тек тағайындалған блок пен конкурсанттарды бағалаңыз, құжаттарды растаңыз немесе түсіндіру сұраңыз.',
  portalAdmin: 'Әкімші', portalAdminText: 'Критерийлер мен мерзімдерді баптаңыз, сарапшыларды тағайындаңыз, барысын бақылаңыз және рейтингті жүктеңіз.',
  enterContestant: 'Конкурсант кабинетін ашу', enterExpert: 'Сарапшы кабинетін ашу', enterAdmin: 'Әкімші кабинетін ашу',
  footerText: 'Оқытудағы, ғылымдағы және академиялық көшбасшылықтағы жетістіктерді мойындау.', footerRights: '© 2026 AITU AWARDS',
  previewOverview: 'ӨТІНІМ ШОЛУЫ', previewWelcome: 'Қайта қош келдіңіз', previewProgress: 'Өтінім барысы', previewNext: 'КЕЛЕСІ ҚАДАМ', previewNextValue: 'Құжат қосу', previewStatus: 'МӘРТЕБЕ', previewStatusValue: 'Жоба',
  previewExpert: 'САРАПШЫ КАБИНЕТІ', previewAssigned: 'Тағайындалған өтінімдер', previewReview: 'Бағалау',
  previewControl: 'БАСҚАРУ ОРТАЛЫҒЫ', previewOverviewTitle: 'Конкурс шолуы', previewApplications: 'ӨТІНІМДЕР', previewAdmitted: 'ЖІБЕРІЛДІ', previewOverdue: 'МЕРЗІМІ ӨТТІ',

  workspace: 'КАБИНЕТ', notifications: 'Хабарландырулар', returnToWebsite: 'Сайтқа оралу', edition: 'АҒЫМДАҒЫ КОНКУРС', editionName: 'Awards 2026', applicationsOpen: 'Өтінім қабылдау ашық',
  navOverview: 'Шолу', navMyApplication: 'Менің өтінімім', navEvidence: 'Құжаттар', navProfile: 'Профиль', navAssigned: 'Тағайындалған өтінімдер', navApplications: 'Өтінімдер', navRanking: 'Рейтинг',
  navCriteria: 'Критерийлер', navExperts: 'Сарапшылар және тағайындаулар', navSettings: 'Конкурс кезеңдері', navUsers: 'Пайдаланушылар және рөлдер', navAudit: 'Аудит журналы',
  roleContestant: 'Конкурсант', roleExpert: 'Сарапшы', roleAdmin: 'Әкімші',
  search: 'Іздеу', replace: 'Ауыстыру', remove: 'Жою', required: 'Міндетті', cancel: 'Бас тарту', daysLeft: 'Қалған күн: {n}', today: 'Бүгін {t} сақталды', saveChanges: 'Сақтау', saved: 'Сақталды',

  portalTitle: 'Конкурсант кабинеті', statusApplication: 'ӨТІНІМ МӘРТЕБЕСІ', statusFilled: 'КРИТЕРИЙЛЕР ДАЙЫН', profileLabel: 'ПРОФИЛЬ', profileComplete: 'Толтырылған', profileVerified: 'Деректер расталған', deadline: 'ТАПСЫРУ МЕРЗІМІ',
  oneRequired: 'Міндетті критерийлер қалды', allRequiredDone: 'Барлық міндетті критерийлер дайын',
  step1: '1-ҚАДАМ · НОМИНАЦИЯ', chooseNomination: 'Номинацияны таңдаңыз', nominationHint: 'Конкурстық кезеңде тек бір номинацияға қатысуға болады.',
  step2: '2-ҚАДАМ · БАҒАЛАУ', criteriaTitle: 'Бағалау критерийлері', criteriaText: 'Әр критерий бойынша мәлімделген ұпайды енгізіп, растайтын құжаттарды тіркеңіз. Файлдарды жібергенге дейін өзгертуге болады.',
  ofReady: '{b} ішінен {a} дайын', claimed: 'Мәлімделген ұпай', maxShort: 'макс.', verifiedBy: 'Растайды', awaitingVerification: 'Растауды күтуде', addFile: 'Файл қосу', fileLimits: 'PDF, DOCX, XLSX, JPG немесе PNG · 20 МБ дейін', uploadedToday: 'Бүгін жүктелді',
  prelim: 'Алдын ала ұпай', prelimNote: 'Қорытындыға тек расталған ұпайлар кіреді.', blockLine: '{n}-блок',
  submission: 'ЖІБЕРУ', almostReady: 'Дерлік дайын', readyToSubmit: 'Жіберуге дайын', submitText: 'Барлық міндетті критерийлерді толтырып, декларацияны қабылдаңыз және өтінімді жіберіңіз.',
  chkNomination: 'Номинация таңдалды', chkCriteria: 'Міндетті критерийлер толтырылды', chkDeclaration: 'Декларация және келісім',
  declaration: 'Мәліметтердің дұрыстығын растаймын және тексеруге келісемін.', submit: 'Өтінімді жіберу', submitHint: 'Барлық талаптар орындалғанда жіберу қолжетімді болады.', submittedMsg: 'Өтінім жіберілді. Мәртебе: Жіберілді.',
  guidelines: 'Құжаттар бойынша ұсыныстар', guidelinesText: 'Үлесіңізді нақты көрсететін қысқа әрі өзекті құжаттарды тіркеңіз.', contactSupport: 'Қолдау қызметіне жазу', institution: 'Ұйым', school: 'Мектеп', applicationId: 'Өтінім нөмірі', editProfile: 'Профильді өңдеу', position: 'Associate Professor',

  expertEyebrow: 'САРАПШЫ ПАНЕЛІ · II БЛОК', assignedTitle: 'Тағайындалған өтінімдер', assignedText: 'Тек әкімші тағайындаған блок пен конкурсанттарды бағалаңыз.', reviewDeadline: 'САРАПТАМА МЕРЗІМІ',
  queue: 'Кезегіңіздегі өтінімдер: {n}', searchApplications: 'Өтінімдерді іздеу', colApplicant: 'КОНКУРСАНТ', colNomination: 'НОМИНАЦИЯ', colBlock: 'БЛОК', colMyProgress: 'МЕНІҢ БАРЫСЫМ', colStatus: 'МӘРТЕБЕ', evaluated: '{b} ішінен {a} бағаланды',
  reviewBtn: 'Бағалау', detailed: 'ТОЛЫҚ САРАПТАМА', criterionLabel: 'Критерий', claimedScore: 'Конкурсант мәлімдеген', decision: 'Сарапшы шешімі',
  decConfirmed: 'Расталды', decPartial: 'Ішінара расталды', decRejected: 'Расталмады', decClarify: 'Түсіндіру қажет',
  expertScore: 'Сарапшы ұпайы', maxPoints: 'Максимум {n} ұпай', comment: 'Сарапшы пікірі', commentNeeded: 'Ұпай азайтылғанда немесе расталмағанда пікір міндетті.',
  scoreTooHigh: 'Ұпай критерийдің максимумынан аспауы керек.', scoreAboveClaim: 'Ішінара ұпай 0 мен мәлімделген ұпай аралығында болуы керек.', clarifyDeadline: 'Жауап беру мерзімі', clarifySent: 'Түсіндіру сұрауы конкурсантқа жіберілді.',
  saveEvaluation: 'Бағаны сақтау', completeReview: 'Сараптаманы аяқтау', evaluationSaved: 'Баға сақталды.', locked: 'Сараптама аяқталып, бұғатталды. Кез келген кейінгі өзгеріс аудит журналында тіркеледі.',
  hiddenScores: 'Өз сараптамаңызды аяқтағанға дейін басқа сарапшылардың ұпайлары жасырылады.', openFull: 'Толық экранда ашу',
  checksTitle: 'Автоматты тексерулер', checksSub: 'Ережелер бойынша тексеру', checksPassed: '{b} ішінен {a} өтті',
  ckFormat: 'Файл пішімі', ckFormatOk: 'PDF, рұқсат етілген пішім', ckSize: 'Файл өлшемі', ckSizeOk: '4,8 МБ · шектеу 20 МБ', ckPeriod: 'Есепке алу кезеңі', ckPeriodOk: '2023 жылы жарияланған, кезеңге кіреді',
  ckApplies: 'Критерийдің қолданылуы', ckAppliesOk: 'Таңдалған номинацияға қолданылады', ckRange: 'Мәлімделген ұпай диапазоны', ckRangeOk: 'Критерий максимумы шегінде',
  checksNote: 'Тексерулер детерминделген. Ұпайды тек сарапшы береді.',

  adminEyebrow: 'ӘКІМШІЛЕНДІРУ · КОНКУРС 2026', registryTitle: 'Өтінімдер тізілімі', registryText: 'Конкурс бойынша рұқсатты, толықтықты, сараптаманы және рейтингті бақылаңыз.',
  exportRegistry: 'Экспорт', exportXlsx: 'Excel (.xlsx)', exportPdf: 'PDF',
  mTotal: 'БАРЛЫҚ ӨТІНІМ', mAdmitted: 'ЖІБЕРІЛДІ', mDone: 'САРАПТАМА АЯҚТАЛДЫ', mOverdue: 'МЕРЗІМІ ӨТТІ', mClarify: 'ТҮСІНДІРУ СҰРАУЛАРЫ', mCommission: 'КОМИССИЯҒА ДАЙЫН',
  perWeek: 'Аптасына +2', ofTotal: 'Жалпы санның {p}%', needsAttention: 'Назар аударуды қажет етеді', openRequests: 'Ашық сұраулар', afterReview: 'Сараптамадан кейін',
  registry: 'Конкурсанттар тізілімі', showing: '{b} өтінімнің {a} көрсетілді', searchByName: 'Аты немесе нөмірі бойынша іздеу', allStatuses: 'Барлық мәртебелер', allNominations: 'Барлық номинациялар',
  colId: 'ӨТІНІМ НӨМІРІ', colSchool: 'МЕКТЕП', colExpert: 'САРАПШЫ', colCompletion: 'ТОЛТЫРЫЛУЫ', colTotal: 'БАРЛЫҒЫ', colUpdated: 'ЖАҢАРТЫЛҒАН', rows: 'Беттегі жолдар:',
  rankingEyebrow: 'РЕЙТИНГ', rankingTitle: 'Номинациялар бойынша рейтинг', rankingNote: 'Жеңімпаздар туралы түпкілікті шешімді Конкурстық комиссия қабылдайды. Жүйе жеңімпаз мәртебесін өзі бермейді.',
  colRank: '№', colAcademic: 'АКАДЕМ. /40', colMethod: 'ОҚУ-ӘДІС. /50', colOrg: 'ҰЙЫМД. /10', passed: 'Өтті', belowPass: 'Шектен төмен', passLine: 'Өту ұпайы: {n}',
  criteriaEyebrow: 'КОНФИГУРАЦИЯ', criteriaAdminTitle: 'Бағалау критерийлері', criteriaAdminText: 'Конфигурация ретінде сақталады. Әкімші оларды кодты өзгертпей өңдейді.', colCode: 'КОД', colCriterion: 'КРИТЕРИЙ', colMax: 'МАКС.', colSource: 'РАСТАЙДЫ', blockTotal: 'Блок бойынша барлығы', editCriteria: 'Критерийлерді өзгерту',
  stagesEyebrow: 'КОНКУРС КЕЗЕҢДЕРІ', stagesTitle: 'Кесте', editStages: 'Күндерді өзгерту',
  usersEyebrow: 'ҚОЛЖЕТІМДІЛІК', usersTitle: 'Пайдаланушылар, рөлдер және тағайындаулар', usersText: 'Сарапшы тек тағайындалған блокты, критерийлерді және конкурсанттарды көреді.', manageUsers: 'Пайдаланушыларды басқару',
  expertsRow1: 'Dr. Sarah Mitchell · II блок · барлық жіберілген конкурсанттар', expertsRow2: 'Prof. Aidos Bekov · I блок · таңдалған конкурсанттар',
  auditEyebrow: 'ЖҮЙЕ ҚЫЗМЕТІ', auditTitle: 'Аудит журналы', viewLog: 'Толық журналды ашу', oldValue: 'Бұрын', newValue: 'Қазір', reason: 'Себебі',
  auditEligibility: 'Рұқсат мәртебесі өзгертілді', auditAssigned: 'Сарапшы тағайындалды', auditReopened: 'Аяқталған сараптама қайта ашылды', auditFile: 'Файл ауыстырылды', auditReminder: 'Мерзім туралы ескерту жіберілді',
  auditReopenReason: 'Конкурсант түзетілген құжат ұсынды', minAgo: '{n} мин. бұрын', hourAgo: '{n} сағ. бұрын', yesterday: 'Кеше',
}

const dict: Record<Lang, Record<string, string>> = { en, ru, kk }
const locales: Record<Lang, string> = { en: 'en-GB', ru: 'ru-RU', kk: 'kk-KZ' }

function initial(): Lang {
  try {
    const saved = localStorage.getItem('aitu-lang')
    if (saved === 'en' || saved === 'ru' || saved === 'kk') return saved
  } catch {
    return 'en'
  }
  return 'en'
}

let current: Lang = typeof window === 'undefined' ? 'en' : initial()
const listeners = new Set<() => void>()

export function setLang(lang: Lang) {
  current = lang
  try {
    localStorage.setItem('aitu-lang', lang)
  } catch {
    current = lang
  }
  document.documentElement.lang = lang
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useI18n() {
  const lang = useSyncExternalStore(subscribe, () => current, () => 'en' as Lang)
  const t = (key: Key, vars?: Record<string, string | number>) => {
    let text = dict[lang][key] ?? en[key] ?? key
    if (vars) Object.entries(vars).forEach(([name, value]) => { text = text.replace(`{${name}}`, String(value)) })
    return text
  }
  const date = (iso: string, withTime = false) => new Intl.DateTimeFormat(locales[lang], withTime
    ? { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }
    : { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso))
  return { lang, t, date, setLang }
}
