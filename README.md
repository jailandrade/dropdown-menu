# Dropdown Menu

This is a simple dropdown menu to display an array of strings and select one.


## How to use


You could use this component in two ways:

### Select any option

```jsx
import {DropdownMenu} from "@jailandrade/dropdown-menu";

function App() {
  const options = [
    "Victor",
    "Emiliano",
    "Maximiliano",
    "Juan Gabriel",
    "Juan Camaney",
    "Gol D. Roger",
    "Hercules",
  ];
  return (
    <div class="p-8">
      <DropdownMenu legend="Elige un usuario" options={options} match="" />
    </div>
  );
}
```

### Only one option is selectable

If you pass a string to the `match` prop, then only that option will be selectable.


To use this package you could use the next snippet:

```jsx
import {DropdownMenu} from "@jailandrade/dropdown-menu";

function App() {
  const options = [
    "Victor",
    "Emiliano",
    "Maximiliano",
    "Juan Gabriel",
    "Juan Camaney",
    "Gol D. Roger",
    "Hercules",
  ];
  return (
    <div class="p-8">
      <DropdownMenu legend="Elige un usuario" options={options} match="" />
    </div>
  );
}
```

If you pass a string to the `match` prop, then only that option will be selectable.
