import { DefaultThemeColors } from "shared/theme";

export default {
  common: {
    background: "#1C1421",
    foreground: "#F5F3F7",
    white: "#FFFFFF",
  },
  primary: {
    lighter: "#F5CBEB",
    light: "#EB93D5",
    main: "#DE4BB8",
    dark: "#971C77",
    darker: "#340929",
  },
  secondary: {
    lighter: "#F4ECF9",
    light: "#EFD9FC",
    main: "#C489E6",
    dark: "#885BA4",
    darker: "#846C93",
  },
  accent: {
    lighter: "#C3DBFE",
    light: "#81B5FD",
    main: "#3185FC",
    dark: "#0353C4",
    darker: "#023379",
  },
  gray: {
    "100": "#E6E3E8",
    "200": "#CFCBD2",
    "300": "#B8B2BD",
    "400": "#A19AA7",
    "500": "#8A8391",
    "600": "#736C7A",
    "700": "#5C5562",
    "800": "#453F4B",
    "900": "#2E2933",
  },
  gradient: {
    transparent: "linear-gradient(150deg, #2E293300 0%, #2E293300 100%)",
    primary: "linear-gradient(150deg, #de4bb8ff 0%, #bc0fd8ff 100%)",
    primaryDisabled:
      "linear-gradient(126.91deg, #989096 24.33%, #786F76 75.67%)",
    secondary: "linear-gradient(113.88deg, #F4ECF9 29.51%, #EFD9FC 70.49%)",
  },
  background: {
    default: "#1C1421",
  },
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
  },
} as DefaultThemeColors;
