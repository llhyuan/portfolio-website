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
        <div className='links group-hover:visible group-hover:transition-all'>
          <a className='mt-auto hover:translate-x-[-5px] hover:transition-all' href={details['github']}>
            GitHub Repo
          </a>
          <a className='mb-auto hover:translate-x-[-5px] hover:transition-all' href={details['livesite']}>
            Live Site
          </a>
        </div>
      </div>
      <div className='project-detail mt-6'>
        <p className='text-[1.4rem]'>{details['name']}</p>
        <p className='mt-4 text-[--text-secondary]'>{details['content']} </p>
        <details className='mt-4'>
          <summary className='mb-2' open>Tools:</summary>
          <div className='flex flex-wrap gap-2'>
            {details['tools'].map((item) => (
              <p key={item.id} className='px-2 py-0.5 bg-[--text-secondary] text-[--bg-color] sm:text-[0.9rem]'>
                {item}
              </p>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
