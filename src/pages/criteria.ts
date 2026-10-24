export type Lang = 'en' | 'ru' | 'kk'
export type Source = 'nominee' | 'sociologist' | 'registrar' | 'umo' | 'director'
export type Tr = Record<Lang, string>

export type Criterion = {
  id: string
  block: 1 | 2 | 3
  max: number
  source: Source
  title: Tr
}

export const blockMax: Record<1 | 2 | 3, number> = { 1: 40, 2: 50, 3: 10 }

export const edition = {
  year: 2026,
  deadline: '2026-11-30',
  reviewDeadline: '2026-12-28',
}

export const stages: { key: string; from: string; to: string }[] = [
  { key: 'stageApplications', from: '2026-10-01', to: '2026-11-30' },
  { key: 'stageCheck', from: '2026-12-01', to: '2026-12-07' },
  { key: 'stageExpert', from: '2026-12-08', to: '2026-12-28' },
  { key: 'stageCommission', from: '2027-01-09', to: '2027-01-16' },
  { key: 'stageAppeal', from: '2027-01-17', to: '2027-01-23' },
  { key: 'stageResults', from: '2027-01-30', to: '2027-01-30' },
]

export const criteria: Criterion[] = [
  { id: 'I.1', block: 1, max: 5, source: 'nominee', title: { en: 'Academic degree (PhD / Doctor) in the field', ru: 'Ученая степень / PhD / доктор по профилю', kk: 'Бейін бойынша ғылыми дәреже / PhD / доктор' } },
  { id: 'I.2', block: 1, max: 5, source: 'nominee', title: { en: 'Academic title: Professor – 5, Associate Professor – 3', ru: 'Ученое звание: профессор – 5, ассоциированный профессор – 3', kk: 'Ғылыми атақ: профессор – 5, қауымдастырылған профессор – 3' } },
  { id: 'I.3', block: 1, max: 5, source: 'sociologist', title: { en: 'Teaching quality: survey 80–100 – 5, 50–79 – 2', ru: 'Качество преподавания: опрос 80–100 – 5, 50–79 – 2', kk: 'Оқыту сапасы: сауалнама 80–100 – 5, 50–79 – 2' } },
  { id: 'I.4', block: 1, max: 6, source: 'registrar', title: { en: 'Student performance: success rate and quality / GPA', ru: 'Успеваемость обучающихся: % успеваемости и качество / GPA', kk: 'Білім алушылардың үлгерімі: үлгерім пайызы және сапа / GPA' } },
  { id: 'I.5', block: 1, max: 5, source: 'nominee', title: { en: 'Work with students: winners / prize holders – 5, nominees – 3', ru: 'Работа со студентами: победители / призеры – 5, номинанты – 3', kk: 'Студенттермен жұмыс: жеңімпаздар / жүлдегерлер – 5, номинанттар – 3' } },
  { id: 'I.6', block: 1, max: 9, source: 'nominee', title: { en: 'Internationalisation: mobility, guest teaching, international projects', ru: 'Интернационализация: мобильность, приглашенное преподавание, проекты', kk: 'Интернационалдандыру: ұтқырлық, шақырылған оқыту, халықаралық жобалар' } },
  { id: 'I.7', block: 1, max: 5, source: 'nominee', title: { en: 'Professional development, 72+ hours in the last 3 years', ru: 'Повышение квалификации, не менее 72 часов за 3 года', kk: 'Біліктілікті арттыру, соңғы 3 жылда кемінде 72 сағат' } },
  { id: 'II.1', block: 2, max: 14, source: 'nominee', title: { en: 'E-learning resources: MOOC, e-course, video lectures', ru: 'Электронные учебные ресурсы: MOOC, e-course, видеолекции', kk: 'Электрондық оқу ресурстары: MOOC, e-course, бейнедәрістер' } },
  { id: 'II.2', block: 2, max: 30, source: 'nominee', title: { en: 'Teaching materials: textbooks, guides, authored course, syllabi', ru: 'Учебные материалы: учебники, пособия, авторский курс, силлабусы', kk: 'Оқу материалдары: оқулықтар, құралдар, авторлық курс, силлабустар' } },
  { id: 'II.3', block: 2, max: 3, source: 'umo', title: { en: 'University-level open classes', ru: 'Открытые занятия университетского уровня', kk: 'Университет деңгейіндегі ашық сабақтар' } },
  { id: 'II.4', block: 2, max: 3, source: 'director', title: { en: 'Development of educational programmes', ru: 'Разработка образовательных программ', kk: 'Білім беру бағдарламаларын әзірлеу' } },
  { id: 'III.1', block: 3, max: 5, source: 'nominee', title: { en: 'Methodological seminars, master classes, trainings', ru: 'Методические семинары, мастер-классы, тренинги', kk: 'Әдістемелік семинарлар, шеберлік сыныптары, тренингтер' } },
  { id: 'III.2', block: 3, max: 5, source: 'nominee', title: { en: 'Participation in educational events with a talk', ru: 'Участие в образовательных мероприятиях с докладом', kk: 'Білім беру іс-шараларына баяндамамен қатысу' } },
]

