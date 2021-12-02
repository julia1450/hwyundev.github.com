<template>
	<header class="section section--header">
		<div class="inner">
			<div class="logo"></div>
			<ul class="menu">
				<li class="active">
					<router-link
						:to="{ path: baseUrl, hash: '#page-about' }"
						@click.native="scrollPage"
						href="javascript:void(0);"
					>
						<font-awesome-icon
							:icon="['fa', 'address-card']"
							:style="{ color: '#ccbae2' }"
							title="about"
						/>
					</router-link>
				</li>
				<li class="">
					<router-link
						:to="{ path: baseUrl, hash: '#page-skill' }"
						@click.native="scrollPage"
						href="javascript:void(0);"
					>
						<font-awesome-icon
							:icon="['fa', 'brain']"
							:style="{ color: '#ccbae2' }"
							title="skill"
						/>
					</router-link>
				</li>
				<li class="">
					<router-link
						:to="{ path: baseUrl, hash: '#page-works' }"
						@click.native="scrollPage"
						href="javascript:void(0);"
					>
						<font-awesome-icon
							:icon="['fa', 'archive']"
							:style="{ color: '#ccbae2' }"
							title="works"
						/>
					</router-link>
				</li>
				<li class="">
					<router-link
						:to="{ path: baseUrl, hash: '#page-contact' }"
						@click.native="scrollPage"
						href="javascript:void(0);"
					>
						<font-awesome-icon
							:icon="['fa', 'at']"
							:style="{ color: '#ccbae2' }"
							title="contact"
						/>
					</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {
	name: "AppHeader",
	data() {
		return {
			baseUrl: process.env.NODE_ENV === "production" ? "/portfolio" : "/",
		}
	},
	methods: {
		scrollPage() {
			let sectionName = this.$route.hash.slice(1)
			this.$store.commit("scrollPage", sectionName)
		},
	},
}
</script>

<style scoped>
.section--header {
	padding: 10px;
	display: flex;
	height: 60px;
	box-sizing: border-box;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 9999;
	background-color: #fff;
	box-shadow: 0 3px 10px -3px #e6e6e6;
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
	width: 53px;
	height: 41px;
	background-image: url("~@/assets/img/hyevlog-logo.png");
	background-repeat: no-repeat;
	background-size: contain;
}

.menu {
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
