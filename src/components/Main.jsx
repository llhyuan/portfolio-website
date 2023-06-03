import '../scss/_Main.scss';
import { skills } from '../assets/data/skills';
import { about } from '../assets/data/about';

import { useEffect, useRef, useContext } from 'react';

import { navContext } from '../components/navContext';
import { projects } from '../assets/data/projects';
import { experience } from '../assets/data/experience';
import Experience from './Exp';
import Project from './Project';
import Form from './Form';
import Footer from './Footer';

export default function Main({ formStatus, setFormStatus }) {
  const { setNavStatus } = useContext(navContext);

  const aboutRef = useRef();
  const prjRef = useRef();
  const expRef = useRef();

  useEffect(() => {
    let observed = [aboutRef.current, prjRef.current, expRef.current];
    let options = {
      root: null,
      rootMargin: '120px 0px 120px 0px',
      threshold: 0.4,
    };

    let observer = new IntersectionObserver((entries) => {
      let observedEle = entries[0];

      if (observedEle.isIntersecting) {
        setNavStatus('nav_' + observedEle.target.id);
        //console.log('nav_' + observedEle.target.id);
      }
    }, options);

    observed.forEach((ele) => observer.observe(ele));
  }, [setNavStatus]);

  return (
    <article className='main'>
      <section ref={aboutRef} className='about' id='about'>
        <header>ABOUT</header>
        <div className='mx-8'>
          {about['about'].map((paragraph, index) => (
            <p key={index} className='text-[--text-secondary]'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='px-8'>
          <div className='my-2'>
            <p className='text-xl'>Technical Skills:</p>
            <div className='flex flex-wrap gap-y-4'>
              {skills.technical.map((item, index) => (
                <span
                  key={index}
                  className='block text-[--bg-color] font-bold px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color] bg-[--text-highlight]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className='my-2'>
            <p className='text-xl'>Tools:</p>
            <div className='flex flex-wrap gap-y-4'>
              {skills.tools.map((item, index) => (
                <span
                  key={index}
                  className='block text-[--bg-color] font-bold px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color] bg-[--text-highlight1]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className='my-2'>
            <p className='text-xl'>Soft Skills:</p>
            <div className='flex flex-wrap gap-y-4'>
              {skills.soft.map((item, index) => (
                <span
                  key={index}
                  className='block text-[--bg-color] font-bold px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color] bg-[--text-highlight2]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className='my-2'>
            <p className='text-xl'>Exploring into Bakcend:</p>
            <div className='flex flex-wrap gap-y-4'>
              {skills.backend.map((item, index) => (
                <span
                  key={index}
                  className='block text-[--bg-color] font-bold px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color] bg-[--text-secondary]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={prjRef} className='projects' id='projects'>
        <header>PROJECTS</header>
        {projects.map((project, index) => (
          <Project key={index} details={project} />
        ))}
      </section>
      <section ref={expRef} className='exp-section' id='experience'>
        <header>EXPERIENCE</header>
        {experience.map((exp, index) => (
          <Experience key={index} details={exp} />
        ))}
      </section>
      <section id='feedback'>
        {formStatus ? <Form setFormStatus={setFormStatus} /> : ''}
      </section>

      <section id='footer'>
        <Footer />
      </section>
    </article>
  );
}

