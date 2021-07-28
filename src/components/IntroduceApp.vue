<template>
    <div class="section section--introduce">
        <div class="profil-image">
                
        </div>
        <div class="inner">
            <div class="common-introduce">
                <div class="name-area">
                    {{this.getIntroduceName}}
                </div>
                <ul class="contact">
                    <li><a href="#">email</a></li>
                    <li><a href="#">phone</a></li>
                </ul>
            </div>
            <div class="detail-introduce">
                <h1>introduce</h1>
                <p class="introduce-title">Frontend Developer</p>
                <p class="introduce-description">프론트엔드 개발자입니다아알어ㅏ러아ㅗ나로낟롼ㅇ란ㅇ혼이ㅏ혼이ㅏ혼아러나ㅣ돌도라ㅣㄴ도롸도</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'IntroduceApp',
    computed: {
        ...mapGetters(['getIntroduceName'])
    }
}
</script>

<style scoped>
.section--introduce {
    background-color: #e7d4ea;
    height: calc(100vh - 120px);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.profil-image {
    background: #fff center / contain no-repeat url(../assets/img/my-picture.jpg);
    min-height: calc(100vh - 120px - 300px);
    min-width: calc(100vh - 120px - 300px);
    margin-bottom: 30px;
    border-radius: 50%;
}

.section--introduce .inner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.common-introduce {
    height: 300px;
    width: 500px;
    padding: 30px 0;
    box-sizing: border-box;
    position: relative;
    padding-left: 10px;
    padding-right: 50px;
    text-align: right;
    border-right: #fff 1px solid;
}

.name-area {
    font-size: 80px;
}

.contact {
    position: absolute;
    padding-bottom: inherit;
    bottom: 0;
    width: 100%;
    padding-right: 50px;
    box-sizing: border-box;
}

.contact li {
    display: inline-block;
    margin-right: 10px;
}

.detail-introduce {
    flex-grow: 1;
    text-align: left;
    padding: 0 10px 0 50px;
}

.detail-introduce h1 {
    margin-bottom: 10px;
}
.detail-introduce .introduce-title {
    font-size: 34px;
    margin-bottom: 10px;
}

@media all and (max-height: 600px) {
    .profil-image {
        display: none;
    }
}
@media all and (max-width: 750px){
    .section--introduce .inner {
        flex-wrap: wrap;
    }
    .profil-image {
        min-height: calc(100vh - 120px - 260px);
        min-width: calc(100vh - 120px - 260px);
    }
    .common-introduce {
        text-align: center;
        border: none;
        height: auto;
        width: auto;
        padding: 30px 0 60px 0;
    }
    .name-area {
        font-size: 50px;
    }
    .contact {
        padding: 0 0 30px 0;
    }
    .detail-introduce {
        padding: 0 10px;
    }
}

@media all and (max-width: 600px) {
    .name-area {
        font-size: 40px;
    }
}

</style>