import './styles.css'

// Scroll-driven background blur
const bg = document.querySelector('.bg-fixed')
if (bg) {
  const onScroll = () => {
    const progress = Math.min(window.scrollY / (window.innerHeight * 2), 1)
    bg.style.filter = `blur(${2 + progress * 12}px)`
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

// Reveal sections on scroll
document.querySelectorAll('[data-reveal]').forEach((el) => {
  const threshold = parseFloat(el.dataset.reveal) || 0.2
  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(el.classList[0] + '--visible')
      }
    },
    { threshold }
  ).observe(el)
})

// Footer copyright year
const copy = document.querySelector('.footer__copy')
if (copy) copy.textContent = `\u00A9 ${new Date().getFullYear()} xsentry labs. All rights reserved.`
