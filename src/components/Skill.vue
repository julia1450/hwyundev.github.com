<template>
    <div class="section section--skills">
        <div class="inner">
            <h1 class="section-title">Skillset</h1>
            <div class="skill-grid">
                <div class="skill-item" v-for="skill in skills" :key="skill.skillId">
                    <div class="skill-name-wrap">
                        <img :src="skill.skillImgPath" alt="" width="50" height="50"><p class="skill-name">{{skill.skillName}}</p>
                    </div>
                    <div class="circle_progress_wrap">
                        <svg class="circle_progress" width="120" height="120" viewBox="0 0 120 120">
                            <circle class="frame" cx="60" cy="60" :r="progressRadius" stroke-width="12" />
                            <circle class="bar" cx="60" cy="60" :r="progressRadius" stroke-width="12" :style="{'stroke-dasharray': calculateDasharray(), 'stroke-dashoffset': calculateDashoffset(skill.skillPer)}"/>
                        </svg>
                        <strong class="value">{{skill.skillPer}}%</strong>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Skill',
    data() {
        return {
            progressRadius: 54,
            skills: [
                {
                    skillId: 1,
                    skillPer: 80,
                    skillName: 'HTML5',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 2,
                    skillPer: 50,
                    skillName: 'CSS',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 3,
                    skillPer: 80,
                    skillName: 'JavaScript + JQuery',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 4,
                    skillPer: 20,
                    skillName: 'TypeScript',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 5,
                    skillPer: 50,
                    skillName: 'MySQL',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 6,
                    skillPer: 70,
                    skillName: 'Spring + SpringBoot',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 7,
                    skillPer: 70,
                    skillName: 'VueJS',
                    skillImgPath: require('../assets/img/logo.png')
                },
                {
                    skillId: 8,
                    skillPer: 10,
                    skillName: 'ReactJS',
                    skillImgPath: require('../assets/img/logo.png')
                }
            ]
        }
    },
    methods: {
        calculateDasharray() {
            let CIRCUMFERENCE = 2 * Math.PI * this.progressRadius;
            return CIRCUMFERENCE;
        },
        calculateDashoffset(per) {
            let CIRCUMFERENCE = 2 * Math.PI * this.progressRadius;
            return CIRCUMFERENCE * (1 - (per / 100));
        }
    }
}
</script>
<style scoped>
.skill-grid {
    margin: 0 10px;
}
.circle_progress_wrap {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}
.circle_progress { transform: rotate(-90deg); }
.frame, .bar { fill: none; }
.frame { stroke: #e6e6e6; }
.bar {
  stroke: #03c75a;
  stroke-linecap: round;
}
.value {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
  color: #888;
  font-size: 16px;
  line-height: 120px;
}
</style>