import '../scss/_Main.scss';
import Exp from './Exp';

export default function Main() {
  return (
    <article className='main'>
      <section className='about' id='About'>
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
      </section>
      <section className='exp-section' id='experience'>
        <header>EXPERIENCE</header>
    <Exp />
    <Exp />
    <Exp />
      </section>
    <section className="projects" id='projects'></section>
    </article>
  );
}
