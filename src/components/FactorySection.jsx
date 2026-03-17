import { useEffect, useRef, useState } from 'react'

export default function FactorySection() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`factory ${visible ? 'factory--visible' : ''}`} ref={ref}>
      <div className="factory__rule" />
      <div className="factory__content">
        <h2 className="factory__heading">
          experience <em>the</em> Factory
        </h2>
        <p className="factory__text">
          Reimagine how modern systems are built. We're upgrading the
          assembly line for how technology is created — from the ground up.
        </p>
        <span className="factory__soon">Coming Soon</span>
      </div>
    </section>
  )
}
