declare module "@mui/material/styles" {
  interface Palette {
    disable: {
      light?: string;
      main: string;
      dark?: string;
      constrastText?: string;
    };
  }

  interface PaletteOptions {
    /**
     * @param light?: string;
     * @param main: string;
     * @param dark?: string;
     * @param contra  stText?: string;
     */
    disable: {
      light?: string;
      main: string;
      dark?: string;
      constrastText?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    enable: true;
  }
}
