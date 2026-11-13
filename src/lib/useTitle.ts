import { useEffect } from 'react'

export function useTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Yash Agarwal` : 'Yash Agarwal — APM / Product Manager'
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
