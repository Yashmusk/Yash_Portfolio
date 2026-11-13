import { Arrow, Button } from '../components/ui'
import { useTitle } from '../lib/useTitle'

export default function NotFound() {
  useTitle('Not found')
  return (
    <section className="page py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-4">This page didn’t make the roadmap.</h1>
      <div className="mt-10 flex justify-center gap-3">
        <Button to="/">Back home <Arrow /></Button>
        <Button to="/case-studies" variant="outline">Case studies</Button>
      </div>
    </section>
  )
}
