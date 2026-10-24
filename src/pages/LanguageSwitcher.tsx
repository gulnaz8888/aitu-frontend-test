import { useI18n } from './i18n'
import type { Lang } from './criteria'

const options: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'KZ' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {options.map((option, index) => (
        <span key={option.code}>
          {index > 0 && <i aria-hidden="true">/</i>}
          <button
            type="button"
            className={lang === option.code ? 'active' : ''}
            aria-pressed={lang === option.code}
            onClick={() => setLang(option.code)}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  )
}
