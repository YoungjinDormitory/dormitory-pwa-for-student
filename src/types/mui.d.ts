import { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    disable: Palette["primary"];
  }

  interface PaletteOptions {
    /**
     * @param light?: string;
     * @param main: string;
     * @param dark?: string;
     * @param contra  stText?: string;
     */
    disable: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    disable: true;
  }
}
