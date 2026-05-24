import type { Job } from '../data/jobs'
import { JobCard } from './JobCard'

interface JobListProps {
  jobs: Job[]
}

export function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return <p className="empty-state">No jobs available at the moment.</p>
  }

  return (
    <section className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  )
}
