<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img
          :src="availableParts.heads[selectedHeadIndex].src"
          title="head"
        >
        <button
          class="prev-selector"
          @click="selectPreviousHead()"
        >
          &#9668;
        </button>
        <button
          class="next-selector"
          @click="selectNextHead()"
        >
          &#9658;
        </button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img
          :src="availableParts.heads[0].src"
          title="left arm"
        >
        <button class="prev-selector">
          &#9650;
        </button>
        <button class="next-selector">
          &#9660;
        </button>
      </div>
      <div class="center part">
        <img
          :src="availableParts.heads[0].src"
          title="left arm"
        >
        <button class="prev-selector">
          &#9668;
        </button>
        <button class="next-selector">
          &#9658;
        </button>
      </div>
      <div class="right part">
        <img
          :src="availableParts.heads[0].src"
          title="left arm"
        >
        <button class="prev-selector">
          &#9650;
        </button>
        <button class="next-selector">
          &#9660;
        </button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img
          :src="availableParts.heads[0].src"
          title="left arm"
        >
        <button class="prev-selector">
          &#9668;
        </button>
        <button class="next-selector">
          &#9658;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import availableParts from '../data/parts';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
    };
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex += 1;
    },
    selectPreviousHead() {
      this.selectedHeadIndex -= 1;
    },
  },
};
</script>
<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;

}
.part img {
  width:165px;

}
.top-row {
  display:flex;
  justify-content: space-around;

}
.middle-row {
  display:flex;
  justify-content: center;

}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;

}
.head {
  border-bottom: none;

}
.left {
  border-right: none;

}
.right {
  border-left: none;

}
.left img {
  transform: rotate(-90deg);

}
.right img {
  transform: rotate(90deg);

}
.bottom {
  border-top: none;

}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;

}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;

}
.center .prev-selector, .center .next-selector {
  opacity:0.8;

}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;

}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;

}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;

}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;

}
.right .next-selector {
  right: -3px;

}

</style>
