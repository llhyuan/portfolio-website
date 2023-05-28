import '../scss/_Main.scss';
import { skills } from '../assets/data/skills';

import { useEffect, useRef, useContext } from 'react';

import { navContext } from '../components/navContext';
import { projects } from '../assets/data/projects';
import { experience } from '../assets/data/experience';
import Experience from './Exp';
import Project from './Project';
import Form from './Form';

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
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      let observedEle = entries[0];

      if (observedEle.isIntersecting) {
        setNavStatus('nav_' + observedEle.target.id);
      }
    }, options);

    observed.forEach((ele) => observer.observe(ele));
  }, [setNavStatus]);

  return (
    <article className='main'>
      <section ref={aboutRef} className='about' id='about'>
        <header>ABOUT</header>
        <div className='mx-8'>
          <p className='text-[--text-secondary]'>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p className='text-[--text-secondary]'>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I&apos;ve also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
        </div>
        <div className='px-8'>
          <p className='text-xl'>Techical Skills:</p>
          <div className='flex flex-wrap gap-y-4'>
            {skills.technical.map((item, index) => (
              <span
                key={index}
                className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'
              >
                {item}
              </span>
            ))}
          </div>
          <p className='text-xl mt-4'>Tools:</p>
          <div className='flex flex-wrap gap-y-4'>
            {skills.tools.map((item, index) => (
              <span
                key={index}
                className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'
              >
                {item}
              </span>
            ))}
          </div>
          <p className='text-xl mt-4'>Soft Skills:</p>
          <div className='flex flex-wrap gap-y-4'>
            {skills.soft.map((item, index) => (
              <span
                key={index}
                className='inline-block text-[--bg-color] font-bold bg-[--text-highlight2] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'
              >
                {item}
              </span>
            ))}
          </div>
          <p className='text-xl mt-4'>Exploring into Backend:</p>
          <div className='flex flex-wrap gap-y-4'>
            {skills.backend.map((item, index) => (
              <span
                key={index}
                className='inline-block text-[--bg-color] font-bold bg-[--text-secondary] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section ref={prjRef} className='projects' id='projects'>
        <header>PROJECTS</header>
        <Project key={0} details={projects[0]} />
        <Project key={1} details={projects[0]} />
        <Project key={2} details={projects[0]} />
        <Project key={3} details={projects[0]} />
      </section>
      <section ref={expRef} className='exp-section' id='experience'>
        <header>EXPERIENCE</header>
        <Experience key={0} details={experience[0]} />
        <Experience key={1} details={experience[0]} />
      </section>
      {formStatus ? <Form setFormStatus={setFormStatus} /> : ''}

      <section id='footer'>
        <div className='bg-[--bg-color-nav] py-4 lg:bg-[--bg-color] lg:py-0'>
    <p className='text-[1rem] text-[--text-secondary] px-8 pb-1'>About this site:</p>
          <p className='text-[0.9rem] text-[--text-secondary] px-8'>
            Design Approach: Hand sketching on iPad (
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://www.figma.com/'
              target='_blank'
              rel='noreferrer'
            >
              Figma
            </a>{' '}
            that is).
          </p>
          <p className='text-[0.9rem] text-[--text-secondary] px-8'>
            Built with{' '}
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://react.dev/'
              target='_blank'
              rel='noreferrer'
            >
              React
            </a>{' '}
            and{' '}
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noreferrer'
            >
              Tailwind CSS
            </a>
            , deployed with{' '}
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://vitejs.dev/'
              target='_blank'
              rel='noreferrer'
            >
              Vite
            </a>
            . Coded with{' '}
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://neovim.io/'
              target='_blank'
              rel='noreferrer'
            >
              NeoVim
            </a>
            . Color scheme inspired by{' '}
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='http://neovimcraft.com/plugin/sainnhe/gruvbox-material/index.html'
              target='_blank'
              rel='noreferrer'
            >
              Gruvbox Material
            </a>
            , experimented around using  <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://palettte.app'
              target='_blank'
              rel='noreferrer'
            >
              Palettte
            </a>.
          </p>
          <p className='text-[0.9rem] text-[--text-secondary] px-8 mt-4'>
            &#169; Hangyuan Liu 2023
          </p>
        </div>
      </section>
    </article>
  );
}
