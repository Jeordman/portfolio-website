import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import ReactPlayer from 'react-player';
import authO from '../assets/logos/auth0.png';
import chartJS from '../assets/logos/chartjs.png';
import cSharp from '../assets/logos/c#.png';
import css from '../assets/logos/css.jpeg';
import gitHub from '../assets/logos/github.png';
import html5 from '../assets/logos/html5.png';
import javascript from '../assets/logos/javascript.png';
import kali from '../assets/logos/kali linux.jpeg';
import macOS from '../assets/logos/macos.jpeg';
import materialUI from '../assets/logos/materialUI.png';
import node from '../assets/logos/node.png';
import photoshop from '../assets/logos/photoshop.jpeg';
import postgreSQL from '../assets/logos/postgresql.png';
import postico from '../assets/logos/postico.jpeg';
import react from '../assets/logos/react.png';
import redux from '../assets/logos/redux.png';
import sass from '../assets/logos/sass.png';
import socket from '../assets/logos/socket.png';
import ubuntu from '../assets/logos/ubuntu.png';
import windows from '../assets/logos/windows10.png';

import mePic1 from '../assets/images/mePic1.jpg';
import mePic2 from '../assets/images/mePic2.jpg';
import mePic3 from '../assets/images/me.jpg';
import mePic4 from '../assets/images/mePic4.jpg';

import Scroll from '../components/Scroll';

import './index.css';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'skills', name: 'Skills', icon: 'fa-laptop' },
  { id: 'portfolio', name: 'Projects', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Jeordin Callister </strong>
              <br />
              Full-Stack Web Developer
            </h2>
            <p>Take a look at some things I've made</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Projects
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="skills" className="seven">
        <div className="container"></div>

        <h1 class="skills-title">Skills</h1>

        <div class="skills-sections">
          {/* languages */}
          <section class="skills-section-label">Languages</section>
          <section>
            <img src={javascript} class="skills-images" />
            <p>JavaScript</p>
          </section>

          <section>
            <img src={cSharp} class="skills-images" />
            <p>C#</p>
          </section>
        </div>

        <div class="skills-sections">
          {/* front end */}
          <section class="skills-section-label">Front-End</section>

          <section>
            <img src={authO} class="skills-images" />
            <p>Auth0</p>
          </section>

          <section>
            <img src={html5} class="skills-images" />
            <p>HTML 5</p>
          </section>

          <section>
            <img src={react} class="skills-images" />
            <p>React</p>
          </section>

          <section>
            <img src={redux} class="skills-images" />
            <p>Redux</p>
          </section>
        </div>

        <div class="skills-sections">
          {/* back end */}
          <section class="skills-section-label">Back-End</section>

          <section>
            <img src={postgreSQL} class="skills-images" />
            <p>PostgreSQL</p>
          </section>

          <section>
            <img src={node} class="skills-images" />
            <p>Node.js</p>
          </section>

          <section>
            <img src={postico} class="skills-images" />
            <p>Postico</p>
          </section>
        </div>

        <div class="skills-sections">
          <section class="skills-section-label">Design</section>

          <section>
            <img src={css} class="skills-images" />
            <p>CSS3</p>
          </section>

          <section>
            <img src={materialUI} class="skills-images" />
            <p>Material UI</p>
          </section>

          <section>
            <img src={photoshop} class="skills-images" />
            <p>Photoshop</p>
          </section>

          <section>
            <img src={sass} class="skills-images" />
            <p>Sass</p>
          </section>
        </div>

        <div className="skills-sections">
          {/* other */}
          <section class="skills-section-label">Other Tech</section>
          <section class="specific-skills">
            <img src={gitHub} class="skills-images" />
            <p>GitHub</p>
          </section>

          <section>
            <img src={kali} class="skills-images" />
            <p>Kali Linux</p>
          </section>

          <section>
            <img src={macOS} class="skills-images" />
            <p>MacOS</p>
          </section>

          <section>
            <img src={windows} class="skills-images" />
            <p>Windows</p>
          </section>

          <section>
            <img src={chartJS} class="skills-images" />
            <p>ChartJS</p>
          </section>

          <section>
            <img src={socket} class="skills-images" />
            <p>Socket.io</p>
          </section>

          <section>
            <img src={ubuntu} class="skills-images" />
            <p>Ubuntu</p>
          </section>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Projects</h2>
          </header>

          {/* <p>Life</p> */}

          {/* <div className="skills-sections">

          {/* <section class="skills-section-label">Other Tech</section>
          <section class="specific-skills">
            <img src={gitHub} class="skills-images" />
            <p>GitHub</p>
          </section> */}

          <article class="vid-holder">
            <header class="vid">
              <ReactPlayer url="https://vimeo.com/353151671" playing loop />
            </header>

            <section class="description">
              <h3>Safe Haven</h3>
              <p>
                A mental health tracker and chat application.
                <br />
                <br />I created a wellness tracker that graphs users' <br />
                moods over time using CHART.JS as well as recording Journal
                entries. <br />
                Users may request counselors and a text message will be sent via
                TWILIO.
                <br /> If the counselor accepts the request there is a <br />
                chat room created using SOCKET.IO
              </p>

              <a
                href="https://github.com/Jeordman/personal-project"
                className={`icon fa-github`}
                target="_blank"
              >
                {' '}
                View on GitHub
                <span className="label">github</span>
              </a>
            </section>
          </article>

          <article className="vid-holder">
            <header class="vid">
              <ReactPlayer url="https://vimeo.com/361368375" playing loop />
            </header>

            <section class="description">
              <h3>Singularity</h3>
              <p>
                A re-imaged Discord adding Reddit-like functionality.
                <br />
                <br />
                We wanted to create a centralized social media/communication
                hub...
                <br /> a social singularity. This project required SOCKET.IO
                implementation <br /> as well as AUTH0 and MATERIALUI.
              </p>

              <a
                href="https://github.com/cyberspaghetti/Group_Project"
                className={`icon fa-github`}
                target="_blank"
              >
                {' '}
                View on GitHub
                <span className="label">github</span>
              </a>
            </section>
          </article>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <img className="me-pic-1" src={mePic1} />
          <img className="me-pic-4" src={mePic4} />
          <img className="me-pic-3" src={mePic3} />

          <p class="about-me">
            <br />
            <br />
            I was born with a huge interest in science and art, and as I have
            matured I discovered that TECH is the perfect intersection of art
            and science - True beauty. I have always been an tech enthusiast and
            I plan on bringing my passion and enthusiasm to work every day!
            <br />
            <br />
            I love a challenge and would consider problem solving one of my
            biggest strengths. I love feeling like I am part of a team,
            especially when we are united in something that can help others.
            When I set my mind to something I never give up and I believe
            strongly that with enough time and resources I can achieve anything.
            <br />
            <br />
            My free time is usually taken up by messing around with new tech,
            engrossing myself in my favorite games/books, and spending time with
            my girlfriend.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <div>
            <a
              href="https://github.com/jeordman/"
              className={`icon fa-github fa-lg`}
              target="_blank"
            >
              {' '}
              Checkout My GitHub
              <span className="label">github</span>
            </a>
          </div>
          <br></br>
          <div>
            <a
              href="mailto:callisterjeordin@gmail.com"
              className={`icon fa-envelope-o fa-lg`}
              target="_blank"
            >
              {' '}
              Send me an email
              <span className="label">github</span>
            </a>
          </div>

          <br></br>
          <a
            href="https://www.linkedin.com/in/jeordincallister/"
            className={`icon fa-linkedin fa-lg`}
            target="_blank"
          >
            {' '}
            View my linkedin
            <span className="label">github</span>
          </a>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
