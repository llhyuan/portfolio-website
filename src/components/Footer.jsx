
function Footer() {
  return (
    <div className='bg-[--bg-color-nav] py-4 lg:bg-[--bg-color] lg:pt-0 lg:pb-12'>
          <p className='text-[1rem] text-[--text-secondary] px-8 pb-1'>
            About this site:
          </p>
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
            , experimented around using{' '}
            <a
              className='text-[0.9rem] text-[--text-secondary] underline underline-offset-[2px] hover:text-[--text-primary]'
              href='https://palettte.app'
              target='_blank'
              rel='noreferrer'
            >
              Palettte
            </a>
            .
          </p>
          <p className='text-[0.9rem] text-[--text-secondary] px-8 mt-4'>
            &#169; Hangyuan Liu 2023
          </p>
        </div>  );
}

export default Footer;

