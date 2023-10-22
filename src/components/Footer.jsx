import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      jobs,
      handleAllButtonClick,
      handleActiveButtonClick,
      handleCompletedButtonClick,
      handleClearButtonClick,
      filterButton,
    } = this.props;

    //đếm số việc chưa hoàn thành
    const count = jobs.reduce((acc, job) => {
      if (!(job.done)) {
        return acc + 1;
      }
      return acc;
    }, 0)

    return (
      <div className="border-t-2 border-red-200 bg-white px-4 py-2 text-base text-gray-600 flex justify-between align-center">
        {/* count undone */}
        <div>
          <p>{count} items left</p>
        </div>
        <div className="flex gap-2">
          <button
            id="0"
            className={`px-2  hover:border-red-200  rounded-lg ${"0" === filterButton ? `bg-red-300 text-white border-0` : `border-2`}`}
            onClick={(e) => handleAllButtonClick(e)}
          >
            All
          </button>
          <button
            id="1"
            className={`px-2  hover:border-red-200  rounded-lg ${"1" === filterButton ? `bg-red-300 text-white border-0` : `border-2`}`}
            onClick={(e) => handleActiveButtonClick(e)}
          >
            Active
          </button>
          <button
            id="2"
            className={`px-2  hover:border-red-200  rounded-lg ${"2" === filterButton ? `bg-red-300 text-white border-0` : `border-2`}`}
            onClick={(e) => handleCompletedButtonClick(e)}
          >
            Completed
          </button>
        </div>
        <button
          onClick={handleClearButtonClick}
          className={`px-2 border-2 rounded-lg hover:border-red-200 ${count === jobs.length ? `invisible` : `block`}`}
        >
          Clear Completed
        </button>
      </div>
    )
  }
}

export default Footer;