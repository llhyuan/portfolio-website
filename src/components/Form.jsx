import { useState } from 'react';

export default function Form({setFormStatus}) {
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

  return (
    <section className='relative max-w-[600px] mx-auto lg:mx-0 lg:max-w-[900px]'>
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
          <label htmlFor='feedback' className='mb-2 text-[--text-secondary]'>
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
  );
}
