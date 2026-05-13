import PageHeader from '../components/PageHeader'
import SeoMeta from '../components/SeoMeta'
import { roadmapEntries } from '../data/roadmapData'
import { useState } from 'react'

function RoadmapPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEntries = roadmapEntries.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <SeoMeta
        title="Roadmap"
        description="Explore the N-Keys roadmap with upcoming milestones, platform improvements, and security-focused releases for env and config management teams."
      />

      <PageHeader
        title="Roadmap"
        subtitle="Simple timeline with date range, title, short description, and optional link."
      />

      <section className="container section section-tight roadmap-section">
        <input
          type="text"
          placeholder="Search roadmap..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="roadmap-search-bar"
        />

        <div className="roadmap-list" role="list">
          {filteredEntries.map((entry) => (
            <article key={entry.id} className="roadmap-item" role="listitem">
              <div className="roadmap-main">
                <div className={entry.done ? 'roadmap-content is-done' : 'roadmap-content'}>
                  <p className="roadmap-range">{entry.range}</p>
                  <h3 className="roadmap-title">{entry.title}</h3>
                  <p className="roadmap-description">{entry.description}</p>
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