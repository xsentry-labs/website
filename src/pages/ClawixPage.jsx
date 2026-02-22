import { useEffect, useState } from 'react'
import Footer from '../components/Footer'

export default function ClawixPage() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Clawix - Your Personal AI Agent for Digital Work'
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
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay">
          <div className="hero__brand">
            <h1 className="hero__title">clawix</h1>
            <p className="hero__tagline">Your personal AI agent. Connects your tools. Handles your work. Remembers everything.</p>
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
          <h2>The problem: your digital life is fragmented.</h2>
          <p>
            Your email, calendar, docs, Slack, CRM, spreadsheets - each tool has a piece of your work.
            You're the glue layer, manually copying information between systems, remembering what's where,
            context switching constantly. And most AI assistants are just chatbots - they answer questions
            but don't actually do anything. Clawix is different. It's your personal AI agent that understands
            your full context, connects across your tools, and takes real actions - sending emails, scheduling
            meetings, updating databases, drafting messages. And it remembers everything about you and your work.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="clawix-steps" id="how-it-works">
        <div className="clawix-steps__inner">
          <div className="clawix-steps__header">
            <h2>How it works</h2>
            <p>Set it up once. Let it handle your work 24/7.</p>
          </div>
          <div className="clawix-steps__grid">
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">01</div>
              <h3>Connect your world</h3>
              <p>Tell Clawix about your tools and how you work.</p>
              <ul>
                <li>Connect Slack, Telegram, email, calendar, docs, CRM - or integrate custom APIs</li>
                <li>Choose your AI model (Anthropic, OpenAI, Gemini, or bring your own)</li>
                <li>Define what your agent should do and how to behave</li>
                <li>Enable the actions and tools it should use (search, schedule, draft, update)</li>
                <li>Set access permissions for who can interact with it</li>
              </ul>
            </div>
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">02</div>
              <h3>It handles your work</h3>
              <p>Your agent works 24/7 - triaging, drafting, coordinating, remembering.</p>
              <ul>
                <li>Proactive tasks - filter email, summarize meetings, remind you of deadlines</li>
                <li>Coordinate across tools - send an email and update your CRM in one go</li>
                <li>Takes real actions - books meetings, drafts messages, files tickets, updates databases</li>
                <li>Persistent memory - knows who you are, what you care about, your context</li>
                <li>Works in the background - no interruptions, no context switching required</li>
              </ul>
            </div>
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">03</div>
              <h3>Reclaim your time</h3>
              <p>Stop doing admin work. Focus on what matters.</p>
              <ul>
                <li>Hours back per week from automated routine tasks</li>
                <li>Less context switching - your agent bridges your tools</li>
                <li>Fewer interruptions - it handles things without bothering you</li>
                <li>Full visibility - action log shows everything it's done and why</li>
                <li>You stay in control - approve risky actions, set boundaries, adjust as you go</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="clawix-features" id="features">
        <div className="clawix-features__inner">
          <div className="clawix-features__header">
            <h2>Solve the problem once and for all.</h2>
            <p>Clawix eliminates fragmentation, context switching, and wasted hours on admin work.</p>
          </div>
          <div className="clawix-features__grid">
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3>Truly independent</h3>
              <p>Your agent runs in its own isolated environment with dedicated resources. No sharing compute with others, no interference, no data mingling. It's yours alone - fast, reliable, and always available.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3>Persistent context</h3>
              <p>Your agent remembers your preferences, past conversations, important context, and your work patterns. It doesn't start from scratch each time - it understands you and your needs over time.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>Bridges your tools</h3>
              <p>Your agent knows how to talk to Slack, Telegram, email, calendar, CRM, docs, and more. It connects the dots between your fragmented toolstack - no more manual copying and coordinating.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>You choose the brain</h3>
              <p>Use Claude, GPT-4, Gemini, or any model via your own API key. You're not locked in - switch models, providers, or bring your own anytime. You own the costs and the relationship.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              </div>
              <h3>Takes real actions</h3>
              <p>Web search, send emails, schedule meetings, file tickets, update databases, take notes, set reminders. Your agent isn't just a chatbot - it actually does things on your behalf.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h3>Full transparency</h3>
              <p>Every action logged, searchable, and auditable. You always know what your agent has done, why it did it, and when. Complete visibility and control - you approve risky actions, not the other way around.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Log Preview */}
      <section className="clawix-workbook" id="action-log">
        <div className="clawix-workbook__inner">
          <div className="clawix-workbook__content">
            <h2>Stay in control. Always.</h2>
            <p>You decide what your agent can do, and you see everything it's doing. A complete, searchable log of every action - no black boxes, no surprises, no regrets.</p>
            <ul>
              <li><strong>What it did</strong> - the specific action (sent email, booked meeting, updated ticket)</li>
              <li><strong>When it happened</strong> - exact timestamp</li>
              <li><strong>Why it did it</strong> - context and reasoning</li>
              <li><strong>Where it came from</strong> - which channel or trigger initiated it</li>
            </ul>
            <p className="clawix-workbook__extra">Full audit trail. Searchable, filterable, exportable. You own the data and the history.</p>
          </div>
          <div className="clawix-workbook__visual">
            <div className="clawix-workbook__mock">
              <div className="clawix-workbook__mock-header">
                <span className="clawix-workbook__mock-title">Action Log</span>
                <span className="clawix-workbook__mock-status">● Running</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">09:14:03</span>
                <span className="clawix-workbook__mock-action">web_search "AAPL earnings Q1 2025"</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--read">tool</span>
                <span className="clawix-workbook__mock-cost">slack</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">09:14:05</span>
                <span className="clawix-workbook__mock-action">stock_quote AAPL</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--read">tool</span>
                <span className="clawix-workbook__mock-cost">slack</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">09:14:07</span>
                <span className="clawix-workbook__mock-action">Replied to @nihal in #general</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--write">reply</span>
                <span className="clawix-workbook__mock-cost">slack</span>
              </div>
              <div className="clawix-workbook__mock-row">
                <span className="clawix-workbook__mock-time">11:00:00</span>
                <span className="clawix-workbook__mock-action">schedule_reminder "standup in 15m"</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--read">tool</span>
                <span className="clawix-workbook__mock-cost">slack</span>
              </div>
              <div className="clawix-workbook__mock-row clawix-workbook__mock-row--approval">
                <span className="clawix-workbook__mock-time">11:15:00</span>
                <span className="clawix-workbook__mock-action">Reminder fired - sent to @nihal</span>
                <span className="clawix-workbook__mock-tag clawix-workbook__mock-tag--pending">system</span>
                <span className="clawix-workbook__mock-cost">slack</span>
              </div>
              <div className="clawix-workbook__mock-footer">
                <span>5 events today</span>
                <span>Instance: dedicated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="clawix-pricing" id="pricing">
        <div className="clawix-pricing__inner">
          <div className="clawix-pricing__header">
            <h2>Pricing that makes sense</h2>
            <p>Reclaim hours every week. Pricing is simple. The value is enormous.</p>
          </div>
          <div className="clawix-pricing__grid clawix-pricing__grid--three">
            <div className="clawix-pricing__card">
              <h3>Bring Your Own Key</h3>
              <div className="clawix-pricing__amount">$25<span>/month</span></div>
              <p className="clawix-pricing__desc">For those who want control. Use your own API key, save on compute costs.</p>
              <ul>
                <li>Dedicated VM - your instance only</li>
                <li>Dedicated database for memory and history</li>
                <li>Connect any provider with your own key</li>
                <li>Slack and Telegram integration</li>
                <li>All built-in tools included</li>
                <li>Full action log and dashboard</li>
                <li>Access control - invite or restrict users</li>
                <li>Email support</li>
              </ul>
              <p className="clawix-pricing__note">You pay your LLM provider directly. This is the hosting fee.</p>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
            <div className="clawix-pricing__card clawix-pricing__card--featured">
              <h3>All-In</h3>
              <div className="clawix-pricing__amount">$50<span>/month</span></div>
              <p className="clawix-pricing__desc">Recommended. No API key juggling. Everything included and ready to go.</p>
              <ul>
                <li>Dedicated VM - your instance only</li>
                <li>Dedicated database for memory and history</li>
                <li>Connect any provider with your own key</li>
                <li>Slack and Telegram integration</li>
                <li>All built-in tools included</li>
                <li>Full action log and dashboard</li>
                <li>Access control - invite or restrict users</li>
                <li>$20/month in model credits included</li>
                <li>No need to manage your own API keys</li>
                <li>Priority email support</li>
              </ul>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
            <div className="clawix-pricing__card">
              <h3>Teams</h3>
              <div className="clawix-pricing__amount">Custom</div>
              <p className="clawix-pricing__desc">Multiply the impact. One agent per person, with team-wide coordination.</p>
              <ul>
                <li>One dedicated instance per person</li>
                <li>Shared workspace tools (optional)</li>
                <li>Centralised billing and usage</li>
                <li>SSO and access management</li>
                <li>Custom system prompts per instance</li>
                <li>Dedicated support</li>
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
            <h2>Stop wasting hours on admin work.</h2>
            <p>Join the waitlist and be first when Clawix launches. Reclaim your time. Focus on what matters.</p>
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
                <h3>You're in.</h3>
                <p>We'll be in touch when Clawix launches. Get ready to reclaim your time.</p>
              </div>
            ) : (
              <>
                <h3>Join the waitlist</h3>
                <p>Be first to get your personal AI agent that actually handles your work.</p>
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
        description="Your personal AI agent. Connects your tools. Handles your work. Remembers everything. A venture by xsentry labs."
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
