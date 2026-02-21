import { useEffect, useState } from 'react'
import Footer from '../components/Footer'

export default function ClawixPage() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Clawix — Your Personal AI Assistant, Always On'
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
            <p className="hero__tagline">Your personal AI assistant. Dedicated to you. Always on.</p>
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
          <h2>Not a shared chatbot. Your own private instance.</h2>
          <p>
            Clawix gives you a personal AI assistant that runs 24/7 on a dedicated VM we
            maintain for you. Your own isolated environment, your own persistent memory,
            your own conversation history. It lives in your Slack, your Telegram, or wherever
            you work — and only you can talk to it, unless you decide otherwise.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="clawix-steps" id="how-it-works">
        <div className="clawix-steps__inner">
          <div className="clawix-steps__header">
            <h2>How it works</h2>
            <p>You sign up. We spin it up. You start talking.</p>
          </div>
          <div className="clawix-steps__grid">
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">01</div>
              <h3>Configure</h3>
              <p>Pick your model and connect your channels.</p>
              <ul>
                <li>Choose your LLM provider — Anthropic, OpenAI, Gemini, or more</li>
                <li>Connect Slack, Telegram, or both</li>
                <li>Set a custom persona and system prompt</li>
                <li>Choose which built-in tools to enable</li>
                <li>Optionally invite others to talk to your agent</li>
              </ul>
            </div>
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">02</div>
              <h3>We spin it up</h3>
              <p>Your dedicated instance is ready in seconds.</p>
              <ul>
                <li>Isolated VM — your agent, your data, nobody else's</li>
                <li>Dedicated database for memory, notes, and history</li>
                <li>Always on — no laptop to keep running</li>
                <li>We handle uptime, updates, and infrastructure</li>
                <li>Your keys and data never touch shared resources</li>
              </ul>
            </div>
            <div className="clawix-steps__card">
              <div className="clawix-steps__num">03</div>
              <h3>Start talking</h3>
              <p>Your assistant is ready — ask it anything.</p>
              <ul>
                <li>Message it in Slack or Telegram like a colleague</li>
                <li>It searches the web, checks stocks, saves notes</li>
                <li>It remembers things you tell it across sessions</li>
                <li>Streaming replies — tokens appear as they're generated</li>
                <li>Full action log of everything it's done</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="clawix-features" id="features">
        <div className="clawix-features__inner">
          <div className="clawix-features__header">
            <h2>Built for one person. You.</h2>
            <p>Private by default. Persistent. Always available.</p>
          </div>
          <div className="clawix-features__grid">
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3>Dedicated VM</h3>
              <p>Your agent runs in its own isolated environment. No shared compute, no noisy neighbours. Your instance is yours alone — unless you invite someone in.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3>Your Own Memory</h3>
              <p>A dedicated database stores your notes, conversation history, and saved context. Your agent remembers what you tell it — and that data never mingles with anyone else's.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>Works Where You Do</h3>
              <p>Slack, Telegram, or both. Your assistant lives inside the tools you already use — no new app to open, no browser tab to keep around.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Bring Your Model</h3>
              <p>Connect your own API key from Anthropic, OpenAI, OpenRouter, Gemini, or Together. You choose the model, you own the costs. Switch anytime from your dashboard.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              </div>
              <h3>Built-In Tools</h3>
              <p>Web search, real-time stock quotes, notes and memory, file sandbox, reminders. Enable the tools you want — your agent will use them automatically.</p>
            </div>
            <div className="clawix-features__card">
              <div className="clawix-features__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h3>Full Action Log</h3>
              <p>Every tool call, every reply, every event — logged and searchable. A clear record of everything your assistant has done, always accessible from your dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Log Preview */}
      <section className="clawix-workbook" id="action-log">
        <div className="clawix-workbook__inner">
          <div className="clawix-workbook__content">
            <h2>Everything your assistant does. Logged.</h2>
            <p>A chronological record of every action your agent takes — tool calls, replies, reminders fired. You always know what it's done and when it did it.</p>
            <ul>
              <li><strong>Timestamp</strong> — when it happened</li>
              <li><strong>Action</strong> — what the agent did</li>
              <li><strong>Type</strong> — tool call, reply, or system event</li>
              <li><strong>Channel</strong> — which channel triggered the action</li>
            </ul>
            <p className="clawix-workbook__extra">Searchable from your dashboard. Exportable any time. Retained for the life of your instance.</p>
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
                <span className="clawix-workbook__mock-action">Reminder fired — sent to @nihal</span>
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
            <h2>Simple pricing</h2>
            <p>One assistant. Your own VM. No surprises.</p>
          </div>
          <div className="clawix-pricing__grid clawix-pricing__grid--three">
            <div className="clawix-pricing__card">
              <h3>Bring Your Own Key</h3>
              <div className="clawix-pricing__amount">$25<span>/month</span></div>
              <p className="clawix-pricing__desc">Connect your own API key. We host everything else.</p>
              <ul>
                <li>Dedicated VM — your instance only</li>
                <li>Dedicated database for memory and history</li>
                <li>Connect any provider with your own key</li>
                <li>Slack and Telegram integration</li>
                <li>All built-in tools included</li>
                <li>Full action log and dashboard</li>
                <li>Access control — invite or restrict users</li>
                <li>Email support</li>
              </ul>
              <p className="clawix-pricing__note">You pay your LLM provider directly. This is the hosting fee.</p>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
            <div className="clawix-pricing__card clawix-pricing__card--featured">
              <h3>All-In</h3>
              <div className="clawix-pricing__amount">$50<span>/month</span></div>
              <p className="clawix-pricing__desc">Everything in BYOK, plus model credits included.</p>
              <ul>
                <li>Dedicated VM — your instance only</li>
                <li>Dedicated database for memory and history</li>
                <li>Connect any provider with your own key</li>
                <li>Slack and Telegram integration</li>
                <li>All built-in tools included</li>
                <li>Full action log and dashboard</li>
                <li>Access control — invite or restrict users</li>
                <li>$20/month in model credits included</li>
                <li>No need to manage your own API keys</li>
                <li>Priority email support</li>
              </ul>
              <span className="clawix-pricing__coming-soon">Coming soon</span>
            </div>
            <div className="clawix-pricing__card">
              <h3>Teams</h3>
              <div className="clawix-pricing__amount">Custom</div>
              <p className="clawix-pricing__desc">Multiple dedicated instances for your whole team.</p>
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
            <h2>Your own AI assistant, waiting.</h2>
            <p>Join the waitlist and be first to know when Clawix is live.</p>
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
                <p>Be the first to get your own dedicated Clawix instance.</p>
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
        description="Your personal AI assistant, dedicated to you. A venture by xsentry labs."
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
