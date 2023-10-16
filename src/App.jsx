import './App.css';
import React from 'react';
import Header from './components/Header';
import ContentList from './components/ContentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: '',
      jobs: ["học bài", "đi ngủ"],
      }
    }
  render() {
    const {
      currentJob,
      jobs
    } = this.state;

    //them cong viec moi
    const handleAdd = (e) => {
      currentJob.setState(e.target.value);
      if(currentJob.trim() !==""){
        if (e.keyCode === 13) {
          jobs.setState(prev => [...prev, currentJob]);
          e.target.value = '';
        }
    }
    }

    return (
      <div>
        <h1>todos</h1>
        <div>
          <Header 
            handleAdd={handleAdd}
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