export const sourceLabel: Record<Source, Tr> = {
  nominee: { en: 'Nominee', ru: 'Номинант', kk: 'Номинант' },
  sociologist: { en: 'Survey office', ru: 'Социолог', kk: 'Социолог' },
  registrar: { en: 'Registrar’s Office', ru: 'Офис регистратора', kk: 'Тіркеуші кеңсесі' },
  umo: { en: 'UMO', ru: 'УМО', kk: 'ОӘБ' },
  director: { en: 'School Director', ru: 'Директор Школы', kk: 'Мектеп директоры' },
}

export type Nomination = {
  id: string
  pass: number
  applicable: boolean
  name: string
  conditions: Tr
}

export const nominations: Nomination[] = [
  {
    id: 'young',
    pass: 30,
    applicable: true,
    name: 'Young Faculty Excellence Award',
    conditions: {
      en: 'Teacher, Senior Lecturer · 1–3 years of continuous service at AITU',
      ru: 'Teacher, Senior-Lector · непрерывный стаж в AITU от 1 до 3 лет',
      kk: 'Teacher, Senior-Lector · AITU-да үздіксіз өтілі 1–3 жыл',
    },
  },
  {
    id: 'practice',
    pass: 50,
    applicable: true,
    name: 'Excellence in Teaching Practice Award',
    conditions: {
      en: 'Senior Lecturer (3+ years) or Assistant Professor (1+ year) · survey result 70+',
      ru: 'Senior-Lecturer (от 3 лет) или Assistant Professor (от 1 года) · анкетирование от 70 баллов',
      kk: 'Senior-Lecturer (3 жылдан) немесе Assistant Professor (1 жылдан) · сауалнама 70 балдан кем емес',
    },
  },
  {
    id: 'professor',
    pass: 50,
    applicable: true,
    name: 'Distinguished Professor Award',
    conditions: {
      en: 'Assistant, Associate Professor or Professor · stable results, academic community activity',
      ru: 'Assistant Professor, Associate Professor, Professor · устойчивые показатели, участие в академическом сообществе',
      kk: 'Assistant Professor, Associate Professor, Professor · тұрақты көрсеткіштер, академиялық қауымдастыққа қатысу',
    },
  },
  {
    id: 'student',
    pass: 0,
    applicable: false,
    name: 'Student Choice Award',
    conditions: {
      en: 'Selected automatically from the “Teacher through students’ eyes” survey',
      ru: 'Определяется автоматически по анкетированию «Преподаватель глазами обучающихся»',
      kk: '«Білім алушылар көзімен оқытушы» сауалнамасы бойынша автоматты түрде анықталады',
    },
  },
]

