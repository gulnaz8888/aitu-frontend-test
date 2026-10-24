import { Link, useNavigate, useSearchParams } from 'react-router'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from './i18n'

const AFTER_LOGIN = '/contestant'

const text = {
  en: {
    title: 'Sign in',
    lead: 'Use your university account to continue to the awards platform.',
    microsoft: 'Continue with Microsoft',
    google: 'Continue with Google',
    note: 'Prototype: any option signs you in.',
    back: 'Back to website',
  },
  ru: {
    title: 'Вход',
    lead: 'Войдите через аккаунт университета, чтобы продолжить работу на платформе.',
    microsoft: 'Продолжить через Microsoft',
    google: 'Продолжить через Google',
    note: 'Прототип: любой вариант выполняет вход.',
    back: 'Вернуться на сайт',
  },
  kk: {
    title: 'Кіру',
    lead: 'Платформаны жалғастыру үшін университет аккаунтымен кіріңіз.',
    microsoft: 'Microsoft арқылы жалғастыру',
    google: 'Google арқылы жалғастыру',
    note: 'Прототип: кез келген нұсқа кіруді орындайды.',
    back: 'Сайтқа оралу',
  },
} as const

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 21 21" aria-hidden="true">
      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285f4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.5z" />
      <path fill="#34a853" d="M12 23.5c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A11.5 11.5 0 0 0 12 23.5z" />
      <path fill="#fbbc05" d="M5.6 14.2a6.9 6.9 0 0 1 0-4.4v-3H1.8a11.5 11.5 0 0 0 0 10.4z" />
      <path fill="#ea4335" d="M12 5.2c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.5 11.5 0 0 0 1.8 6.8l3.8 3C6.5 7.2 9 5.2 12 5.2z" />
    </svg>
  )
}

export default function LoginPage() {
  const { lang } = useI18n()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const copy = text[lang as keyof typeof text] ?? text.en

  const next = params.get('next')
  const target = next && next.startsWith('/') && !next.startsWith('//') ? next : AFTER_LOGIN

  const signIn = () => navigate(target)

  return (
    <div className="login-page">
      <header className="login-header">
        <Link to="/" aria-label="AITU Teaching Excellence Awards">
          <img src="/logo-trophy.png" alt="AITU Teaching Excellence Awards" />
        </Link>
        <LanguageSwitcher />
      </header>

      <main className="login-main">
        <section className="login-card">
          <h1>{copy.title}</h1>
          <p>{copy.lead}</p>

          <button type="button" className="login-provider microsoft" onClick={signIn}>
            <MicrosoftIcon /> {copy.microsoft}
          </button>
          <button type="button" className="login-provider google" onClick={signIn}>
            <GoogleIcon /> {copy.google}
          </button>

          <small>{copy.note}</small>
        </section>
        <Link className="login-back" to="/">← {copy.back}</Link>
      </main>
    </div>
  )
}
