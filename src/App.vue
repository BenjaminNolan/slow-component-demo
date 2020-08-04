<template>
  <div id="app">
    <h1>Demo of slow component re-evaluation when using lots of optional classes</h1>
    <p>
      Click something to select it.
    </p>
    <p>
      When the path changes, every loaded component re-evaluates its class list due
      to <code>get isSelected()</code> watching the value from the store.
    </p>
    <p>
      We have a scenario where our app can have hundreds of these listeners per
      nested component for $reasons, and there can be hundreds of instances of the
      nested components in a page.
    </p>
    <p>
      Does anyone know how these need to be changed so that only the relevant
      components are re-evaluated?
    </p>
    <p>
      Please note, this example is a bit contrived, since I wanted to simplify it as
      much as possible, however imagine that there are at least 10 things which relate
      to <code>this.selectedPath</code> on each component, and reduce the number of
      actual components by an order of magnitude, and you've got more of an idea of
      what the actual app is like.
    </p>
    <div class="items-container">
      <nested-item
        v-for="(item, i) in data"
        :data="item"
        :key="`nested-item-${i}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NestedItem from './components/NestedItem.vue';

export interface DataItem {
  num: number;
  prefix: string;
  children: DataItem[];
}

@Component({
  components: {
    NestedItem,
  },
})
export default class App extends Vue {
  public data: DataItem[] = []

  // eslint-disable-next-line class-methods-use-this
  async created(): Promise<void> {
    for (let i = 0; 1000 > i; i += 1) {
      const item: DataItem = {
        num: 0,
        prefix: `${i}-`,
        children: [],
      };

      let curr = item;
      for (let j = 1; 10 > j; j += 1) {
        const child: DataItem = {
          num: j,
          prefix: `${i}-`,
          children: [],
        };

        curr.children.push(child);

        curr = child;
      }

      this.data.push(item);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 960px;
  margin: 0 auto;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  max-height: 600px;
  overflow: auto;
}
</style>
