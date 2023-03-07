import { React, Component, forwardRef } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Global, css } from '@emotion/react';
import {
  createBrowserRouter,
  RouterProvider,
  Link as RouterLink,
  Outlet,
} from 'react-router-dom';

import Root from './routes/Root';
import Appbar from './Appbar';

const LinkBehavior = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { href, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RouterLink ref={ref} to={href} {...other} />;
});

// Custom themes
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const router = createBrowserRouter([
  {
    element:
  <>
    <Appbar />
    <Outlet />
  </>,
    // loader: rootLoader
    children: [
      {
        path: '/',
        element: <Root />,
      },
    ],
  },
]);

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
                    body {
                    margin: 0;
                    padding: 0;
                    }
                `}
        />
        <Box component="div">
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    );
  }
}
