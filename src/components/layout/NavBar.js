import React, { Component } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavBar extends Component {
  static defaultProps = {
    title: "GitHub Finder"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={"navbar bg-primary"}>
        <h1>
          <i>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </i>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default NavBar;
