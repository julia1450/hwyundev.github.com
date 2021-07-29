<template>
  <div class="section section--work">
    <div class="inner">
      <div class="title-wrap">
        <h1 class="section-title">works</h1>
        <div class="button-wrap">
          <router-link to="/works">
            <button class="btn btn-default">
              <font-awesome-icon
                :icon="['fa', 'list']"
                :style="{ color: '#000' }"
                title="목록보기"
              />
              목록보기
            </button>
          </router-link>
        </div>
      </div>

      <div class="slider-control" v-if="maxWorkPage > 0">
        <div class="arrow-wrap">
          <div
            class="arrow arrow-left"
            :style="leftArrowStyle"
            @click="moveLeftPage"
          >
            left
          </div>
          <div
            class="arrow arrow-right"
            :style="rightArrowStyle"
            @click="moveRightPage"
          >
            right
          </div>
        </div>
        <div class="select-work-wrap">
          <label
            v-for="page in maxWorkPage"
            :key="page"
            :class="{ active: currentWorkPage == page - 1 }"
          >
            <input
              id="page"
              @change="movePage"
              type="radio"
              name="select-work"
              :value="page - 1"
              v-model="currentWorkPage"
            />
          </label>
        </div>
      </div>
      <ul class="slider works-wrap">
        <li
          class="slider-item work-item"
          v-for="work in works"
          :key="work.workId"
        >
          <div class="card">
            <img :src="work.workImgPath" :alt="work.workTitle" />
            <div class="work-title">{{ work.workTitle }}</div>
            <div class="work-description">{{ work.workDescription }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "WorksApp",
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.resizeWorksWrap();
    this.addSliderEvent();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      resizeTimer: null,
      resizeDelay: 30,
      barColorList: [
        "#ccbae2",
        "#f0a9a7",
        "#d9bbc7",
        "#b1cfeb",
        "#a9d6a3",
        "#e1c2c0",
        "#d8cab0",
        "#d5adcf",
      ],
      currentWorkPage: 0,
      documentWidth: document.body.offsetWidth,
    };
  },
  computed: {
    ...mapState({works: 'dashboardWorks'}),
    currentWorkItem() {
      if (this.documentWidth > 1250) {
        return 4;
      } else if (this.documentWidth > 950) {
        return 3;
      } else if (this.documentWidth > 650) {
        return 2;
      } else {
        return 1;
      }
    },
    maxWorkPage() {
      return Math.ceil(this.works.length / this.currentWorkItem);
    },
    leftArrowStyle() {
      if (this.currentWorkPage === 0) {
        return {
          opacity: 0,
          pointerEvents: "none",
        };
      } else return {};
    },
    rightArrowStyle() {
      if (this.currentWorkPage === this.maxWorkPage - 1) {
        return {
          opacity: 0,
          pointerEvents: "none",
        };
      } else return {};
    },
  },
  watch: {
      works() {
          this.$nextTick(() => {
              this.resizeWorksWrap();
          });
      }
  },
  methods: {
    resizeWorksWrap() {
      let worksWrapWidth =
        document.getElementsByClassName("works-wrap")[0].offsetWidth;
      let workItems = document.getElementsByClassName("work-item");
      let slideSelector = document.querySelectorAll(".select-work-wrap label");

      for (let i = 0; i < workItems.length; i++) {
        workItems[i].style.minWidth =
          worksWrapWidth / this.currentWorkItem + "px";
      }

      for (let slideIdx = 0; slideIdx < slideSelector.length; slideIdx++) {
        slideSelector[slideIdx].style.minWidth =
          worksWrapWidth / 2 / this.maxWorkPage + "px";
      }
    },
    addSliderEvent() {
      let self = this;
      let worksWrap = document.getElementsByClassName("section--work")[0];
      let clickOffset;
      let isItemDragged = false;

      const startFn = (e) => {
        isItemDragged = false;
        if (e.type == "touchstart") {
          clickOffset = e.changedTouches[0].clientX;
        } else clickOffset = e.clientX;
      };
      const moveFn = () => {
        isItemDragged = true;
      };
      const endFn = (e) => {
        let currentOffset;
        if (e.type == "touchend") {
          currentOffset = e.changedTouches[0].clientX;
        } else currentOffset = e.clientX;

        console.log(Math.abs(clickOffset - currentOffset));
        if (isItemDragged && Math.abs(clickOffset - currentOffset) > 50) {
          if (currentOffset > clickOffset && self.currentWorkPage != 0) {
            self.currentWorkPage--;
          } else if (
            currentOffset < clickOffset &&
            self.currentWorkPage < self.maxWorkPage - 1
          ) {
            self.currentWorkPage++;
          }
          self.movePage();
        }
      };

      worksWrap.addEventListener("mousedown", startFn, false);
      worksWrap.addEventListener("mousemove", moveFn, false);
      worksWrap.addEventListener("mouseup", endFn, false);
      worksWrap.addEventListener("touchstart", startFn, false);
      worksWrap.addEventListener("touchmove", moveFn, false);
      worksWrap.addEventListener("touchend", endFn, false);
    },
    movePage() {
      let pageSize =
        document.getElementsByClassName("works-wrap")[0].offsetWidth;
      if (this.currentWorkPage >= this.maxWorkPage) {
        this.currentWorkPage = this.maxWorkPage - 1;
      }
      document.getElementsByClassName("works-wrap")[0].style.left =
        pageSize * -1 * this.currentWorkPage + "px";
    },
    moveLeftPage() {
      this.currentWorkPage--;
      this.movePage();
    },
    moveRightPage() {
      this.currentWorkPage++;
      this.movePage();
    },
    handleResize() {
      let self = this;
      clearTimeout(self.resizeTimer);
      self.resizeTimer = setTimeout(() => {
        self.documentWidth = document.body.offsetWidth;
        self.resizeWorksWrap();
        self.movePage();
      }, self.resizeDelay);
    },
  },
};
</script>

<style scoped>
.section--work {
  background-color: #e6e6e6;
  user-select: none;
}

.section--work .inner {
  position: relative;
  overflow-x: hidden;
  padding: 0 40px;
}

.button-wrap {
  z-index: 9000;
}

.works-wrap {
  margin: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: calc(400px * 6); */
  width: calc(100% - 20px);
  height: 460px;
  position: relative;
  left: 0;
  transition: linear 0.5s;
}

.work-item {
  /* min-width: calc(100% / 3); */
  height: 100%;
  padding: 10px 0 40px 0;
  box-sizing: border-box;
}

.work-item > .card {
  /* margin: 20px auto; */
  margin: 0 20px;
  padding: 20px;
  background-color: white;
  /* width: 70%; */
  height: calc(100%);
  box-sizing: border-box;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
.work-item > .card > img {
  height: 30%;
}

.work-title,
.work-description {
  margin-top: 10px;
}

.slider-control {
  position: absolute;
  width: 100%;
  height: 490px;
  bottom: 0;
  left: 0;
}

.slider-control > .arrow-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 10px;
}

.arrow {
  z-index: 9000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00000036;
  line-height: 50px;
  cursor: pointer;
}

.select-work-wrap {
  z-index: 9000;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select-work-wrap label {
  height: 10px;
  background-color: #fff;
}

.select-work-wrap label.active {
  background-color: #b1cfeb;
}

.select-work-wrap input {
  visibility: hidden;
  height: 0;
}

@media all and (max-width: 550px) {
  .title-wrap {
    justify-content: space-between;
  }
  .title-wrap .section-title {
    margin-left: 30px;
  }
}
</style>