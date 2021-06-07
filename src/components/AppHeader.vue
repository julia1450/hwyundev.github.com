<template>
    <header class="section section--header">
        <div class="inner">
            <div class="logo"></div>
            <ul class="menu">
                <li class="active"><a href="/">about</a></li>
                <li class=""><a href="#">works</a></li>
                <li class=""><a href="#">portfolio</a></li>
                <li class=""><a href="#">contact</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
    .section--header {
        padding: 10px;
        display: flex;
        height: 60px;
        box-sizing: border-box;
        justify-content: center;
    }
    .section--header .inner {
        margin: auto 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        width:30px;
        height: 30px;
        background-image: url("../assets/img/logo.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .menu{
        display: flex;
        margin: 0;
        padding: 0;
    }
    .menu li {
        margin-right: 10px;
        padding: 10px 10px;
    }
    .menu li:last-child {
        margin-right: 0;
    }

</style>