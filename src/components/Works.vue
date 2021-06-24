<template>
    <div class="section section--work">
        <div class="inner">
            <h1 class="section-title">works</h1>
            <div class="slider-control" v-if="maxWorkPage > 0">
                <div class="arrow-wrap">
                    <div class="arrow arrow-left" :style="leftArrowStyle" @click="moveLeftPage">left</div>
                    <div class="arrow arrow-right" :style="rightArrowStyle" @click="moveRightPage">right</div>
                </div>
                <div class="select-work-wrap">
                    <label v-for="page in maxWorkPage" :key="page" :class="{'active': currentWorkPage == page-1}">
                        <input id="page" @change="movePage" type="radio" name="select-work" :value="page-1" v-model="currentWorkPage">
                    </label>
                </div>
            </div>
            <ul class="slider works-wrap">
                <li class="slider-item work-item" v-for="work in works" :key="work.workId">
                    <div class="card">
                        <img :src="work.workImgPath" alt="">
                        <div class="work-title">{{work.workTitle}}</div>
                        <div class="work-description">{{work.workDescription}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Works',
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.resizeWorksWrap();
        this.addSliderEvent();
	},
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    data() {
        return {
            resizeTimer: null,
            resizeDelay: 30,
            barColorList: ["#ccbae2","#f0a9a7", "#d9bbc7", "#b1cfeb", "#a9d6a3", "#e1c2c0", "#d8cab0", "#d5adcf"],
            works: [
                {
                    workId: 1,
                    workTitle: "제목입니다1",
                    workDescription: "설명입니다1",
                    workImgPath: require('../assets/img/logo.png')
                },
                {
                    workId: 2,
                    workTitle: "제목입니다2",
                    workDescription: "설명입니다2",
                    workImgPath: require('../assets/img/logo.png')
                },
                {
                    workId: 3,
                    workTitle: "제목입니다3",
                    workDescription: "설명입니다3",
                    workImgPath: require('../assets/img/logo.png')
                },
                {
                    workId: 4,
                    workTitle: "제목입니다4",
                    workDescription: "설명입니다4",
                    workImgPath: require('../assets/img/logo.png')
                },
                {
                    workId: 5,
                    workTitle: "제목입니다5",
                    workDescription: "설명입니다5",
                    workImgPath: require('../assets/img/logo.png')
                },
                {
                    workId: 6,
                    workTitle: "제목입니다6",
                    workDescription: "설명입니다6",
                    workImgPath: require('../assets/img/logo.png')
                },
                {
                    workId: 7,
                    workTitle: "제목입니다7",
                    workDescription: "설명입니다7",
                    workImgPath: require('../assets/img/logo.png')
                }
            ],
            currentWorkPage: 0,
            documentWidth: document.body.offsetWidth
        }
    },
    computed: {
        currentWorkItem() {
            if(this.documentWidth > 1250) {
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
            return Math.ceil(this.works.length/this.currentWorkItem);
        },
        leftArrowStyle() {
            if(this.currentWorkPage === 0) {
                return {
                    opacity: 0,
                    pointerEvents: 'none'
                };
            }
            else return {};
        },
        rightArrowStyle() {
            if(this.currentWorkPage === this.maxWorkPage-1) {
                return {
                    opacity: 0,
                    pointerEvents: 'none'
                };
            }
            else return {};
        }
    },
    methods: {
        resizeWorksWrap() {
            let worksWrapWidth = document.getElementsByClassName('works-wrap')[0].offsetWidth;
            let workItems = document.getElementsByClassName('work-item');
            let slideSelector = document.querySelectorAll('.select-work-wrap label');
            
            for(let i = 0; i < workItems.length; i++) {
                workItems[i].style.minWidth = worksWrapWidth/this.currentWorkItem + "px";
            }
            
            for(let slideIdx = 0; slideIdx < slideSelector.length; slideIdx ++) {
                slideSelector[slideIdx].style.minWidth = worksWrapWidth/2/this.maxWorkPage + "px";
            }
        },
        addSliderEvent() {
            let self = this;
            let worksWrap = document.getElementsByClassName('section--work');
            let clickOffset;
            let isItemDragged = false;

            function startFn (e) {
                isItemDragged = false;
                clickOffset = e.clientX;
            }
            function moveFn () {
                isItemDragged = true;
            }
            function endFn (e) {
                if(isItemDragged) {
                    if(e.clientX > clickOffset && self.currentWorkPage != 0 ) {
                        self.currentWorkPage--;
                    } else if (e.clientX < clickOffset && self.currentWorkPage < self.maxWorkPage-1) {
                        self.currentWorkPage++;
                    }
                    self.movePage();
                }
            }

            worksWrap[0].addEventListener('mousedown', startFn, false);
            worksWrap[0].addEventListener('mousemove', moveFn, false);
            worksWrap[0].addEventListener('mouseup', endFn, false);
            worksWrap[0].addEventListener('touchstart', startFn, false);
            worksWrap[0].addEventListener('touchmove', moveFn, false);
            worksWrap[0].addEventListener('touchend', endFn, false);
            
        },
        movePage() {
            let pageSize = document.getElementsByClassName("works-wrap")[0].offsetWidth;
            if (this.currentWorkPage >= this.maxWorkPage) {
                this.currentWorkPage = this.maxWorkPage-1;
            }
            document.getElementsByClassName("works-wrap")[0].style.left = (pageSize * -1 * this.currentWorkPage) + 'px';
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
            clearTimeout(this.resizeTimer);
            self.resizeTimer = setTimeout(function(){
                self.documentWidth = document.body.offsetWidth;
                self.resizeWorksWrap();
                self.movePage();
            }, self.resizeDelay);
        }
    }
}
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

.works-wrap {
    margin: 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* width: calc(400px * 6); */
    width: calc(100% - 20px);
    height: 500px;
    position: relative;
    left: 0;
    transition: linear 0.5s;
}

.work-item {
    /* min-width: calc(100% / 3); */
    height: 100%;
}

.work-item > .card {
    /* margin: 20px auto; */
    margin: 0 20px;
    padding: 20px;
    background-color: white;
    /* width: 70%; */
    height: calc(100% - 40px);
    box-sizing: border-box;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
.work-item > .card > img {
    height: 30%;
}

.work-title, .work-description {
    margin-top: 10px;
}

.slider-control {
    position: absolute;
    width: 100%;
    height: 500px;
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
    z-index: 9999;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00000036;
    line-height: 50px;
    cursor: pointer;
}

.select-work-wrap {
    z-index: 9999;
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

@media all and (max-width: 1080px) { 
    
}
</style>