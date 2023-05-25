import '../scss/_Main.scss';
import Exp from './Exp';

export default function Main() {
  return (
    <article className='main'>
    <section className='about' id='about'>
        <header>ABOUT</header>
        <div className='mx-8'>
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I&apos;ve also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
        </div>
        <div className='px-8'>
          <p className='text-xl'>Techical Skills:</p>
          <div className='flex flex-wrap gap-y-4'>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              HTML
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              CSS/SCSS
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Tailwindcss
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              JavaScript
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              TypeScript
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              React
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              React Router
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Next.js
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Git
            </span>
          </div>
          <p className='text-xl mt-4'>Tools:</p>
          <div className='flex flex-wrap gap-y-4'>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Neovim
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              VSCode
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Vite
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              pnpm
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              GitHub
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight1] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Figma
            </span>
          </div>
          <p className='text-xl mt-4'>Soft Skills:</p>
          <div className='flex flex-wrap gap-y-4'>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight2] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Eager to learn
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight2] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Curious
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight2] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Communicative
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-highlight2] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Cooperative
            </span>
          </div>
          <p className='text-xl mt-4'>Exploring into Backend:</p>
          <div className='flex flex-wrap gap-y-4'>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-secondary] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Go
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-secondary] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Rust
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-secondary] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              Node.js
            </span>
            <span className='inline-block text-[--bg-color] font-bold bg-[--text-secondary] px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]'>
              More to be added...
            </span>
          </div>
        </div>
      </section>
      <section className='exp-section' id='experience'>
        <header>EXPERIENCE</header>
        <Exp />
        <Exp />
        <Exp />
      </section>
      <section className='projects' id='projects'>
    <header>
      Projects
    </header></section>
    </article>
  );
}
