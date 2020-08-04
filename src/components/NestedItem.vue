<template>
  <div :class="[
    {
      'is-odd': isOdd,
      'is-even': !isOdd,
      'is-selected': isSelected,
    },
    `nest-level-${nestLevel}`,
    'nested-item',
  ]"
  @click.stop="onItemClick">
    <h1>Item {{ data.prefix }}{{ data.num }}</h1>
    <div v-if="hasChildren">
      <nested-item
        v-for="item in data.children"
        :data="item"
        :key="`nested-item-${item.prefix}${item.num}`"
        :nest-level="nestLevel + 1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { DataItem } from '../App.vue';

@Component
export default class NestedItem extends Vue {
  @Prop({ type: Object })
  private data!: DataItem;

  @Prop({ type: Number, default: () => 0 })
  private nestLevel!: number;

  @Prop({ type: Number, default: () => 10 })
  private numChildren!: number;

  @Getter('Slow/getSelectedPath')
  selectedPath!: string;

  @Action('Slow/setSelectedPath')
  setSelectedPath!: (path: string) => void;

  get hasChildren(): boolean {
    return 0 < this.data.children.length;
  }

  get isOdd(): boolean {
    return 1 === this.data.num % 2;
  }

  get path(): string {
    return `nested-item-${this.data.prefix}${this.data.num}`;
  }

  get isSelected(): boolean {
    return this.selectedPath === this.path;
  }

  onItemClick(): void {
    this.setSelectedPath(this.path);
  }
}
</script>

<style lang="scss">
h1 {
  margin: 0;
  font-size: 1em;
}

.nested-item {
  background: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
  padding: 6px 0 0 16px;

  & & {
    border-bottom: 0;
    border-right: 0;
  }

  &.nest-level-0 {
    flex-basis: 25%;
  }

  &.is-selected {
    background: #0c0;
  }
}
</style>