export type Status =
  | 'draft'
  | 'submitted'
  | 'check'
  | 'returned'
  | 'admitted'
  | 'review'
  | 'clarification'
  | 'reviewDone'
  | 'commission'
  | 'preliminary'
  | 'appeal'
  | 'finalized'

export const statusLabel: Record<Status, Tr> = {
  draft: { en: 'Draft', ru: 'Черновик', kk: 'Жоба' },
  submitted: { en: 'Submitted', ru: 'Подана', kk: 'Жіберілді' },
  check: { en: 'Completeness check', ru: 'Проверка полноты', kk: 'Толықтығын тексеру' },
  returned: { en: 'Returned for revision', ru: 'Возвращена на доработку', kk: 'Қайта өңдеуге қайтарылды' },
  admitted: { en: 'Admitted', ru: 'Допущена', kk: 'Жіберілді (рұқсат)' },
  review: { en: 'Under expert review', ru: 'На экспертизе', kk: 'Сараптамада' },
  clarification: { en: 'Clarification requested', ru: 'Запрошено уточнение', kk: 'Түсіндіру сұралды' },
  reviewDone: { en: 'Expert review completed', ru: 'Экспертиза завершена', kk: 'Сараптама аяқталды' },
  commission: { en: 'Submitted to Commission', ru: 'Передана комиссии', kk: 'Комиссияға жіберілді' },
  preliminary: { en: 'Preliminary result', ru: 'Предварительный результат', kk: 'Алдын ала нәтиже' },
  appeal: { en: 'Appeal', ru: 'Апелляция', kk: 'Апелляция' },
  finalized: { en: 'Finalized', ru: 'Завершена', kk: 'Аяқталды' },
}

export type Applicant = {
  id: string
  name: string
  school: string
  nomination: string
  status: Status
  completion: number
  scores: [number, number, number]
  expert: string
  updated: string
}

export const applicants: Applicant[] = [
  { id: 'AITU-260128', name: 'Gulnaz Yeskermes', school: 'Software Engineering', nomination: 'professor', status: 'review', completion: 82, scores: [31, 42, 8], expert: 'Dr. Sarah Mitchell', updated: '2026-11-14T10:24' },
  { id: 'AITU-260127', name: 'Aigerim Sarsembayeva', school: 'General Education', nomination: 'practice', status: 'reviewDone', completion: 100, scores: [29, 38, 7], expert: 'Dr. Sarah Mitchell', updated: '2026-11-13T11:24' },
  { id: 'AITU-260126', name: 'Daniyar Akhmetov', school: 'Cybersecurity', nomination: 'young', status: 'returned', completion: 64, scores: [18, 20, 4], expert: '—', updated: '2026-11-12T12:24' },
  { id: 'AITU-260125', name: 'Mariya Kim', school: 'Business & Management', nomination: 'practice', status: 'reviewDone', completion: 100, scores: [33, 40, 9], expert: 'Prof. Aidos Bekov', updated: '2026-11-11T13:24' },
  { id: 'AITU-260124', name: 'Timur Nurgaliyev', school: 'Software Engineering', nomination: 'young', status: 'clarification', completion: 94, scores: [24, 27, 6], expert: 'Dr. Sarah Mitchell', updated: '2026-11-10T14:24' },
  { id: 'AITU-260123', name: 'Alua Serikova', school: 'Computational Sciences', nomination: 'professor', status: 'reviewDone', completion: 100, scores: [35, 44, 9], expert: 'Prof. Aidos Bekov', updated: '2026-11-09T09:12' },
]

export const claims: Record<string, Record<string, number>> = {
  'AITU-260128': { 'II.1': 10, 'II.2': 22, 'II.3': 3, 'II.4': 3 },
  'AITU-260127': { 'II.1': 12, 'II.2': 26, 'II.3': 2, 'II.4': 3 },
  'AITU-260126': { 'II.1': 6, 'II.2': 14, 'II.3': 0, 'II.4': 0 },
  'AITU-260124': { 'II.1': 9, 'II.2': 18, 'II.3': 3, 'II.4': 1 },
}
