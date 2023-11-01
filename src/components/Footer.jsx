import React from "react";
import ThemeContext from "../context/ThemeContext";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ThemeContext;

  render() {
    const {
      jobs,
      handleAllButtonClick,
      handleActiveButtonClick,
      handleCompletedButtonClick,
      handleClearButtonClick,
      filterButton,
    } = this.props;

    let theme = this.context;

    //đếm số việc chưa hoàn thành
    const count = jobs.reduce((acc, job) => {
      if (!(job.done)) {
        return acc + 1;
      }
      return acc;
    }, 0)

    return (
      <div className={`
        border-t-2  px-4 py-2 text-base  flex justify-between align-center
        ${theme === "light" ? `border-red-200 bg-white text-gray-600` : `border-blue-400 bg-gray-800 text-gray-500`}
        `}>
        {/* count undone */}
        <div>
          <p>{count} items left</p>
        </div>
        <div className="flex gap-2">
          <button
            id="0"
            className={`px-2 hover:border-red-200  rounded-lg border-2 border-gray-200
                        ${"0" === filterButton && theme === "light" ? `bg-red-300 text-white border-none` : ``}
                        ${"0" === filterButton && theme === "dark" ? `bg-blue-400 text-white border-none` : ``}
                        ${theme === "dark" && "0" !== filterButton ? `border-none hover:text-white` : ``}
                        `}
            onClick={(e) => handleAllButtonClick(e)}
          >
            All
          </button>
          <button
            id="1"
            className={`px-2  hover:border-red-200  rounded-lg border-2 
                        ${"1" === filterButton && theme === "light" ? `bg-red-300 text-white border-none` : ``}
                        ${"1" === filterButton && theme === "dark" ? `bg-blue-400 text-white border-none` : ``}
                        ${theme === "dark" && "1" !== filterButton ? `border-none hover:text-white` : ``}
                        `}
            onClick={(e) => handleActiveButtonClick(e)}
          >
            Active
          </button>
          <button
            id="2"
            className={`px-2  hover:border-red-200  rounded-lg border-2 border-gray-200
                        ${"2" === filterButton && theme === "light" ? `bg-red-300 text-white border-none` : ``}
                        ${"2" === filterButton && theme === "dark" ? `bg-blue-400 text-white border-none` : ``}
                        ${theme === "dark" && "2" !== filterButton ? `border-none hover:text-white` : ``}
                        `}
            onClick={(e) => handleCompletedButtonClick(e)}
          >
            Completed
          </button>
        </div>
        <button
          onClick={handleClearButtonClick}
          className={`px-2 border-2 rounded-lg 
                      ${count === jobs.length ? `invisible` : `block`}
                      ${theme === "light" ? `hover:border-red-200 ` : `border-none hover:bg-blue-400 hover:text-white`}
                      `}
        >
          Clear Completed
        </button>
      </div>
    )
  }
}

export default Footer;