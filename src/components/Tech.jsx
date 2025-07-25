import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <Tippy
          content={technology.name}
          key={technology.name}
          animation="shift-away"
          delay={100}
          duration={[200, 150]}
          arrow={true}
          placement="top"
          theme="light"
        >
          <div className="w-28 h-28 cursor-pointer">
            <BallCanvas icon={technology.icon} />
          </div>
        </Tippy>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
