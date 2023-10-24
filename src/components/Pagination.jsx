import React from "react";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            totalPages,
            handlePageClick,
            currentPage,
        } = this.props;
        const itemElements = [];
        for (let i = 1; i <= totalPages; i++) {
            itemElements.push(
                <div 
                    key={i}
                    className={`
                        w-8 h-8 text-white flex items-center justify-center rounded-full 
                        ${i===currentPage ? `bg-red-300` : `bg-red-200 border-none`}
                        ${totalPages===1 ? `hidden` : `block`}
                    `}
                    onClick={(e) => handlePageClick(e, i)}
                >{i}</div>
            );
        }
        return (
            <div className="flex justify-center gap-2 absolute bottom-28">
                {itemElements}
            </div>
        );

    }
}