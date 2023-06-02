import {twMerge} from 'tailwind-merge';
// skills is an array of strings describing you shiny fancy toolbox.
export default function SkillList({ listTitle, skills, backgroundColor }) {
  let classString = twMerge('block text-[--bg-color] font-bold px-3 py-[0.3rem] border-x-[0.3rem] border-x-[--bg-color]', `bg-[${backgroundColor}]`);
  return (
    <div className='my-2'>
      <p className='text-xl'>{listTitle}:</p>
      <div className='flex flex-wrap gap-y-4'>
        {skills.map((item, index) => (
          <span
            key={index}
          className={classString}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
