import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "green",
  defaultGradient: { from: 'green', to: 'black' },
  focusRing: "always",
  respectReducedMotion: true,
  dateFormat: "YYYY-MM-DD",
};
