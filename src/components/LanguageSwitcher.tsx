'use client'

import { useRouter } from 'next/router'

export const LanguageSwitcher = () => {
  const router = useRouter()
  const { lang, slug } = router.query

  const switchTo = lang === 'en' ? 'es' : 'en'

  const handleSwitch = () => {
    router.push(`/${switchTo}/${slug}`)
  }

  return (
    <button
      onClick={handleSwitch}
      className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
    >
      Switch to {switchTo.toUpperCase()}
    </button>
  )
}
