import { useEffect, useState } from 'react'
import Footer from '../components/Footer'

export default function ClawixPage() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Clawix — OpenClaw Agents Running Safely in the Cloud'
  }, [])

  useEffect(() => {
    if (showWaitlist) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showWaitlist])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* Hero (text-only, no image yet) */}
      <section className="hero">
        <div className="hero__overlay">
          <div className="hero__brand">
            <h1 className="hero__title">clawix.ai</h1>
            <p className="hero__tagline">OpenClaw agents running safely in the cloud.</p>
          </div>
          <nav className="hero__nav" aria-label="Main navigation">
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="clawix-intro">
        <div className="clawix-intro__inner">
          <h2>Your agent. Your model. Your rules.</h2>
          <p>
            Clawix runs your OpenClaw agent in the cloud with simple, sensible controls —
            allowlisted domains, allowed tools, read-only defaults, and full logs of everything.
            Bring your own model, your own keys, and we handle the rest.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="clawix-steps" id="how-it-works">
        <div className="clawix-steps__inner">
          <div className="clawix-steps__header">
            <h2>How it works</h2>
            <p>Three steps. That's it.</p>
          </div>
          <div className="clawix-steps__grid">
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">01</div>
              <h3>Onboard</h3>
              <p>Connect your LLM, pick your tools, set your limits.</p>
              <ul>
                <li>Connect your model — OpenAI, Anthropic, Azure, or any compatible endpoint</li>
                <li>Choose which tools the agent can use</li>
                <li>Mark tools as read-only or read-write</li>
                <li>Allowlist the domains the agent can reach</li>
                <li>Set a spending limit</li>
              </ul>
            </div>
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">02</div>
              <h3>Deploy</h3>
              <p>One click. Your agent runs 24/7 in our cloud.</p>
              <ul>
                <li>Dedicated container, always on</li>
                <li>Agent gets its own email address and phone number</li>
                <li>Connected to your channels — Slack, Telegram, WhatsApp</li>
                <li>Only talks to the domains you allowed</li>
                <li>Only uses the tools you enabled</li>
              </ul>
            </div>
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">03</div>
              <h3>Work with it</h3>
              <p>Use your agent. Come back to see everything it's done.</p>
              <ul>
                <li>Action log — every action, every tool call, every response</li>
                <li>Human-in-the-loop — write operations flag for your approval</li>
                <li>Cost tracking — real-time spend, per-action cost, running totals</li>
                <li>Full logs — every request, searchable and exportable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="clawix-features" id="features">
        <div className="clawix-features__inner">
          <div className="clawix-features__header">
            <h2>What you get</h2>
            <p>Simple controls. Full visibility. No surprises.</p>
          </div>
          <div className="clawix-features__grid">
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <h3>Secure by Default</h3>
              <p>Tools default to read-only. Write access is opt-in and requires your approval. Agents only reach domains you allowlist. Everything else is off.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <h3>BYOM Flexibility</h3>
              <p>Bring your own model. OpenAI, Anthropic, Azure, Google, or any compatible endpoint. Your keys, your costs, your choice. Switch anytime.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
              </div>
              <h3>Fully Auditable</h3>
              <p>Every action, every token, every dollar — logged and visible. A clean workbook of everything your agent has done. Exportable for your records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workbook Preview */}
      <section className="clawix-workbook">
        <div className="clawix-workbook__inner">
          <div className="clawix-workbook__content">
            <h2>Not a dashboard. A workbook.</h2>
            <p>A simple, chronological log of everything your agent has done. See what happened, when, what it cost, and whether it needed your approval.</p>
            <ul>
              <li><strong>Timestamp</strong> — when it happened</li>
              <li><strong>Action</strong> — what the agent did</li>
              <li><strong>Tag</strong> — read / write / approved / blocked</li>
              <li><strong>Cost</strong> — what that action cost</li>
              <li><strong>Running total</strong> — cumulative spend</li>
            </ul>
            <p className="clawix-workbook__extra">Plus pending approvals for write operations, payment history, invoices, and agent status.</p>
          </div>
          <div className="clawix-workbook__visual">
            <div className="clawix-workbook__mock">
              <div className="clawix-workbook__mock-header">
                <span className="clawix-workbook__mock-title">Action Log</span>
                <span className="clawix-workbook__mock-status">● Running</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">14:32:01</span>
                <span className="clawix-workbook__mock-action">Read inbox — 3 new messages</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--read">read</span>
                <span className="clawix-workbook__mock-cost">$0.002</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">14:32:08</span>
                <span className="clawix-workbook__mock-action">Summarized email from ops@acme.co</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--read">read</span>
                <span className="clawix-workbook__mock-cost">$0.004</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">14:32:15</span>
                <span className="clawix-workbook__mock-action">Draft reply to ops@acme.co</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--write">write</span>
                <span className="clawix-workbook__mock-cost">$0.006</span>
              </div>
              <div className="clawix-workbook__mock-row clawix-workbook__mock-row--approval">
                <span className="clawix-workbook__mock-time">14:32:15</span>
                <span className="clawix-workbook__mock-action">⏳ Awaiting your approval to send</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--pending">pending</span>
                <span className="clawix-workbook__mock-cost">—</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">14:33:42</span>
                <span className="clawix-workbook__mock-action">Fetched pricing from api.vendor.io</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--read">read</span>
                <span className="clawix-workbook__mock-cost">$0.003</span>
              </div>
              <div className="clawix-workbook__mock-footer">
                <span>5 actions today</span>
                <span>Total: $0.015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="clawix-pricing" id="pricing">
        <div className="clawix-pricing__inner">
          <div className="clawix-pricing__header">
            <h2>Pricing</h2>
            <p>Simple. No hidden fees.</p>
          </div>
          <div className="clawix-pricing__grid clawix-pricing__grid--three">
            <div className="clawix-pricing__card">
              <h3>Bring Your Own Key</h3>
              <div className="clawix-pricing__amount">$50<span>/month</span></div>
              <p className="clawix-pricing__desc">Use your own API keys from any provider.</p>
              <ul>
                <li>1 always-on OpenClaw agent</li>
                <li>Dedicated container</li>
                <li>Allowed tools + read-only defaults</li>
                <li>Domain allowlisting</li>
                <li>Human-in-the-loop write approval</li>
                <li>Full action log and cost tracking</li>
                <li>BYOM — connect any provider</li>
                <li>Slack + Telegram integration</li>
                <li>Email support</li>
              </ul>
              <p className="clawix-pricing__note">You pay your LLM provider directly. Clawix is the platform fee.</p>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
            <div className="clawix-pricing__card clawix-pricing__card--featured">
              <h3>All-In</h3>
              <div className="clawix-pricing__amount">$100<span>/month</span></div>
              <p className="clawix-pricing__desc">Everything in BYOK, plus AI credits included.</p>
              <ul>
                <li>1 always-on OpenClaw agent</li>
                <li>Dedicated container</li>
                <li>Allowed tools + read-only defaults</li>
                <li>Domain allowlisting</li>
                <li>Human-in-the-loop write approval</li>
                <li>Full action log and cost tracking</li>
                <li>BYOM — connect any provider</li>
                <li>Slack + Telegram integration</li>
                <li>$40/month in AI credits included</li>
                <li>No need to manage your own API keys</li>
                <li>Usage tracked and visible in console</li>
                <li>Email support</li>
              </ul>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
            <div className="clawix-pricing__card">
              <h3>Enterprise</h3>
              <div className="clawix-pricing__amount">Custom</div>
              <p className="clawix-pricing__desc">For teams that need more agents, SSO, and dedicated support.</p>
              <ul>
                <li>Multiple agents</li>
                <li>SSO and role-based access</li>
                <li>Fleet management</li>
                <li>SIEM integration</li>
                <li>Dedicated support</li>
                <li>Custom SLAs</li>
              </ul>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="clawix-cta" id="contact">
        <div className="clawix-cta__inner">
          <div className="clawix-cta__content">
            <h2>Ready to run your agent?</h2>
            <p>Join the waitlist and we'll let you know when Clawix is live.</p>
            <button onClick={() => setShowWaitlist(true)} className="contact__cta">
              join the waitlist
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="clawix-modal__overlay" onClick={() => setShowWaitlist(false)}>
          <div className="clawix-modal" onClick={(e) => e.stopPropagation()}>
            <button className="clawix-modal__close" onClick={() => setShowWaitlist(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            {submitted ? (
              <div className="clawix-modal__success">
                <h3>You're on the list.</h3>
                <p>We'll reach out when Clawix is ready.</p>
              </div>
            ) : (
              <>
                <h3>Join the waitlist</h3>
                <p>Be the first to know when Clawix launches.</p>
                <form onSubmit={handleSubmit} className="clawix-modal__form">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  {error && <p className="clawix-modal__error">{error}</p>}
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer
        description="OpenClaw agents running safely in the cloud. A venture by xsentry labs."
        columns={[
          {
            title: 'Product',
            links: [
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'xsentry labs', to: '/' },
              { label: 'Contact', href: 'mailto:hello@xsentrylabs.com' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ],
          },
        ]}
      />
    </>
  )
}
