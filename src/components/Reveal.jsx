import { useEffect, useRef, useState } from 'react'

// Fades content in once when it scrolls into view.
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`transition duration-700 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {children}
    </div>
  )
}
