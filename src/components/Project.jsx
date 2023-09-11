import { useEffect, useRef, useState } from "react";
import Details from "./Details";
import imgNatours from "../assets/project-image/natours.jpg";
import imgPortfolio from "../assets/project-image/portfolio.jpg";
import imgSpace from "../assets/project-image/space.jpg";
import imgMarkdown from "../assets/project-image/markdown.jpg";
import imgTimer from "../assets/project-image/timer.jpg";

export default function Project({ details }) {
  //const imgURL = new URL(details['image'], import.meta.url).href;
  const summary = "Tech/Tools";

  function imgSource(id) {
    switch (id) {
      case 0:
        return imgNatours;
      case 1:
        return imgPortfolio;
      case 2:
        return imgMarkdown;
      case 3:
        return imgTimer;
      case 4:
        return imgSpace;
    }
  }

  const aniRef = useRef(null);
  const [inSight, setInSight] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      let observed = entries[0];
      if (observed.isIntersecting) {
        setInSight(true);
        observer.unobserve(aniRef.current);
      }
    });

    observer.observe(aniRef.current);
  }, []);

  return (
    <div
      ref={aniRef}
      className={
        "sm:flex lg:justify-[initial] p-8 " +
        (inSight ? "loading-animation" : "")
      }
    >
      <div className="group relative max-w-[400px] mx-auto sm:w-1/3 sm:h-fit sm:mt-[10px] sm:mr-8 sm:mb-0 sm:ml-0 lg:max-w-[190px]">
        <img
          className="border-[--text-secondary] border-2 transition-all delay-100"
          src={imgSource(details["id"])}
          alt="project image"
        />
        <div className="absolute top-0 m-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] flex flex-col items-center gap-y-6 backdrop-blur-md visible transition-all ease-in duration-75 opacity-0 group-hover:visible group-hover:opacity-100 group-hover:transition-all sm:mt-[0.5rem] sm:static sm:visible sm:h-auto sm:items-end sm:gap-y-2 sm:opacity-100">
          <a
            className="mt-auto px-[0.8rem] py-2 bg-[--text-selection] text-[--bg-color] underline underline-offset-4 transition-all ease-out duration-75 hover:shadow-[4px_4px_rgb(50,106,110)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transition-all sm:px-[0.3rem] sm:py-[0.2rem] sm:text-[0.8rem]"
            href={details["github"]}
          >
            GitHub Repo
          </a>
          <a
            className="mb-auto px-[0.8rem] py-2 bg-[--text-selection] text-[--bg-color] underline underline-offset-4 transition-all ease-out duration-75 hover:shadow-[4px_4px_rgb(50,106,110)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transition-all sm:px-[0.3rem] sm:py-[0.2rem] sm:text-[0.8rem]"
            href={details["livesite"]}
          >
            Live Site
          </a>
        </div>
      </div>
      <div className="mt-6 sm:mt-0 sm:w-2/3">
        <p className="text-[1.4rem]">{details["name"]}</p>
        <p className="mt-4 text-[--text-secondary]">{details["content"]} </p>
        <ul className="my-2">
          {details["points"].map((item, index) => (
            <li
              key={index}
              className="text-[--text-secondary] pl-4 text-[0.9rem]"
            >
              <span className="text-[--text-secondary] pr-2">&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
        <Details details={details} summary={summary} />
      </div>
    </div>
  );
}
