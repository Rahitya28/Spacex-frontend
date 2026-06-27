const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="hero-eyebrow">About This Project</p>
        <h1 className="about-title">SpaceX Mission Management System</h1>
        <p className="about-lead">
          A full-stack mission control dashboard for tracking SpaceX launches,
          crew missions, and fleet operations — built with modern web
          technologies.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Project Overview</h2>
          <p>
            The SpaceX Mission Management System is a professional dashboard
            that displays and manages mission data from a deployed Node.js
            backend. This frontend provides an intuitive interface to browse,
            search, filter, and explore mission details with a SpaceX-inspired
            design.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>Frontend Stack</h3>
            <ul>
              <li>React with JavaScript</li>
              <li>Vite build tool</li>
              <li>React Router DOM</li>
              <li>Axios for API integration</li>
              <li>Responsive CSS with animations</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Backend Stack</h3>
            <ul>
              <li>Node.js &amp; Express.js</li>
              <li>MongoDB Atlas &amp; Mongoose</li>
              <li>JWT Authentication &amp; BcryptJS</li>
              <li>Multer &amp; Cloudinary image storage</li>
              <li>Deployed on Render</li>
            </ul>
          </div>
        </div>

        <div className="about-card">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <div>
                <h4>Mission Dashboard</h4>
                <p>
                  Browse all missions in a responsive card grid with Cloudinary
                  images and real-time data from the API.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <div>
                <h4>Search &amp; Filter</h4>
                <p>
                  Search by mission name, filter by status (Scheduled, Success,
                  Failed), and sort by launch date.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📋</span>
              <div>
                <h4>Mission Details</h4>
                <p>
                  View complete mission information including rocket, crew count,
                  launch date, status, and description.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-card about-footer-card">
          <h2>API Endpoint</h2>
          <a
            href="https://spacex-backend-g576.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="api-link"
          >
            https://spacex-backend-g576.onrender.com
          </a>
          <p className="about-credit">
            Built by Rahitya28 · SpaceX Mission Management System
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
