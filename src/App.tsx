import './App.css'
import { useState } from 'react'
import { JobList } from './components/JobList'
import { jobs } from './data/jobs'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase()
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    )
  })

  return (
    <main className="app-shell">
      <nav className="top-nav">
        <div className="nav-left">
          <a className="nav-logo" href="#home">Jobly</a>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#explore">Explore</a>
            <a href="#subscribe">Subscribe</a>
            <a href="#courses">Courses</a>
          </div>
        </div>

        <div className="nav-search">
          <input
            type="search"
            placeholder="Search for anything"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className={`nav-actions ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#business">Business</a>
          <a href="#teach" className="nav-pill">Teach</a>
          <div className="nav-profile">PO</div>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Career Opportunities</p>
          <h1>Find your next role with confidence.</h1>
          <p>
            Discover curated job openings from top companies, with remote and local
            roles that fit your skills and lifestyle. Stay ahead in your career
            without the noise.
          </p>
          <div className="hero-actions">
            <button className="primary-button">Browse jobs</button>
            <button className="secondary-button">View openings</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-spotlight" />
          <div className="hero-ring" />

          <div className="hero-card card-one">
            <img
              className="hero-photo"
              src="https://salemuniversity.edu.ng/wp-content/uploads/2025/05/Black-student-studying.png"
              alt="Student working on a laptop"
            />
            <div className="hero-card-content">
              <span className="hero-card-label">Featured graduate</span>
              <h2>John</h2>
              <p>Front-end scholar now building UI at Tech Corp.</p>
            </div>
          </div>

          <div className="hero-card card-two">
            <img
              className="hero-photo"
              src="https://b3718337.smushcdn.com/3718337/wp-content/uploads/2022/08/AdobeStock_429176281.jpg?lossy=2&strip=1&webp=1&size=1125x0"
              alt="Student smiling confidently"
            />
            <div className="hero-card-content">
              <span className="hero-card-label">Alumni story</span>
              <h2>Princess</h2>
              <p>Product thinker bringing ideas to life in Lagos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="listings-header">
        <div className="listings-header-content">
          <div>
            <h2>Explore open roles</h2>
            <p>Find positions that match your skills and aspirations.</p>
          </div>
          <div className="listings-filters">
            <button className="filter-btn">All roles</button>
            <button className="filter-btn">Remote</button>
            <button className="filter-btn">New</button>
          </div>
        </div>
      </section>

      <JobList jobs={filteredJobs} />
    </main>
  )
}

export default App
