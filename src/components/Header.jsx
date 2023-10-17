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
        const {handleDownButtonClick} = this.props;
        return (
            <div className="flex gap-4 items-center border-red-200 border-b-2 bg-white pl-4">
                <button
                    className="w-8 h-8"
                    onClick = {handleDownButtonClick}
                >
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <input 
                    className="
                        py-4 w-[500px] rounded-t-lg  focus:outline-none text-xl
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