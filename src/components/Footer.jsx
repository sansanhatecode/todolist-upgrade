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
            className="border-2 rounded-lg px-2 hover:border-red-200"
            onClick={handleAllButtonClick}
          >
            All
          </button>
          <button
            onClick={handleActiveButtonClick}
            className="px-2 border-2 rounded-lg hover:border-red-200"
          >
            Active
          </button>
          <button
            onClick={handleCompletedButtonClick}
            className="px-2 border-2 rounded-lg hover:border-red-200"
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