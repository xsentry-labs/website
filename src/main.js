import './styles.css'

// Theme toggle (persisted in localStorage)
const themeBtn = document.querySelector('.theme-toggle')
const stored = localStorage.getItem('theme')
if (stored) document.documentElement.setAttribute('data-theme', stored)

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light'
    if (isLight) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.removeItem('theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  })
}

// Reveal sections on scroll
document.querySelectorAll('[data-reveal]').forEach((el) => {
  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) el.classList.add('section--visible')
    },
    { threshold: 0.15 }
  ).observe(el)
})

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle')
const links = document.querySelector('.nav__links')
if (toggle && links) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    links.classList.toggle('open')
  })
  // Close menu on link click
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active')
      links.classList.remove('open')
    })
  })
}

// Modal
const modal = document.getElementById('modal')
if (modal) {
  const backdrop = modal.querySelector('.modal__backdrop')
  const closeBtn = modal.querySelector('.modal__close')

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      modal.classList.add('open')
    })
  })

  const close = () => modal.classList.remove('open')
  if (closeBtn) closeBtn.addEventListener('click', close)
  if (backdrop) backdrop.addEventListener('click', close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })
}

// Hero word rotation
const rotateEl = document.querySelector('.hero__rotate')
if (rotateEl) {
  const words = ['products', 'solutions', 'applications']
  let idx = 0

  setInterval(() => {
    rotateEl.style.opacity = '0'
    rotateEl.style.transform = 'translateY(-0.2em)'

    setTimeout(() => {
      idx = (idx + 1) % words.length
      rotateEl.textContent = words[idx]
      rotateEl.style.transition = 'none'
      rotateEl.style.transform = 'translateY(0.2em)'
      rotateEl.offsetHeight // reflow
      rotateEl.style.transition = ''
      rotateEl.style.opacity = '1'
      rotateEl.style.transform = 'translateY(0)'
    }, 300)
  }, 2500)
}

// Footer copyright year
const copy = document.querySelector('.footer__copy')
if (copy) copy.textContent = `\u00A9 ${new Date().getFullYear()} xsentrylabs`
