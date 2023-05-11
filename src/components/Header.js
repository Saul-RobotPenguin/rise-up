import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { sections, title, theme } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 2, borderColor: theme.white }}>
        <Typography
          component="h2"
          variant="h5"
          color={theme.white}
          align="center"
          noWrap
          sx={{ flex: 9 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <ThemeProvider theme={theme}>
            <NavLink to={section.name}>
              <Link
                noWrap
                key={section.title}
                sx={{
                  textDecoration: "none",
                  p: 1,
                  flexShrink: 3,
                  backgroundColor: theme.orange,
                  textTransform: "none",
                  ":hover": {
                    bgcolor: theme.orange,
                    color: theme.white,
                  },
                }}
              >
                {section.title}
              </Link>
            </NavLink>
          </ThemeProvider>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
