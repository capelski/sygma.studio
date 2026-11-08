import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Intro() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const openMenu = () => {
    // With reduced motion there are no transitions, so no transitionend will fire.
    if (reducedMotion()) navigate('/home')
    else setOpen(true)
  }

  return (
    <div className={`intro${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="intro-plus"
        onClick={openMenu}
        disabled={open}
        aria-label="Enter"
      />
      {/* The plus shrinks into the dot of "sygma.studio"; the text sits around it.
          The logo fade-in is the last step of the animation, so go to the home when it ends. */}
      <p
        className="intro-logo"
        aria-hidden="true"
        onTransitionEnd={(e) => {
          if (open && e.propertyName === 'opacity') navigate('/home')
        }}
      >
        <span className="intro-logo-start">
          sygm<b>a</b>
        </span>
        <span className="intro-logo-end">studio</span>
      </p>
    </div>
  )
}
