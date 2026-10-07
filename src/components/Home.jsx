import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return data ? (
    <Fade triggerOnce className="home-fade-container">
      <section className="devops-hero">

        {/* Availability */}
        <div className="availability-badge">
          <span className="status-dot" />
          {data?.status}
        </div>

        {/* DevOps Hero Image */}
        <div className="devops-image-frame">
          <img
            src="/images/tameem-devops.png"
            alt="Tameem working on DevOps and Cloud infrastructure"
            className="devops-main-image"
          />
        </div>

        {/* Technology Stack */}
        <div className="tech-line">
          AWS <span>•</span> TERRAFORM <span>•</span> KUBERNETES
          <span> • </span> OBSERVABILITY
        </div>

        {/* Main Headline */}
        <h1 className="devops-headline">
          I Build Reliable Cloud Infrastructure and
          <br />
          <span>Production-Ready DevOps Systems</span>
        </h1>

        {/* Rotating Roles */}
        <div className="devops-role">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
              delay: 55,
              deleteSpeed: 30,
            }}
          />
        </div>

        {/* Description */}
        <p className="devops-description">
          DevOps and Cloud Engineer focused on building scalable cloud
          infrastructure, automated CI/CD pipelines, containerized workloads,
          and reliable production systems.
        </p>

        {/* Actions */}
        <div className="devops-actions">
          <Link
            className="devops-btn primary-btn"
            to="/projects"
          >
            Explore Featured Projects
          </Link>

          <a
            className="devops-btn secondary-btn"
            href="https://github.com/ibrahim0312"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Projects
          </a>

          <a
            className="devops-btn secondary-btn"
            href="https://www.linkedin.com/in/shaik-tameem-ibrahim-509b2026b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </section>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;