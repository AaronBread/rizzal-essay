"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "introduction", title: "I. Introduction" },
  { id: "biological", title: "II. Biological Factors" },
  { id: "environmental", title: "III. Environmental Factors" },
  { id: "experiences", title: "IV. Life Experiences" },
  { id: "character", title: "V. Character Analysis" },
  { id: "pitfalls", title: "VI. Pitfalls and Heroism" },
  { id: "conclusion", title: "VII. Conclusion" },
  { id: "references", title: "References" },
]

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="sticky top-32 space-y-1">
      <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Contents</h2>
      <ul className="space-y-2">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={cn(
                "text-left text-sm transition-colors hover:text-primary w-full py-1 px-2 rounded-sm",
                activeSection === id ? "text-primary font-semibold bg-secondary" : "text-muted-foreground",
              )}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
