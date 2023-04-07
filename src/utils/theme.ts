import { MantineTheme, rem } from "@mantine/core";

export const theme = {
  dir: "ltr",
  focusRing: "auto",
  defaultRadius: 0,
  loader: "bars",
  colorScheme: "light",
  white: "",
  black: "",
  colors: {
    blue: [
      "#EAF4FF",
      "#3694FF",
      "#3694FF",
      "#0072F5",
      "#0952A5",
      "#0A4281",
      "#0D3868",
      "#0F3158",
      "#102C4C",
      "#10253E",
    ],
  },
  primaryColor: "blue",
  focusRingStyles: {
    resetStyles: () => ({ outline: "none" }),
    styles: (theme: { colors: { orange: any[] } }) => ({
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    }),
    inputStyles: (theme: { colors: { orange: any[] } }) => ({
      outline: `${rem(2)} solid ${theme.colors.orange[5]}`,
    }),
  },
};
