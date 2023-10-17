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
                <div className="flex gap-4 pl-4 border-b-2 last:border-none items-center">
                  <button
                    id={index}
                    onClick={(e) => handleDone(e)}
                    className="border-2 border-gray-200 w-8 h-8 rounded-full"
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <li
                    key={index}
                    className="py-3 tracking-wider text-lg flex justify-between w-full"
                  >
                    {/* done button */}

                    <p className="flex-3">{job.name}</p>
                    {/* delete button */}
                    <button
                      id={index}
                      onClick={(e) => handleDelete(e)}
                      className="w-8 h-8 pr-4"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                </div>
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