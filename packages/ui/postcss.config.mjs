import breakpoints from "./postcss.breakpoints.mjs";

export default {
  plugins: {
    breakpoints,
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
    // cssnano: { preset: 'default' },
  },
};
