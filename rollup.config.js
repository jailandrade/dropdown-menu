import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "esm",
  },
  plugins: [
    image(),
    resolve(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    commonjs(),
  ],
  external: ["react", "react-dom"],
}
