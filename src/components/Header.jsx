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
                    className="
                        pl-14 py-4 w-[500px] rounded-t-lg border-red-200 border-b-2 focus:outline-none text-xl
                        placeholder:text-gray-300 placeholder:italic"
                    type="text"
                    value={currentJob}
                    placeholder="What needs to be done?"
                    onChange = {this.onChangeInput}
                    onKeyDown = {this.handleKeyDown}
                />
            </div>
        )
    }
}

export default Header;