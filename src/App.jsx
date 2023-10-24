import './App.css';
import React from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';
import Footer from './components/Footer';
import Pagination from './components/Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.state = {
      jobs: [
        {
          name: "clean the house",
          displayStatus: true,
          done: false,
          isEditting: false,
        },
        {
          name: "do the homework",
          displayStatus: true,
          done: false,
          isEditting: false,
        },
        {
          name: "play games",
          displayStatus: true,
          done: false,
          isEditting: false,
        },
        {
          name: "watch TV",
          displayStatus: true,
          done: false,
          isEditting: false,
        },
        {
          name: "cook meals",
          displayStatus: true,
          done: false,
          isEditting: false,
        },
        {
          name: "study Japanese",
          displayStatus: true,
          done: false,
          isEditting: false,
        },
      ],
      filterButton: "0",
      totalPages: 2,
      currentPage: 1,
    }
  }

  itemsPerPage = 5;

  //them cong viec moi
  handleAdd = (addItem) => {
    const {
      jobs,
      filterButton,
    } = this.state;
    let newJobs = [...jobs];
    if (newJobs.some(job => job.isEditting)) {
      for(let i = 0; i < jobs.length; i++){
        if(newJobs[i].isEditting){
          newJobs[i].name = addItem;
          newJobs[i].isEditting = false;
        }
      }
      this.setState({
        jobs: newJobs,
      })
    }
    else {
      const newJob = {
        name: addItem,
        displayStatus: true,
        done: false,
        isEditting: false,
      }
      newJobs = [newJob, ...jobs];
      if (filterButton === "2") {
        newJob.displayStatus = false
      }
      //tổng số phần tử được display
      let totalItems = 0;
      for (let i = 0; i < newJobs.length; i++) {
        if (newJobs[i].displayStatus) {
          totalItems++;
        }
      }
      //tổng số trang mới
      const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
      this.setState({
        jobs: newJobs,
        totalPages: newTotalPages,
      });
    }


  }

  //xoa cong viec duoc chon
  handleDelete = (e, index) => {
    const { jobs, currentPage } = this.state;
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    //tổng số phần tử được display
    let totalItems = 0;
    for (let i = 0; i < newJobs.length; i++) {
      if (newJobs[i].displayStatus) {
        totalItems++;
      }
    }
    //tổng số trang mới
    const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
    let newCurrentPage = currentPage;
    if (!(totalItems % 5)) {
      newCurrentPage = currentPage - 1;
    }
    this.setState({
      jobs: newJobs,
      totalPages: newTotalPages,
      currentPage: newCurrentPage,
    })
  }

  //chinh sua mot cong viec
  handleEdit = (e, index) => {
    if (this.headerRef.current) {
      this.headerRef.current.focusInput();
    }
    const { jobs } = this.state;
    let newJobs = [...jobs];
    newJobs[index].isEditting = true;
    console.log(newJobs[index]);
    this.setState({
      jobs: newJobs,
    })
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
    //tổng số phần tử được display
    let totalItems = 0;
    for (let i = 0; i < newJobs.length; i++) {
      if (newJobs[i].displayStatus) {
        totalItems++;
      }
    }
    //tổng số trang mới
    const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.setState({
      jobs: newJobs,
      totalPages: newTotalPages,
      currentPage: 1,
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
    //tổng số phần tử được display
    let totalItems = 0;
    for (let i = 0; i < newJobs.length; i++) {
      if (newJobs[i].displayStatus) {
        totalItems++;
      }
    }
    //tổng số trang mới
    const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.setState({
      jobs: newJobs,
      totalPages: newTotalPages,
      currentPage: 1,
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
    // console.log(e.currentTarget.id)
    //tổng số phần tử được display
    let totalItems = 0;
    for (let i = 0; i < newJobs.length; i++) {
      if (newJobs[i].displayStatus) {
        totalItems++;
      }
    }
    //tổng số trang mới
    const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.setState({
      jobs: newJobs,
      filterButton: e.currentTarget.id,
      totalPages: newTotalPages,
      currentPage: 1,
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
    let totalItems = 0;
    for (let i = 0; i < newJobs.length; i++) {
      if (newJobs[i].displayStatus) {
        totalItems++;
      }
    }
    //tổng số trang mới
    const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.setState({
      jobs: newJobs,
      filterButton: e.currentTarget.id,
      totalPages: newTotalPages,
      currentPage: 1,
    })
  }

  //xoa cac cong viec da hoan thanh
  handleClearButtonClick = () => {
    const { jobs } = this.state;
    let newJobs = jobs.filter(job => !(job.done));
    // console.log(newJobs);
    // 
    let totalItems = 0;
    for (let i = 0; i < newJobs.length; i++) {
      if (newJobs[i].displayStatus) {
        totalItems++;
      }
    }
    //tổng số trang mới
    const newTotalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.setState({
      jobs: newJobs,
      totalPages: newTotalPages,
    })
  }

  handlePageClick = (e, i) => {
    this.setState({
      currentPage: i,
    })
  }

  render() {
    const {
      jobs,
      filterButton,
      totalPages,
      currentPage
    } = this.state;

    // console.log(this.myHeader.current);

    return (
      <div className="flex flex-col pt-20 items-center bg-slate-100 h-full min-h-screen pb-28 relative">
        <h1 className="text-8xl text-red-200 font-bold mb-5">todos</h1>
        <div className="border-2 border-red-200 rounded-sm mb-4">
          <Header
            ref={this.headerRef}
            handleAdd={this.handleAdd}
            handleDownButtonClick={this.handleDownButtonClick}
            jobs={jobs}
          />
          <ContentList
            jobs={jobs}
            handleDelete={this.handleDelete}
            handleDone={this.handleDone}
            handleEdit={this.handleEdit}
            currentPage={currentPage}
            itemsPerPage={this.itemsPerPage}
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
        <Pagination
          totalPages={totalPages}
          handlePageClick={this.handlePageClick}
          currentPage={currentPage}
        />
      </div>
    )
  }
}

export default App;