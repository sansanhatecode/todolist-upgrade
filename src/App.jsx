import './App.css';
import React from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentJob: '',
      jobs: [
        {
          name:"học bài",
          displayStatus: true,
          done: false,
        }, 
        {
          name:"đi ngủ",
          displayStatus: true,
          done: false,
        },
      ],
    }
  }

  //them cong viec moi
  handleAdd = (addItem) => {
    const newJob = {
      name:addItem,
      displayStatus:true,
      done:false,
    }
    const {jobs} = this.state;
    const newJobs = [...jobs, newJob];
    this.setState({
      jobs: newJobs
    });
    // console.log(newJobs);
  }

  //xoa cong viec duoc chon
  handleDelete = (e) => {
    const {jobs} = this.state;
    let deleteId = e.currentTarget.id;
    const newJobs = jobs;
    newJobs.splice(deleteId, 1);
    this.setState({
      jobs: newJobs,
    })
  }
  

  //danh dau cong viec duoc lam xong
  handleDone = (e) => {
    let doneId = e.currentTarget.id;
    // console.log(e.currentTarget.id)
    const {jobs} = this.state;
    const newJobs = jobs;
    newJobs[doneId].done = !jobs[doneId].done;
    console.log(newJobs[doneId]);
    this.setState({
      jobs: newJobs,
    })
  }

  //danh dau tat ca cong viec da duoc lam xong (khong lam xong)
  handleDownButtonClick = () => {
    const {jobs} = this.state;
    let jobsCheck = jobs;
    //kiểm tra xem có phải tất cả các công việc đều đã được làm xong hay chưa?
    const isNotDone = jobsCheck.some(job => !(job.done))
    let newJobs = jobs;
    newJobs.map(job => (job.done = isNotDone))
    this.setState({
      jobs : newJobs,
    })
    // console.log(newJobs);
  }

  //hien ra tat ca cac cong viec
  handleAllButtonClick = () => {
    const {jobs} = this.state;
    let newJobs = jobs;
    newJobs.map(job => (job.displayStatus = true))
    this.setState({
      jobs : newJobs,
    })
  }

  //hien ra cac cong viec dang lam do
  handleActiveButtonClick = () => {
    const {jobs} = this.state;
    let newJobs = jobs;
    newJobs.map(job => job.displayStatus = true)
    newJobs.map(job => {
      if(job.done){
        return job.displayStatus = false;
      }
    })
    this.setState({
      jobs : newJobs,
    })
  }

  //hien ra cac cong viec da hoan thanh
  handleCompletedButtonClick = () => {
    const {jobs} = this.state;
    let newJobs = jobs;
    newJobs.map(job => job.displayStatus = true)
    newJobs.map(job => {
      if(!(job.done)){
        return job.displayStatus = false;
      }
    })
    this.setState({
      jobs : newJobs,
    })
  }

  //xoa cac cong viec da hoan thanh
  handleClearButtonClick = () => {
    const {jobs} = this.state;
    let newJobs = jobs.filter(job => !(job.done));
    // console.log(newJobs);
    this.setState({
      jobs : newJobs,
    })
  }

  render() {
    const {
      jobs
    } = this.state;

    return (
      <div className="flex flex-col pt-20 items-center bg-slate-100 h-full min-h-screen pb-28">
        <h1 className="text-8xl text-red-200 font-bold mb-5">todos</h1>
        <div className="border-2 border-red-200 rounded-sm">
          <Header 
            headerProps={this.handleAdd}
            handleDownButtonClick={this.handleDownButtonClick}
            jobs={jobs}
          />
          <ContentList
            jobs={jobs}
            handleDelete={this.handleDelete}
            handleDone={this.handleDone}
          />
          <Footer
            jobs={jobs}
            handleAllButtonClick={this.handleAllButtonClick}
            handleActiveButtonClick={this.handleActiveButtonClick}
            handleCompletedButtonClick={this.handleCompletedButtonClick}
            handleClearButtonClick={this.handleClearButtonClick}
          />
        </div>
      </div>
    )
  }
}

export default App;
