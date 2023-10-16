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
      <div className="content__list">
        <ul>
          {jobs.map((job, index) =>
            <li key={index}>
              {job}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ContentList;