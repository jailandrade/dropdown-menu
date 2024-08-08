import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import analyze from 'rollup-plugin-analyzer';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourceMap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourceMap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      image(),
      postcss({
        extract: true,
        minimize: true,
      }),
      babel({
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        skip: ['react', 'react-dom'],
      }),
      commonjs(),
      terser(),
      analyze({
        summaryOnly: true,
      })
    ],
  },
  {
    input: "src/styles/index.css",
    output: [{ file: "dist/index.css", format: "es" }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
]
