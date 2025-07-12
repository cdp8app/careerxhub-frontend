"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function CountUp({ end, duration = 2000, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    let animationFrameId: number
    
    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animate(timestamp)
    }
    
    const animate = (timestamp: number) => {
      const runtime = timestamp - startTime
      const progress = runtime / duration
      
      if (runtime < duration) {
        const value = Math.round(end * Math.min(progress, 1))
        setCount(value)
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(end)
        cancelAnimationFrame(animationFrameId)
      }
    }
    
    animationFrameId = requestAnimationFrame(startAnimation)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, isInView])
  
  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}