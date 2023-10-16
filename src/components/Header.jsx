import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {handleAdd} = this.props;
        return (
            <div>
                <input 
                    type="text"
                    placeholder="Bạn cần làm công việc gì?"
                    onKeyDown = {(e) => handleAdd(e)}
                />
            </div>
        )
    }
}

export default Header;