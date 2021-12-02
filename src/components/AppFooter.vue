<template>
	<section class="section section--footer">
		<ul class="menu">
			<li class="active">
				<router-link
					:to="{ path: baseUrl, hash: '#page-about' }"
					@click.native="scrollPage"
					href="javascript:void(0);"
				>
					about
				</router-link>
			</li>
			<li class="">
				<router-link
					:to="{ path: baseUrl, hash: '#page-skill' }"
					@click.native="scrollPage"
					href="javascript:void(0);"
				>
					skill
				</router-link>
			</li>
			<li class="">
				<router-link
					:to="{ path: baseUrl, hash: '#page-works' }"
					@click.native="scrollPage"
					href="javascript:void(0);"
				>
					works
				</router-link>
			</li>
			<li class="">
				<router-link
					:to="{ path: baseUrl, hash: '#page-contact' }"
					@click.native="scrollPage"
					href="javascript:void(0);"
				>
					contact
				</router-link>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: "AppFooter",
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
.section--footer {
	background-color: #000;
	height: 60px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
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
