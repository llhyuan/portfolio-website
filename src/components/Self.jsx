import { about } from "../assets/data/about";

function Self({ setFormStatus }) {
  return (
    <div className="lg:relative lg:top-[1.7rem] flex flex-col p-8 lg:max-w-[600px] lg:h-[85vh]">
      <div className="name text-[2.8rem] mb-2 md:text-[3rem]">{about.name}</div>
      <div className="text-[2rem] font-mono p-2 w-fit text-[--bg-color] bg-[--text-selection] ">
        {about.title}
      </div>
      <div className="py-4">{about.introduction}</div>
      <div className="flex justify-between w-[240px] py-4">
        <div className="group/git git w-8">
          <a
            href="https://github.com/llhyuan"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Github Repository"
          >
            <svg
              className="fill-[--bg-color-icon] group-hover/git:fill-[--text-highlight] transition-all duration-120 ease-in-out"
              viewBox="0 0 496 484"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 389.4C165.9 391.4 163.6 393 160.7 393C157.4 393.3 155.1 391.7 155.1 389.4C155.1 387.4 157.4 385.8 160.3 385.8C163.3 385.5 165.9 387.1 165.9 389.4ZM134.8 384.9C134.1 386.9 136.1 389.2 139.1 389.8C141.7 390.8 144.7 389.8 145.3 387.8C145.9 385.8 144 383.5 141 382.6C138.4 381.9 135.5 382.9 134.8 384.9ZM179 383.2C176.1 383.9 174.1 385.8 174.4 388.1C174.7 390.1 177.3 391.4 180.3 390.7C183.2 390 185.2 388.1 184.9 386.1C184.6 384.2 181.9 382.9 179 383.2ZM244.8 0C106.1 0 0 105.3 0 244C0 354.9 69.8 449.8 169.5 483.2C182.3 485.5 186.8 477.6 186.8 471.1C186.8 464.9 186.5 430.7 186.5 409.7C186.5 409.7 116.5 424.7 101.8 379.9C101.8 379.9 90.4 350.8 74 343.3C74 343.3 51.1 327.6 75.6 327.9C75.6 327.9 100.5 329.9 114.2 353.7C136.1 392.3 172.8 381.2 187.1 374.6C189.4 358.6 195.9 347.5 203.1 340.9C147.2 334.7 90.8 326.6 90.8 230.4C90.8 202.9 98.4 189.1 114.4 171.5C111.8 165 103.3 138.2 117 103.6C137.9 97.1 186 130.6 186 130.6C206 125 227.5 122.1 248.8 122.1C270.1 122.1 291.6 125 311.6 130.6C311.6 130.6 359.7 97 380.6 103.6C394.3 138.3 385.8 165 383.2 171.5C399.2 189.2 409 203 409 230.4C409 326.9 350.1 334.6 294.2 340.9C303.4 348.8 311.2 363.8 311.2 387.3C311.2 421 310.9 462.7 310.9 470.9C310.9 477.4 315.5 485.3 328.2 483C428.2 449.8 496 354.9 496 244C496 105.3 383.5 0 244.8 0ZM97.2 344.9C95.9 345.9 96.2 348.2 97.9 350.1C99.5 351.7 101.8 352.4 103.1 351.1C104.4 350.1 104.1 347.8 102.4 345.9C100.8 344.3 98.5 343.6 97.2 344.9ZM86.4 336.8C85.7 338.1 86.7 339.7 88.7 340.7C90.3 341.7 92.3 341.4 93 340C93.7 338.7 92.7 337.1 90.7 336.1C88.7 335.5 87.1 335.8 86.4 336.8ZM118.8 372.4C117.2 373.7 117.8 376.7 120.1 378.6C122.4 380.9 125.3 381.2 126.6 379.6C127.9 378.3 127.3 375.3 125.3 373.4C123.1 371.1 120.1 370.8 118.8 372.4ZM107.4 357.7C105.8 358.7 105.8 361.3 107.4 363.6C109 365.9 111.7 366.9 113 365.9C114.6 364.6 114.6 362 113 359.7C111.6 357.4 109 356.4 107.4 357.7Z" />
            </svg>
          </a>
        </div>
        <div className="linkedin w-8">
          <a
            href="https://www.linkedin.com/in/hangyuan-liu-a9282718b/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to LinkedIn Profile"
          >
            <svg
              viewBox="0 0 448 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group"
            >
              <path
                className="fill-[--bg-color-icon] group-hover:fill-[--text-highlight1] transition-all duration-120 ease-in-out"
                d="M100.28 448H7.4V148.9H100.28V448ZM53.79 108.1C24.09 108.1 0 83.5 0 53.8C2.1258e-07 39.534 5.66714 25.8523 15.7547 15.7647C25.8423 5.67715 39.524 0.0100098 53.79 0.0100098C68.056 0.0100098 81.7377 5.67715 91.8253 15.7647C101.913 25.8523 107.58 39.534 107.58 53.8C107.58 83.5 83.48 108.1 53.79 108.1ZM447.9 448H355.22V302.4C355.22 267.7 354.52 223.2 306.93 223.2C258.64 223.2 251.24 260.9 251.24 299.9V448H158.46V148.9H247.54V189.7H248.84C261.24 166.2 291.53 141.4 336.72 141.4C430.72 141.4 448 203.3 448 283.7V448H447.9Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div className="freecodecamp">
          <a
            href="https://www.freecodecamp.org/HangyuanLiu"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to freecodecamp Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 576 512"
              className="group"
            >
              <path
                className="fill-[--text-primary] group-hover:fill-[--text-highlight2] transition-all duration-120 ease-in-out"
                d="M97.22,96.21c10.36-10.65,16-17.12,16-21.9,0-2.76-1.92-5.51-3.83-7.42A14.81,14.81,0,0,0,101,64.05c-8.48,0-20.92,8.79-35.84,25.69C23.68,137,2.51,182.81,3.37,250.34s17.47,117,54.06,161.87C76.22,435.86,90.62,448,100.9,448a13.55,13.55,0,0,0,8.37-3.84c1.91-2.76,3.81-5.63,3.81-8.38,0-5.63-3.86-12.2-13.2-20.55-44.45-42.33-67.32-97-67.48-165C32.25,188.8,54,137.83,97.22,96.21ZM239.47,420.07c.58.37.91.55.91.55Zm93.79.55.17-.13C333.24,420.62,333.17,420.67,333.26,420.62Zm3.13-158.18c-16.24-4.15,50.41-82.89-68.05-177.17,0,0,15.54,49.38-62.83,159.57-74.27,104.35,23.46,168.73,34,175.23-6.73-4.35-47.4-35.7,9.55-128.64,11-18.3,25.53-34.87,43.5-72.16,0,0,15.91,22.45,7.6,71.13C287.7,364,354,342.91,355,343.94c22.75,26.78-17.72,73.51-21.58,76.55,5.49-3.65,117.71-78,33-188.1C360.43,238.4,352.62,266.59,336.39,262.44ZM510.88,89.69C496,72.79,483.52,64,475,64a14.81,14.81,0,0,0-8.39,2.84c-1.91,1.91-3.83,4.66-3.83,7.42,0,4.78,5.6,11.26,16,21.9,43.23,41.61,65,92.59,64.82,154.06-.16,68-23,122.63-67.48,165-9.34,8.35-13.18,14.92-13.2,20.55,0,2.75,1.9,5.62,3.81,8.38A13.61,13.61,0,0,0,475.1,448c10.28,0,24.68-12.13,43.47-35.79,36.59-44.85,53.14-94.38,54.06-161.87S552.32,137,510.88,89.69Z"
              />
            </svg>
          </a>
        </div>
        <div className="relative bottom-[3px] resume w-7">
          <a
            href="https://drive.google.com/file/d/1Ajvt_A3dt-_hzUBiY7VnH6VbG_GYL5H6/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to preview and download resume"
            className="block relative bottom-[8px] group"
          >
            <span className="font-mono text-[2.2rem] group-hover:text-[--text-selection] transition-all duration-120 ease-in-out">
              C
            </span>
            <span className="relative top-[8px] right-[10px] font-mono text-[2rem] group-hover:text-[--text-selection] transition-all duration-120 ease-in-out">
              V
            </span>
          </a>
        </div>
      </div>
      <div className="mt-auto flex lg:flex-col">
        <div className="relative">
          <a
            className="block bg-[--text-primary] text-[--bg-color] underline-offset-[3px] underline decoration-[1.2px] md:decoration-[1.7px] w-fit px-3 py-2 my-4 text-[0.9rem] md:text-[1.2rem] lg:mt-auto mr-4 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:cursor-pointer hover:shadow-[5px_5px_var(--bg-color-nav)] transition-all  ease-in duration-200 "
            href="mailto:lhyuan.liu21@icloud.com"
          >
            Contact Me
          </a>
        </div>
        <a
          className="block bg-[--text-primary] text-[--bg-color] underline-offset-[3px] underline decoration-[1.2px] md:decoration-[1.7px] w-fit px-3 py-2 my-4 text-[0.9rem] md:text-[1.2rem] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:cursor-pointer hover:shadow-[5px_5px_var(--bg-color-nav)] transition-all ease-in duration-200"
          href="#feedback"
          onClick={() => {
            setFormStatus(true);
          }}
        >
          Leave A Message
        </a>
      </div>
    </div>
  );
}

export default Self;
