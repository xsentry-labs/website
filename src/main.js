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

// Footer copyright year
const copy = document.querySelector('.footer__copy')
if (copy) copy.textContent = `\u00A9 ${new Date().getFullYear()} xsentry labs`
