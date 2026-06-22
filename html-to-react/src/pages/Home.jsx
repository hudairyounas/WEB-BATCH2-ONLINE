import React from "react";
import topCard from "../api/topCard.json";
import studentsSay from "../api/studentsSay.json"
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section id="hero" class="hero">
        <div className="container center">
          <h1>Learn Modern Web Development</h1>
          <p>
            Master the skills needed to build stunning, high-performance web
            applications with our industry-leading coding courses.
          </p>
          <a href="#courses" className="btn-primary">
            Explore Courses
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="content">
            <div className="about-text">
              <h2>Why FuturePlix?</h2>
              <p>
                We provide a project-based learning environment that prepares
                students for the real world. Our curriculum is designed by
                industry experts to ensure you stay ahead of the curve.
              </p>
              <p>
                From HTML/CSS basics to advanced React and Node.js, we cover
                everything you need to become a Full-Stack Developer.
              </p>
            </div>
            <div class="about-image">
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  background: "linear-gradient(135deg, #4f46e5, #a855f7)",
                  borderRadius: "20px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="courses">
        <div className="container">
          <h2>Our Top Courses</h2>
          <div className="course-grid">
            {topCard.map((item) => (
              <article className="course-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" class="testimonials">
        <div className="container">
          <h2 style={{textAlign: "center", marginBottom: "40px"}}>
            What Our Students Say
          </h2>
          <div class="testimonial-container">
           {studentsSay.map((item) => {

             return <article className="testimonial-card">
              <p>
                "{item.description}"
              </p>
              <strong>- {item.name}</strong>
            </article>
          })}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
