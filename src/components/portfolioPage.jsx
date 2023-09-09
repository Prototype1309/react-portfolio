
import React from "react";
import portfolioData from "../data/Portfolio";
import PortfolioItem from "./PortfolioItem";
import { v4 as uuidv4 } from "uuid";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
        
        {portfolioData.map((project) => (
          <PortfolioItem 
            key={uuidv4}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
