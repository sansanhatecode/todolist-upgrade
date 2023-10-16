import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {
            handleAdd,
            job,
        } = this.props;
        return (
            <div>
                <input 
                    type="text"
                    value={job}
                    placeholder="Bạn cần làm công việc gì?"
                    onKeyDown = {(e) => handleAdd(e)}
                />
            </div>
        )
    }
}

export default Header;