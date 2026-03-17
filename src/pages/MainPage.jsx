import { useEffect, useRef } from 'react'
import HeroSection from '../components/HeroSection'
import FactorySection from '../components/FactorySection'
import ToolsSection from '../components/ToolsSection'
import Footer from '../components/Footer'

export default function MainPage() {
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const bg = bgRef.current
    if (!bg) return

    const onScroll = () => {
      const scrollY = window.scrollY
      const viewH = window.innerHeight
      // blur ramps from 2px at top to ~14px by the tools section
      const progress = Math.min(scrollY / (viewH * 2), 1)
      const blur = 2 + progress * 12
      bg.style.filter = `blur(${blur}px)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="bg-fixed" ref={bgRef}>
        <div className="bg-fixed__grain" />
      </div>
      <main className="content-overlay" ref={contentRef}>
        <HeroSection />
        <FactorySection />
        <ToolsSection />
        <Footer />
      </main>
    </>
  )
}
