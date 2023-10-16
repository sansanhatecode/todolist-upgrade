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
      this.setState({
        currentJob: e.target.value
      });
      if(currentJob.trim() !==""){
        if (e.keyCode === 13) {
          this.setState({
            jobs: prev => [...prev, currentJob]
          });
          e.target.value = '';
        }
    }
    }

    return (
      <div>
        <h1>todos</h1>
        <div>
          <Header 
            job={currentJob}
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
