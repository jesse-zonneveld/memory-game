import React from "react";

import "../scss/03-components/_header.scss";

const Header = (props) => {
    return <h1 className="header-main">{props.title}</h1>;
};

export default Header;
