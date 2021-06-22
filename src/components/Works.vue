<template>
    <div class="section section--work">
        <div class="inner">
            <h1 class="section-title">works</h1>
            <ul class="slider works-wrap">
                <li class="slider-item work-item" v-for="work in works" :key="work.workId">
                    <div class="card">
                        <img :src="work.workImgPath" alt="">
                        <div class="work-title">{{work.workTitle}}</div>
                        <div class="work-description">{{work.workDescription}}</div>
                    </div>
                </li>
            </ul>
            <div class="slider-control" v-if="maxWorkPage > 0">
                <div class="arrow-wrap">
                    <div class="arrow arrow-left" :style="leftArrowStyle" @click="moveLeftPage">left</div>
                    <div class="arrow arrow-right" :style="rightArrowStyle" @click="moveRightPage">right</div>
                </div>
                <div class="select-work-wrap">
                    <input @change="movePage" v-for="page in maxWorkPage" :key="page" type="radio" name="select-work" :value="page-1" v-model="currentWorkPage">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Works',
    mounted() {
        window.addEventListener('resize', this.handleResize);
        let worksWrapWidth = document.getElementsByClassName('works-wrap')[0].offsetWidth;
        let workItems = document.getElementsByClassName('work-item');
        for(let i = 0; i < workItems.length; i++) {
            workItems[i].style.minWidth = worksWrapWidth/this.currentWorkItem + "px";
        }
	},
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    data() {
        return {
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
            } else return 1;
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
        movePage() {
            console.log(this.currentWorkPage);
            let pageSize = document.getElementsByClassName("works-wrap")[0].offsetWidth;
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
            this.documentWidth = document.body.offsetWidth;
            let worksWrapWidth = document.getElementsByClassName('works-wrap')[0].offsetWidth;
            let workItems = document.getElementsByClassName('work-item');
            for(let i = 0; i < workItems.length; i++) {
                workItems[i].style.minWidth = worksWrapWidth/this.currentWorkItem + "px";
            }
            this.movePage();
        }
    }
}
</script>

<style scoped>
.section--work {
    background-color: #e6e6e6;
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
}
.work-item > .card > img {
    height: 30%;
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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00000036;
    line-height: 50px;
    cursor: pointer;
}

.select-work-wrap {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: transparent;
}

@media all and (max-width: 1080px) { 
    
}
</style>