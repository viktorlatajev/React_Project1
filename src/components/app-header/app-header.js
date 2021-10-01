import React from "react";

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Список дел</h1>
            <h2>{allPosts - liked} еще надо сделать, {liked} сделано</h2>
        </div>
    )
}

export default AppHeader;