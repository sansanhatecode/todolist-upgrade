import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: '',
    }
  }

  onChangeInput = (e) => {
    const { value } = e.target;
    this.setState({
      currentJob: value,
    })
  }

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const { currentJob } = this.state;
      const { headerProps } = this.props;
      const addItem = currentJob;
      headerProps(addItem);
      this.setState({
        currentJob: '',
      })
    }
  }

  render() {
    const { currentJob } = this.state;
    const {
      handleDownButtonClick,
      jobs,
    } = this.props;
    let jobsCheck = jobs;
    //kiểm tra xem có phải tất cả các công việc đều đã được làm xong hay chưa?
    const isNotDone = jobsCheck.some(job => !(job.done))
    return (
      <div className="flex gap-4 items-center border-red-200 border-b-2 bg-white pl-4">
        <button
          className={`w-8 h-8 text-xl text-gray-200`}
          onClick={handleDownButtonClick}
        >
          <i className= {`fa-solid fa-chevron-down ${isNotDone ? `text-gray-200}` : 'text-gray-500'}`}></i>
        </button>
        <input
          className="
                        py-4 w-[500px] rounded-t-lg  focus:outline-none text-2xl
                        placeholder:text-gray-300 placeholder:italic"
          type="text"
          value={currentJob}
          placeholder="What needs to be done?"
          onChange={this.onChangeInput}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    )
  }
}

export default Header;