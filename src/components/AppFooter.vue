<template>
    <section class="section section--footer">
        <ul class="menu">
            <li class="active"><a @click="scrollPage('page-about')" href="javascript:void(0);">about</a></li>
            <li class=""><a @click="scrollPage('page-skill')" href="javascript:void(0);">skill</a></li>
            <li class=""><a @click="scrollPage('page-works')" href="javascript:void(0);">works</a></li>
            <li class=""><a @click="scrollPage('page-contact')" href="javascript:void(0);">contact</a></li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'AppFooter',
    methods: {
        scrollPage(sectionName) {
            this.$emit("scroll", sectionName);
        }
    }
}
</script>

<style scoped>
.section--footer {
    background-color: #000;
}
.menu {
    display: flex;
    justify-content: center;
}
.menu li + li::before {
    content: "/";
    padding: 10px;
    color: #fff;
}
.menu li a {
    text-decoration: none;
    color: #fff;
}
</style>