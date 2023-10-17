import './App.css';
import React from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';

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

  handleDelete = (e) => {
    const {jobs} = this.state;
    console.log(jobs)
    let deleteId = e.currentTarget.id;
    console.log(deleteId);
    // console.log(e.currentTarget)
    // const newJobs = jobs.splice(deleteId, 1);
    // console.log(newJobs);
    this.setState({
      jobs: jobs.splice(deleteId, 1),
    })
    console.log(this.state)
  }
  
  render() {
    const {
      // currentJob,
      jobs
    } = this.state;

    return (
      <div className="flex flex-col pt-20 items-center bg-slate-100 h-screen">
        <h1 className="text-8xl text-red-200 font-bold mb-5">todos</h1>
        <div className="border-2 border-red-200 rounded-sm">
          <Header 
            headerProps={this.handleAdd}
          />
          <ContentList
            jobs={jobs}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default App;
