import '../scss/_Main.scss';
import { skills } from '../assets/data/skills';

import { useEffect, useRef, useContext, useState } from 'react';

import { navContext } from '../components/navContext';
import { projects } from '../assets/data/projects';
import { experience } from '../assets/data/experience';
import Experience from './Exp';
import Project from './Project';

export default function Main({ formStatus, setFormStatus }) {
  const { setNavStatus } = useContext(navContext);
  const [submitBtnStatus, setSubmitBtnStatus] = useState({
    name: false,
    email: false,
    feedback: false,
  });
  const [promptStatus, setPromptStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    feedback: null,
  });

  let showSubmitBtn = Object.values(submitBtnStatus).reduce(
    (accu, curr) => accu && curr
  );

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
      {formStatus ? (
        <section className='relative max-w-[600px] mx-auto lg:mx-0 lg:max-w-[900px]' >
          <header id='feedback' className='sm:text-center lg:text-left'>
            FEEDBACK
          </header>
          <form action='' method='GET' className='flex flex-col px-8'>
            <div className='flex flex-col my-6'>
              <label htmlFor='name' className='mb-2 text-[--text-secondary]'>
                Name:{' '}
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                placeholder='Please enter your full name.'
                className='bg-[--bg-color-nav] p-2 outline-none focus:outline-[--text-secondary] placeholder:text-[--text-secondary]'
                required
                onBlur={(e) => {
                  setSubmitBtnStatus({
                    ...submitBtnStatus,
                    name: e.target.validity.valid,
                  });
                }}
              />
            </div>
            <div className='flex flex-col my-6'>
              <label htmlFor='email' className='mb-2 text-[--text-secondary]'>
                Email:{' '}
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                placeholder='youremail@address.com'
                className='bg-[--bg-color-nav] p-2 outline-none focus:outline-[--text-secondary] placeholder:text-[--text-secondary]'
                required
                onBlur={(e) => {
                  setSubmitBtnStatus({
                    ...submitBtnStatus,
                    email: e.target.validity.valid,
                  });
                }}
              />
            </div>
            <div className='flex flex-col my-6'>
              <label
                htmlFor='feedback'
                className='mb-2 text-[--text-secondary]'
              >
                Feedback:{' '}
              </label>
              <textarea
                rows='5'
                id='feedback'
                name='feedback'
                placeholder={`What do you think about my portfolio? 
What are the things you like about this website or my portfolio in general?
What are the areas that still need to be improved?
Or Any interesting development in Web Dev that you think I should check out.`}
                value={formData.feedback}
                maxLength='500'
                className='bg-[--bg-color-nav] p-2 outline-none focus:outline-[--text-secondary] placeholder-[--text-secondary]'
                required
                onBlur={(e) => {
                  setSubmitBtnStatus({
                    ...submitBtnStatus,
                    feedback: e.target.validity.valid,
                  });
                }}
              ></textarea>
            </div>
            <button
              type='submit'
              className='px-8 py-2 bg-[--text-secondary] text-[--bg-color] mt-6 sm:mx-auto lg:mb-12 lg:w-fit lg:mx-0 disabled:cursor-not-allowed disabled:bg-[--bg-color-disabled] active:scale-[0.98] active:transition-all'
              disabled={!showSubmitBtn ? true : false}
              onClick={(e) => {
                e.preventDefault();
                setPromptStatus(!promptStatus);
                setSubmitBtnStatus({
                  name: false,
                  email: false,
                  feedback: false,
                });
              }}
            >
              {!showSubmitBtn ? 'Form Incomplete' : 'Submit'}
            </button>
          </form>
          {promptStatus ? (
            <div className='absolute top-0 z-[900] flex flex-col justify-center items-center w-full h-full backdrop-blur-md'>
              <p className='text-center mb-8 text-xl'>
                Thank you for your feedback.
              </p>
              <button
                type='button'
                className='px-8 py-2 bg-[--text-secondary] text-[--bg-color] mx-auto w-fit active:scale-[0.98] active:transition-all'
                onClick={() => {
                  setFormStatus(false);
                  setPromptStatus(!promptStatus);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            ''
          )}
        </section>
      ) : (
        ''
      )}

      <section id='footer'>
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
          .
        </p>
        <p className='text-[0.9rem] text-[--text-secondary] px-8 mt-4'>
          &#169; Hangyuan Liu 2023
        </p>
      </section>
    </article>
  );
}
