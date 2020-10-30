import React from 'react';
import "./experience.styles.css";
// import { Link } from 'react-router-dom';
import jsImg from '../../assets/img/experience/react.jpg';
import reactImg from '../../assets/img/experience/javascript.jpg';
import dataStructureImg from '../../assets/img/experience/ds.png';

const Experience = () => {
  
  return (
    <div id="experience">
    <h1 className="pt-3 text-center font-details-b pb-3">
      Blog Post
    </h1>
        <div className="card-deck mt-4">
            <div className="card bg-dark">
              <img src={jsImg} className="card-img-top" alt="Blog Img" />
              <div className="card-body">
                <h5 className="card-title">Important Topics of React Js</h5>
                <p className="card-text">
                    Synchronous/Asynchronous: In programming, synchronous operations block instructions until the task is completed...
                </p>
              </div>
              <div className="card-footer">
                <a href="#" target="_blank" className="btn btn-primary text-light">Comming Soon</a>
              </div>
            </div>
            <div className="card bg-dark">
              <img src={reactImg} className="card-img-top" alt="Blog Img" />
              <div className="card-body">
                <h5 className="card-title">Getting Started With Javascript </h5>
                <p className="card-text">
                    What is React: React is a Javascript library, not a framework. It can not provide a complete solution. To form any...
                </p>
              </div>
              <div className="card-footer">
                <a href="#" target="_blank" className="btn btn-primary text-light">Comming Soon</a>
              </div>
            </div>
            <div className="card bg-dark">
              <img src={dataStructureImg} className="card-img-top" alt="Blog Img" />
              <div className="card-body">
                <h5 className="card-title">5 Important Data Structures in Javascript</h5>
                <p className="card-text">
                    Data structures, particular way or techniques to storing and organizing data. That makes it easier to access,...
                </p>
              </div>
              <div className="card-footer">
                <a href="#" target="_blank" className="btn btn-primary text-light">Comming Soon</a>
              </div>
            </div>

    </div>
  </div>
  );
}

export default Experience;