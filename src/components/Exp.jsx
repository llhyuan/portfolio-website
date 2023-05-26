import '../scss/_Exp.scss';

export default function Experience({ details }) {
  return (
    <div className='group exp p-8 hover:transition-all sm:flex sm:justify-between'>
      <div className='mb-4 sm:max-w-[30%]'>
        <p className='text-[1rem] pb-[0.8rem]'>{details['period']}</p>
        <p className='text-[1.3rem]'>{details['title']}</p>
        <p className='text-[--text-secondary]'>{details['responsibility']}</p>
      </div>
      <p className='sm:max-w-[65%] text-[--text-secondary]'>
        {details['description']}
      </p>
    </div>
  );
}
