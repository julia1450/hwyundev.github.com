<template>
    <div class="section section--introduce">
        <div class="profil-image">
                
        </div>
        <div class="inner">
            <div class="common-introduce">
                <div class="name-area">
                    <!-- Yun HyeWon. -->
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
export default {
    name: 'Introduce'
}
</script>

<style scoped>
    .section--introduce {
        background-color: #e7d4ea;
        height: calc(100% - 120px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .section--introduce .inner {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .profil-image {
        background: url(../assets/img/logo.png) no-repeat;
        background-size: contain;
        height: 200px;
        background-position: center;
        margin-bottom: 30px;
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

    .contact li a {
        
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
</style>