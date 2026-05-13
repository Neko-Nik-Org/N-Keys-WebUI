import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'
import { roadmapEntries } from '../data/roadmapData'
import { useState } from 'react'

function RoadmapPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const highlightText = (text, term) => {
    if (!term) return text
    const parts = text.split(new RegExp(`(${term})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  const filteredEntries = roadmapEntries.filter((entry) => {
    const lowerSearchTerm = searchTerm.toLowerCase()
    return (
      entry.title.toLowerCase().includes(lowerSearchTerm) ||
      entry.description.toLowerCase().includes(lowerSearchTerm) ||
      entry.range.toLowerCase().includes(lowerSearchTerm)
    )
  })

  return (
    <>
      <SeoMeta
        title="Roadmap"
        description="Explore the N-Keys roadmap with upcoming milestones, platform improvements, and security-focused releases for environment and configuration management teams."
      />

      <PageHeader
        title="Roadmap"
        subtitle="Discover our timeline with key milestones, detailed descriptions, and links to learn more."
      />

      <section className="container section section-tight roadmap-section">
        <input
          type="text"
          placeholder="Search roadmap by title, description, or date . . ."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="roadmap-search-bar"
        />

        <div className="roadmap-list" role="list">
          {filteredEntries.map((entry) => (
            <article key={entry.id} className="roadmap-item" role="listitem">
              <div className="roadmap-main">
                <div className={entry.done ? 'roadmap-content is-done' : 'roadmap-content'}>
                  <p className="roadmap-range">{highlightText(entry.range, searchTerm)}</p>
                  <h3 className="roadmap-title">{highlightText(entry.title, searchTerm)}</h3>
                  <p className="roadmap-description">{highlightText(entry.description, searchTerm)}</p>
                </div>

                {entry.done && <span className="roadmap-done">Done</span>}

                {entry.learnMoreUrl && (
                  <a
                    className="roadmap-link"
                    href={entry.learnMoreUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default RoadmapPage