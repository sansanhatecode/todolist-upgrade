import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJob: '',
        }
    }

    onChangeInput = (e) => {
        const {value} = e.target;
        this.setState({
            currentJob: value,
        })
        console.log (value)
    }

    handleKeyDown = (e) => {
        if (e.key ==="Enter"){
            const {currentJob} = this.state;
            const {headerProps} = this.props;
            const addItem = currentJob;
            headerProps(addItem);
            this.setState({
                currentJob:'',
            })
        }
    }

    render(){
        const {currentJob} = this.state;
        return (
            <div>
                <input 
                    className="px-8 py-2 w-[400px] rounded-t-lg border-red-200 border-b-2"
                    type="text"
                    value={currentJob}
                    placeholder="Bạn cần làm công việc gì?"
                    onChange = {this.onChangeInput}
                    onKeyDown = {this.handleKeyDown}
                />
            </div>
        )
    }
}

export default Header;