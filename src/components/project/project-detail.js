import React from "react";

const ProjectDetail = (props) => {
  const id = props.match.params.id
  // console.log(id)
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Culpa sunt ea sit commodo do aliqua ex dolor ad magna officia
            voluptate. Deserunt proident occaecat elit ad esse cillum tempor
            irure laborum qui magna non aliquip exercitation. Quis laborum enim
            sint non exercitation laboris ea aliqua et. Proident magna voluptate
            labore quis deserunt irure qui ad ex proident minim eiusmod velit.
            Laboris magna Lorem esse consequat commodo deserunt incididunt
            laborum commodo voluptate.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2 AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
