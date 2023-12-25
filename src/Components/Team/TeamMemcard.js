import React from "react";
import "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TeamMemcard = ({
  name,
  position,
  profileLink,
  description,
  linkedin,
  twitter,
  github,
  image,
}) => {
  return (
    <>
      <div className="col-xl-4 col-lg-6 mb-2 p-2">
        <div className="card">
          <img src={image} className="card-img-top rounded-circle" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{position}</p>
            <p className="card-text">{description}</p>
            <Link to={profileLink} className="btn btn-primary">
              View Profile
            </Link>
            <div className="social-icons p-2 ">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className=" m-2 pb-4"
              >
                <i className="bi bi-facebook fac" aria-hidden="true"></i>
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className=" m-2 pb-4"
              >
                <i className="bi bi-linkedin lin " aria-hidden="true"></i>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 pb-4"
              >
                <i className="bi bi-github git" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemcard;
