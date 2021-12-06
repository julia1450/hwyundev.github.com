<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",
	methods: {},
}
</script>

<style>
html,
body {
	margin: 0;
	overflow: overlay;
	height: 100vh;
	/* 스크롤바 투명하게 (explorer 호환) */
	-ms-overflow-style: none;
}

::-webkit-scrollbar {
	display: none;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	min-width: 330px;
}

.section .inner {
	max-width: 1500px;
	margin: 0 auto;
}

.section {
	padding-top: 30px;
	padding-bottom: 30px;
}

.section:first-child + .section {
	margin-top: 0;
}

.title-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-bottom: 10px;
}

.section-title {
	margin-bottom: 25px;
	font-size: 20px;
}

.title-wrap .section-title {
	margin-bottom: 0;
	line-height: 34px;
}

.title-wrap .button-wrap {
	position: absolute;
	right: 0;
	margin-right: 30px;
}

.btn {
	height: 34px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 0 2px 2px rgb(0 0 0 / 20%);
}

.btn-default {
	background-color: #fff;
}

.btn a {
	text-decoration: none;
	color: #000;
}

@media all and (max-width: 330px) {
	::-webkit-scrollbar {
		display: block;
		width: 0px;
		height: 10px;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgba(139, 139, 139, 0.3);
		border-radius: 5px;
		background-clip: padding-box;
		border: 2px solid transparent;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: rgba(139, 139, 139, 0.7);
	}
	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.7);
	}
}
</style>
