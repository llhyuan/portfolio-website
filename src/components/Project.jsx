import '../scss/_Project.scss';

export default function Project({ details }) {
  return (
    <div className='project p-8'>
      <div className='group relative project-img mx-auto'>
        <img
          className='border-[--text-secondary] border-2'
          src={details['image']}
          alt='project image'
        />
        <div className='links transition-all ease-in duration-75 opacity-0 group-hover:visible group-hover:opacity-100 group-hover:transition-all'>
          <a
            className='mt-auto transition-all ease-out duration-75 hover:translate-x-[2px] hover:translate-y-[1px] hover:transition-all'
            href={details['github']}
          >
            GitHub Repo
          </a>
          <a
            className='mb-auto transition-all ease-out duration-75 hover:translate-x-[2px] hover:translate-y-[1px] hover:transition-all'
            href={details['livesite']}
          >
            Live Site
          </a>
        </div>
      </div>
      <div className='project-detail mt-6'>
        <p className='text-[1.4rem]'>{details['name']}</p>
        <p className='mt-4 text-[--text-secondary]'>{details['content']} </p>
    <details className='mt-4'>
          <summary className='mb-2'>
            Tools:
          </summary>
          <div className='flex flex-wrap gap-2 transition-all '>
            {details['tools'].map((item, index) => (
              <p
                key={index}
                className='px-2 py-0.5 bg-[--text-secondary] text-[--bg-color] sm:text-[0.9rem]'
              >
                {item}
              </p>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
