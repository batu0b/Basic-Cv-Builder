import React from "react";
import { useNavigate } from "react-router-dom";
import experience from "../assets/experience.svg";
import search from "../assets/search.svg";
import resume from "../assets/resume.svg";
import reminder from "../assets/reminder.svg";
import { FadeDiv } from "../components/animatedPages/FadeDiv";
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <FadeDiv className="MasterDiv ">
      <div className="bg-slate-100 border-4 border-neon p-4 w-[80%] h-fit flex items-center justify-between">
        <div className="basis-1/2 max-md:basis-full flex justify-center  gap-7 items-start flex-col">
          <h1 className="text-6xl">
            A <span className="text-neon ">Resume</span> that stands out! Make
            your own resume. <span className="text-neon">It's free</span>
          </h1>
          <button
            onClick={() => navigate("/CreateResume")}
            className="bg-neon p-2 shadow-lg rounded-md text-white"
          >
            Create A Resume
          </button>
        </div>
        <div className="basis-1/2 max-md:hidden  h-full">
          {" "}
          <div className="pt-[100%] h-full relative ">
            <img
              src={resume}
              className="top-0 absolute left-0 w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </FadeDiv>
  );
};
