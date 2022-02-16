<template>
	<div class="admin-wrapper">관리자페이지</div>
</template>

<script>
export default {
	name: "AdminPage",
	data() {
		return {
			baseUrl: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
		}
	},
	methods: {},
}
</script>

<style>
.admin-wrapper {
	background-color: #f8f4fe;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
