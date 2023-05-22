import '../scss/_Home.scss';

function Home() {
  return (
    <div className='homepage'>
      <div className='introduction'>
        <p>An aspiring </p>
        <p>and self-driven </p>
        <p>web developer </p>
        <p>striving to make a difference with my skills.</p>
      </div>
      <div className='techstack'>
        <p className='text-2xl'>Tech Stack</p>
        <div className='stacklist'>
          <p>HTML</p>
          <p>CSS/ SCSS/ Tailwindcss</p>
          <p>JavaScript/ TypeScript</p>
          <p>React</p>
          <p>Node.js</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
