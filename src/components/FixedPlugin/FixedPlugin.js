import React from "react";
import { Button, Dropdown, DropdownToggle, Badge } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";

function FixedPlugin(props) {
  const [dropDownIsOpen, setDropDownIsOpen] = React.useState(false);

  const handleClick = () => {
    setDropDownIsOpen(!dropDownIsOpen);
  };

  return (
    <div className="fixed-plugin">
      <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
        <DropdownToggle tag="div">
          <i className="fa fa-cog fa-2x" />
        </DropdownToggle>
        <ul className="dropdown-menu show">
          <li className="adjustments-line text-center color-change">
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <>
                  <span className="color-label">LIGHT MODE</span>{" "}
                  <Badge
                    className="light-badge mr-2"
                    onClick={() => changeTheme(themes.light)}
                  />{" "}
                  <Badge
                    className="dark-badge ml-2"
                    onClick={() => changeTheme(themes.dark)}
                  />{" "}
                  <span className="color-label">DARK MODE</span>{" "}
                </>
              )}
            </ThemeContext.Consumer>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
