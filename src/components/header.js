import React from "react";

import "../scss/03-components/_header.scss";

const Header = (props) => {
    return <h1 className="headline headline--large">{props.title}</h1>;
};

export default Header;
