export const parameters = {
  backgrounds: {
    default: "darkMe",
    values: [
      {
        name: "darkMe",
        value: "#222121",
      },
      {
        name: "gradientMe",
        value: `linear-gradient(
          90deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(107, 9, 121, 0.9472163865546218) 35%,
          rgba(0, 212, 255, 1) 100%
        )`
    }
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
