import { useState } from 'react'
import type { Job } from '../data/jobs'

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <article className="job-card">
      <div className="job-card-badge">
        <span className="badge-location">📍 {job.location}</span>
      </div>

      <div className="job-card-main">
        <div className="job-card-info">
          <h2 className="job-title">{job.title}</h2>
          <p className="job-company">{job.company}</p>
        </div>
        <span className="job-salary">{job.salary}</span>
      </div>

      <div className="job-card-divider" />

      <button
        type="button"
        className={`details-button ${showDetails ? 'active' : ''}`}
        onClick={() => setShowDetails((value) => !value)}
      >
        <span>{showDetails ? '▼ Hide Details' : '▶ Show Details'}</span>
      </button>

      {showDetails && (
        <div className="job-details">
          <p>{job.description}</p>
        </div>
      )}
    </article>
  )
}
