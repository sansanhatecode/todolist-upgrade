import React from "react";

class ContentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      jobs,
      handleDelete,
      handleDone,
    } = this.props;

    return (
      <div className="bg-white">
        <ul>
          {jobs.map((job, index) => {
            //neu display status la true thi render ra phan tu
            if (job.displayStatus) {
              return (
                <li
                  key={index}
                  className="py-2 border-b-2 last:border-none tracking-wider text-lg flex"
                >
                  {/* done button */}
                  <button
                    // key={index}
                    onClick={(e) => handleDone(e)}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <p className="flex-3">{job.name}</p>
                  {/* delete button */}
                  <button
                    id={index}
                    onClick={(e) => handleDelete(e)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </li>
              )
            }
          }
          )}
        </ul>
      </div>
    )
  }
}

export default ContentList;