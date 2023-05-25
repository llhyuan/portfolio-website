import '../scss/_Exp.scss';

export default function Exp() {

  return (
    <div className='group exp p-8 hover:bg-[--text-secondary] hover:scale-105 hover:transition-all'>
      <div className='time group-hover:text-[--bg-color]'>2018 - PRESCENT</div>
      <div className='details group-hover:text-[--bg-color]'>
        <p className='title group-hover:text-[--bg-color]'>Title Whatever</p>
        <p className='responsibility group-hover:text-[--bg-color]'>In charge of</p>
        <p className='description group-hover:text-[--bg-color]'>
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including Harvard Business School, Everytown for
          Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
          19th News, and more. Provide leadership within engineering department
          through close collaboration, knowledge shares, and mentorship.
        </p>
      </div>
    </div>
  );
}
