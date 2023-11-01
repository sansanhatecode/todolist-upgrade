import React from "react";
import ThemeContext from "../context/ThemeContext";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = ThemeContext;

    render() {
        const { 
            totalPages,
            handlePageClick,
            currentPage,
        } = this.props;
        let theme = this.context
        const itemElements = [];
        for (let i = 1; i <= totalPages; i++) {
            itemElements.push(
                <div 
                    key={i}
                    className={`
                        w-8 h-8 text-white flex items-center justify-center rounded-full 
                        ${i===currentPage && theme === "light" ? `bg-red-300` : ``}
                        ${i===currentPage && theme === "dark" ? `bg-blue-900` : ``}
                        ${theme === "light" && i !== currentPage ? `bg-red-200` : ``}
                        ${theme === "dark" && i !== currentPage ? `bg-blue-400` : ``}
                        ${totalPages===1 ? `hidden` : `block`}
                    `}
                    onClick={(e) => handlePageClick(e, i)}
                >{i}</div>
            );
        }
        return (
            <div className={`flex justify-center gap-2 `}>
                {itemElements}
            </div>
        );

    }
}