import React from "react";

class ContentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      jobs
    } = this.props;
    return (
      <div className="bg-white">
        <ul>
          {jobs.map((job, index) =>
            <li 
              key={index}
              className="pl-10 py-2 border-b-2 last:border-none"
            >
              {job}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ContentList;