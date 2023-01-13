import { createTheme, Typography} from '@mui/material';
import { alpha } from "@mui/material/styles";
import styled from "@emotion/styled";

export const Colors = createTheme({
  palette: {
    primary: {
      main: "#038BD4",
      dark: "#016194",
      light: "#038BD450",
      medium: "#038BD490",
    },
    secondary: {
      main: "#323030", //gray
      footer: "#B6B6B6",
      contrastText: "#fff",
      textLight: "#908c8c",
      black: "#000"
    },
    background: {
        main: "#fff",
        default: "#FAF8F8",
        light: "#F7F7F7",
        medium: "#D9D9D9",
        dark: "#222222",

    }
  }
});

const theme = createTheme({
  components: {
    MuiLink: {
      variants: [
        {
          props: {
            variant: "footer"
          },
          style: {
            color: Colors.palette.secondary.footer,
            fontFamily: "Yantramanav",
            fontWeight: "400",
            fontSize: { xs: '12px', md: '14px' },
            underline: "none",
            "&:hover": {
              color: Colors.palette.primary.main,
            }
          }
        },
        {
          props: {
            variant: "main"
          },
          style: {
            color: Colors.palette.secondary.contrastText,
            underline: "none",
            "&:hover": {
              color: "blue",
            }
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "outlined"
          },
          style: {
            textTransform: "none",
            border: `1.5px solid ${Colors.palette.secondary.main}`,
            color: Colors.palette.secondary.main,
            borderRadius: 2,
            "&:hover": {
              color: Colors.palette.secondary.light,
              backgroundColor: alpha(Colors.palette.secondary.main, 0.25),
              border: `1.5px solid ${Colors.palette.secondary.light}`
            },
            "&:active": {
              backgroundColor: Colors.palette.secondary.light,
              color: "#fff"
            }
          }
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            border: `1.5px solid ${Colors.palette.secondary.contrastText}`,
            color: Colors.palette.secondary.contrastText,
            "&:hover": {
              color: Colors.palette.secondary.main,
              backgroundColor: alpha(Colors.palette.secondary.light, 0.4),
              border: `1.5px solid ${Colors.palette.secondary.contrastText}`
            },
            "&:active": {
              backgroundColor: Colors.palette.secondary.contrastText,
              color: Colors.palette.secondary.main
            }
          }
        },
        {
          props: {
            variant: "filled"
          },
          style: {
            textTransform: "none",
            border: `1.5px solid ${alpha(Colors.palette.primary.main, 0.9)}`,
            backgroundColor: alpha(Colors.palette.primary.main, 0.9),
            color: Colors.palette.secondary.contrastText,
            borderRadius: 2,
            "&:hover": {
              color: Colors.palette.primary.contrastText,
              backgroundColor: Colors.palette.primary.dark,
              border: `1.5px solid ${Colors.palette.primary.dark}`
            },
            "&:active": {
              backgroundColor: Colors.palette.primary.dark,
              color: "#fff"
            }
          }
        },
        {
          props: { variant: "filled", color: "secondary" },
          style: {
            border: `1.5px solid ${alpha(Colors.palette.secondary.main, 0.95)}`,
            backgroundColor: alpha(Colors.palette.secondary.main, 0.95),
            "&:hover": {
              color: Colors.palette.secondary.contrastText,
              backgroundColor: Colors.palette.secondary.light,
              border: `1.5px solid ${Colors.palette.secondary.light}`
            },
            "&:active": {
              backgroundColor: Colors.palette.secondary.light,
              color: Colors.palette.secondary.main
            }
          }
        }
      ]
    }
  }
});

export default theme;

export const Title = styled(Typography)(({ theme, variant }) => ({
  ...(variant === "title-light" && {
    color: Colors.palette.secondary.contrastText
  }),
  ...(variant === "title-dark" && {
    color: Colors.palette.secondary.black
  }),
  fontFamily: "Oswald",
  fontWeight: "600",
  fontSize: "60px",
  //[theme.breakpoints.down("xs")]: {
  //  fontSize: "50px",
  //},
}));

export const CardTitle = styled(Typography)(({ theme}) => ({
  
fontFamily: "Oswald",
  fontWeight: "600",
  fontSize: "28px",
  //[theme.breakpoints.down("xs")]: {
  //  fontSize: "24px",
  //},
}));

export const BannerText = styled(Typography)(({ theme }) => ({
  fontFamily: "Yantramanav",
  color: Colors.palette.secondary.contrastText,
  fontWeight: "700",
  fontSize: "130px",
  opacity: "70%"
  //[theme.breakpoints.down("xs")]: {
  //  fontSize: "50px",
  //},
}));

export const Label = styled(Typography)(({ theme }) => ({

  color: Colors.palette.secondary.textLight,
  fontFamily: "Yantramanav",
  fontWeight: "500",
  fontSize: "20px",
  //[theme.breakpoints.down("xs")]: {
  //  fontSize: "18px",
  //},
}));

export const Content = styled(Typography)(({ theme }) => ({

  color: Colors.palette.secondary.textLight,
  fontFamily: "Yantramanav",
  fontWeight: "400",
  fontSize: "18px",
  //[theme.breakpoints.down("xs")]: {
  //  fontSize: "16px",
  //},
}));

export const TeamLogo = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  padding: '10px',
  //[theme.breakpoints.down("md")]: {
  //  width: "80%",
  //  padding: '5px',
  //},
}));

export const TeamTitle = styled(Typography)(({ theme }) => ({
  color: Colors.palette.secondary.black,
  fontFamily: "Yantramanav",
  fontWeight: "500",
  fontSize: "1.5rem",
  //[theme.breakpoints.down("xs")]: {
  //  fontSize: "1.2rem",
  //},
}));



