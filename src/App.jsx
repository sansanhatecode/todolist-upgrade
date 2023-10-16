import './App.css';
import React from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentJob: '',
      jobs: ["học bài", "đi ngủ"],
    }
  }
  render() {
    const {
      // currentJob,
      jobs
    } = this.state;

    //them cong viec moi
    const handleAdd = (addItem) => {
      const newJobs = [...jobs, addItem]
      this.setState({
        jobs: newJobs
      });
    }

    return (
      <div className="flex flex-col pt-20 items-center bg-slate-100 h-screen">
        <h1 className="text-8xl text-red-200 font-bold mb-5">todos</h1>
        <div className="border-2 border-red-200 rounded-sm">
          <Header 
            headerProps = {this.handleAdd}
          />
          <ContentList
            jobs={jobs}
          />
        </div>
      </div>
    )
  }
}

export default App;
