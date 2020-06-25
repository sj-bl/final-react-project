import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { Link } from "react-router-dom";

import "./directory.style.scss";
import MenuItem from "../menu-items/menu-items.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherItems }) => (
        <MenuItem key={id} {...otherItems} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
