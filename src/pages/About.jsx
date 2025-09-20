import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/about.css';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef();
  const heroRef = useRef();
  const storyRef = useRef();
  const missionVisionRef = useRef();
  const valuesRef = useRef();
  const statsRef = useRef();
  const teamRef = useRef();
  const joinCommunityRef = useRef();

  useGSAP(() => {
    // Hero section animation
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          heroRef.current.querySelector(".col-lg-6:first-child"),
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          heroRef.current.querySelector(".col-lg-6:last-child"),
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      },
    });

    // Our Story section animation
    ScrollTrigger.create({
      trigger: storyRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          storyRef.current.querySelector(".col-lg-6:first-child"),
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          storyRef.current.querySelector(".col-lg-6:last-child"),
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      },
    });

    // Mission and Vision section animation
    ScrollTrigger.create({
      trigger: missionVisionRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          missionVisionRef.current.querySelectorAll(".col-lg-6"),
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          }
        );
      },
    });

    // Our Values section animation
    ScrollTrigger.create({
      trigger: valuesRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          valuesRef.current.querySelectorAll(".col-md-4"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          valuesRef.current.querySelector(".col-md-8"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      },
    });

    // Stats section animation
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".col-md-3, .col-6"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          }
        );
      },
    });

    // Our Team section animation
    ScrollTrigger.create({
      trigger: teamRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          teamRef.current.querySelectorAll(".col-md-4"),
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          }
        );
        gsap.fromTo(
          teamRef.current.querySelector(".text-center a"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      },
    });

    // Join Our Community section animation
    ScrollTrigger.create({
      trigger: joinCommunityRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          joinCommunityRef.current.querySelector(".col-lg-8"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          joinCommunityRef.current.querySelectorAll(".d-flex a"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.2,
          }
        );
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <section className="about-hero" ref={heroRef}>
        <div className="container-xl">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title" style={{ color:" #8b4513" }}>About Campus Connect</h1>
              <p className="hero-subtitle" style={{
                 
                   color: "black",
                  
                }}>
                Connecting students, faculty, and the entire campus community
                through memorable events and experiences.Connecting students, faculty, and the entire campus community
                through memorable events and experiences.Connecting students, faculty, and the entire campus community
                through memorable events and experiences.
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#8B4513",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Our History
              </button>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <video
                className="category-media"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./l.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="our-story" ref={storyRef}>
        <div className="container-xl">
          <h2 className="section-title">Our Story</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="./1.jpg"
                alt="Campus event"
                className="story-image w-100"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="subsection-title">
                From a Simple Idea to Campus-Wide Impact
              </h3>
              <p>
                CampusConnect was founded in 2018 by a group of students who
                noticed how difficult it was to stay informed about campus
                events. What started as a simple event calendar has evolved
                into the comprehensive platform it is today.
              </p>
              <p>
                Our journey began when we realized that students were missing
                out on valuable opportunities simply because they didn't know
                about them. Faculty were struggling to promote their events,
                and student organizations found it challenging to reach their
                target audience.
              </p>
              <p>
                Today, CampusConnect serves over 15,000 students and 500+
                faculty members across multiple departments, helping to
                organize, promote, and manage hundreds of events each year.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#8B4513",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Learn More About Our Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt" ref={missionVisionRef}>
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="pe-lg-4">
                <h2 className="section-title text-lg-start">Our Mission</h2>
                <div className="mission-icon">
                  <i className="bi bi-bullseye" />
                </div>
                <p>
                  Our mission is to create a vibrant campus community by
                  connecting students with events, activities, and
                  opportunities that enrich their college experience.
                </p>
                <p>
                  We believe that campus events play a crucial role in student
                  development, fostering connections, and creating memories
                  that last a lifetime.
                </p>
                <p>
                  By providing a centralized platform for event management and
                  discovery, we aim to make campus life more engaging,
                  inclusive, and memorable for everyone.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <h2 className="section-title text-lg-start">Our Vision</h2>
                <div className="mission-icon">
                  <i className="bi bi-eye" />
                </div>
                <p>
                  We envision a campus where every student feels connected,
                  engaged, and informed about the opportunities available to
                  them.
                </p>
                <p>
                  Our goal is to become the central nervous system of campus
                  life, where students don't just attend events but actively
                  shape the campus culture through their participation and
                  leadership.
                </p>
                <p>
                  We're committed to continuously improving our platform to
                  meet the evolving needs of our campus community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" ref={valuesRef}>
        <div className="container-xl">
          <h2 className="section-title">Our Values</h2>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="text-center">
                <div className="mission-icon">
                  <i className="bi bi-people" />
                </div>
                <h4 className="subsection-title">Community</h4>
                <p>
                  We believe in the power of bringing people together to
                  create a sense of belonging and shared purpose.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="text-center">
                <div className="mission-icon">
                  <i className="bi bi-lightbulb" />
                </div>
                <h4 className="subsection-title">Innovation</h4>
                <p>
                  We continuously seek new ways to improve the campus event
                  experience through technology and creative solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="text-center">
                <div className="mission-icon">
                  <i className="bi bi-shield-check" />
                </div>
                <h4 className="subsection-title">Inclusivity</h4>
                <p>
                  We're committed to creating a platform that welcomes and
                  represents all members of our diverse campus community.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <ul className="values-list">
                <li>
                  We prioritize user experience, making our platform intuitive
                  and easy to use for everyone
                </li>
                <li>
                  We value transparency in our operations and communications
                </li>
                <li>
                  We foster collaboration between students, faculty, and
                  administration
                </li>
                <li>
                  We're dedicated to reliability, ensuring our platform is
                  always available when needed
                </li>
                <li>
                  We embrace feedback and continuously strive to improve based
                  on user input
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="container-xl">
          <div className="row">
            <div className="col-md-3 col-6 mb-5 mb-md-0">
              <div className="stat-number" data-count={5000}>
                5000+
              </div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="col-md-3 col-6 mb-5 mb-md-0">
              <div className="stat-number" data-count={750}>
                750+
              </div>
              <div className="stat-label">Events Yearly</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-number" data-count={95}>
                95%
              </div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-number" data-count={50}>
                50+
              </div>
              <div className="stat-label">Campus Partners</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt" id="our-team" ref={teamRef}>
        <div className="container-xl">
          <h2 className="section-title">Our Team</h2>
          <p className="text-center mb-5">
            Meet the dedicated individuals who make CampusConnect possible
          </p>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="team-member">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a9c7c7c7c7c7c7c7c7c7c7c7c7c7c7"
                  alt="Team member"
                  className="team-img"
                />
                <h4 className="team-name">Sarah Johnson</h4>
                <div className="team-role">Founder &amp; Director</div>
                <p>
                  Passionate about creating connections and enhancing campus
                  life.
                </p>
                <div className="team-social">
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#">
                    <i className="bi bi-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="team-member">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c"
                  alt="Team member"
                  className="team-img"
                />
                <h4 className="team-name">Michael Chen</h4>
                <div className="team-role">Technical Lead</div>
                <p>
                  Ensures our platform runs smoothly and implements new
                  features.
                </p>
                <div className="team-social">
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="bi bi-github" />
                  </a>
                  <a href="#">
                    <i className="bi bi-envelope" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="team-member">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c"
                  alt="Team member"
                  className="team-img"
                />
                <h4 className="team-name">Jessica Williams</h4>
                <div className="team-role">Event Coordinator</div>
                <p>
                  Works with student organizations to promote and manage their
                  events.
                </p>
                <div className="team-social">
                  <a href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    <i className="bi bi-envelope" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              style={{
                padding: "10px 20px",
                backgroundColor: "#8B4513",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              View Full Team
            </a>
          </div>
        </div>
      </section>

      <section className="content-section" ref={joinCommunityRef}>
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Join Our Community</h2>
              <p className="mb-4">
                Whether you're a student looking to get involved, a faculty
                member organizing an event, or a department seeking to promote
                your activities, CampusConnect is here to help.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link
                  to={`/signup`}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#8B4513",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Create an Account
                </Link>
                <Link
                  to={`/events`}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#8B4513",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  List an Event
                </Link>
                <Link
                  to={`/contact`}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#8B4513",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;