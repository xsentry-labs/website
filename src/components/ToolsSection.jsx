import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ToolsSection() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`tools ${visible ? 'tools--visible' : ''}`} ref={ref}>
      <div className="tools__content">
        <span className="tools__label">From the workshop</span>
        <h2 className="tools__heading">Tools</h2>
        <div className="tools__grid">
          <Link to="/tools/chat-pdf" className="tools__card">
            <div className="tools__card-accent" />
            <div className="tools__card-body">
              <h3 className="tools__card-title">Chat with your data</h3>
              <p className="tools__card-desc">
                Upload documents. Ask anything. Get answers with citations.
              </p>
              <span className="tools__card-cta">
                Try for free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
