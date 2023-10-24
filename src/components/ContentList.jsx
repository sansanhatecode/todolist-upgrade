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
      handleEdit,
      currentPage,
      itemsPerPage
    } = this.props;

    return (
      <div className="bg-white">
        <ul>
          {jobs.map((job, index) => {
            //neu display status la true thi render ra phan tu
            if (job.displayStatus && index < currentPage*itemsPerPage && index >= (currentPage-1)*itemsPerPage) {
              return (
                <div className = "flex gap-4 pl-4 border-b-2 last:border-none items-center">
                  {/* done button */}
                  <button
                    onClick = {(e) => handleDone(e, index)}
                    className = {`
                      border-2 w-8 h-8 rounded-full 
                      ${job.done ? `border-green-400` :  `border-gray-200`}
                      `}
                  >
                    <i className = {`
                      fa-solid fa-check
                      text-green-400
                      ${job.done ? `` :  `hidden`}
                      `}>
                    </i>
                  </button>

                  <li
                    key = {index}
                    className = "py-3 tracking-wider text-xl flex w-full group relative"
                  >
                    <p className = {`${job.done ? `text-gray-300 line-through` :  ``} ${job.isEditting ? `text-gray-300`: ``}`}>{job.name}</p>

                    {/* edit button */}
                    <button
                      id={index}
                      // onClick = {(e) => handleEdit(e, index)}
                      onClick={(e) => handleEdit(e, index)}
                      className="w-8 pr-4 hidden text-red-200 group-hover:block hover:text-red-400 absolute right-10"
                    >
                      <i class="fa-solid fa-pencil text-base"></i>
                    </button>

                    {/* delete button */}
                    <button
                      onClick={(e) => handleDelete(e, index)}
                      className="w-8 pr-4 hidden text-red-200 group-hover:block hover:text-red-400 absolute right-1"
                    >
                      <i className="fa-solid fa-trash text-base"></i>
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