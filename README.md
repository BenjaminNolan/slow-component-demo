# Demo of slow component re-evaluation when using lots of optional classes

Click something in the scrollable pane to select that item.

When the path changes, every loaded component re-evaluates its class list due
to `get isSelected()` watching the value from the store.

We have a scenario where our app can have hundreds of these listeners per
nested component for $reasons, and there can be hundreds of instances of the
nested components in a page.

Does anyone know how these need to be changed so that only the relevant
components are re-evaluated?

Please note, this example is a bit contrived, since I wanted to simplify it as
much as possible, however imagine that there are at least 10 things which relate
to `this.selectedPath` on each component, and reduce the number of actual
components by an order of magnitude, and you've got more of an idea of what
the actual app is like.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
