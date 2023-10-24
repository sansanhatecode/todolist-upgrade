import './App.css';
import React from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myHeader = React.createRef();
    this.state = {
      jobs: [
        {
          name: "clean the house",
          displayStatus: true,
          done: false,
        },
        {
          name: "do the homework",
          displayStatus: true,
          done: false,
        },
      ],
      filterButton: "0",
      // isEditting: false,
    }
  }

  //them cong viec moi
  handleAdd = (addItem) => {
    const {
      jobs,
      filterButton,
      // isEditting,
    } = this.state;

    //thêm công việc mới

    const newJob = {
      name: addItem,
      displayStatus: true,
      done: false,
    }

    const newJobs = [...jobs, newJob];
    if (filterButton === "2") {
      newJob.displayStatus = false
    }
    this.setState({
      jobs: newJobs
    });

  }

  //xoa cong viec duoc chon
  handleDelete = (e, index) => {
    const { jobs } = this.state;
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    this.setState({
      jobs: newJobs,
    })
  }

  //chinh sua mot cong viec
  handleEdit = (e, index) => {
    // const { isEditting } = this.state;
    // this.setState({
    //   isEditting: true,
    // });
    this.myHeader.current.focus();
  }

  //danh dau cong viec duoc lam xong
  handleDone = (e, index) => {
    const {
      jobs,
      filterButton,
    } = this.state;
    const newJobs = jobs;
    newJobs[index].done = !jobs[index].done;
    if (newJobs[index].done) {
      if (filterButton === "1") {
        newJobs[index].displayStatus = false;
      }
      else newJobs[index].displayStatus = true;
    } else if (filterButton === "2") {
      newJobs[index].displayStatus = false;
    } else newJobs[index].displayStatus = true;
    this.setState({
      jobs: newJobs,
    })
  }

  //danh dau tat ca cong viec da duoc lam xong (khong lam xong)
  handleDownButtonClick = () => {
    const { jobs } = this.state;
    let jobsCheck = jobs;
    //kiểm tra xem có phải tất cả các công việc đều đã được làm xong hay chưa?
    const isNotDone = jobsCheck.some(job => !(job.done))
    let newJobs = jobs;
    newJobs.map(job => (job.done = isNotDone))
    this.setState({
      jobs: newJobs,
    })
    // console.log(newJobs);
  }

  //hien ra tat ca cac cong viec
  handleAllButtonClick = (e) => {
    const {
      jobs,
    } = this.state;
    let newJobs = jobs;
    newJobs.map(job => (job.displayStatus = true))
    console.log(e.currentTarget.id)
    this.setState({
      jobs: newJobs,
      filterButton: e.currentTarget.id,
    })
  }

  //hien ra cac cong viec dang lam do
  handleActiveButtonClick = (e) => {
    const { jobs } = this.state;
    let newJobs = jobs;
    newJobs.map(job => job.displayStatus = true)
    newJobs.map(job => {
      if (job.done) {
        return job.displayStatus = false;
      }
    })
    console.log(e.currentTarget.id)
    this.setState({
      jobs: newJobs,
      filterButton: e.currentTarget.id,
    })
  }

  //hien ra cac cong viec da hoan thanh
  handleCompletedButtonClick = (e) => {
    const { jobs } = this.state;
    let newJobs = jobs;
    newJobs.map(job => job.displayStatus = true)
    newJobs.map(job => {
      if (!(job.done)) {
        return job.displayStatus = false;
      }
    })
    this.setState({
      jobs: newJobs,
      filterButton: e.currentTarget.id,
    })
  }

  //xoa cac cong viec da hoan thanh
  handleClearButtonClick = () => {
    const { jobs } = this.state;
    let newJobs = jobs.filter(job => !(job.done));
    // console.log(newJobs);
    this.setState({
      jobs: newJobs,
    })
  }

  render() {
    const {
      jobs,
      filterButton
    } = this.state;

    console.log(this.myHeader.current);

    return (
      <div className="flex flex-col pt-20 items-center bg-slate-100 h-full min-h-screen pb-28">
        <h1 className="text-8xl text-red-200 font-bold mb-5">todos</h1>
        <div className="border-2 border-red-200 rounded-sm">
          <Header
            ref={this.myHeader}
            headerProps={this.handleAdd}
            handleDownButtonClick={this.handleDownButtonClick}
            jobs={jobs}
          />
          <ContentList
            jobs={jobs}
            handleDelete={this.handleDelete}
            handleDone={this.handleDone}
            handleEdit={this.handleEdit}
          />
          <Footer
            jobs={jobs}
            handleAllButtonClick={this.handleAllButtonClick}
            handleActiveButtonClick={this.handleActiveButtonClick}
            handleCompletedButtonClick={this.handleCompletedButtonClick}
            handleClearButtonClick={this.handleClearButtonClick}
            filterButton={filterButton}
          />
        </div>
      </div>
    )
  }
}

export default App;