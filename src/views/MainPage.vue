<template>
	<div>
		<IntroduceApp id="page-about" />
		<SkillApp id="page-skill" />
		<WorksApp id="page-works" />
		<ContactApp id="page-contact" />
	</div>
</template>

<script>
import IntroduceApp from "@/components/IntroduceApp.vue"
import SkillApp from "@/components/SkillApp.vue"
import WorksApp from "@/components/works/WorksApp.vue"
import ContactApp from "@/components/ContactApp.vue"

export default {
	name: "AppMain",
	components: {
		IntroduceApp,
		SkillApp,
		WorksApp,
		ContactApp,
	},
	mounted() {
		this.$nextTick(() => {
			document.getElementById(this.$route.hash.replace("#", "")).scrollIntoView()
		})
	},
	beforeRouteLeave(to, from, next) {
		let position = document.documentElement.scrollTop || document.body.scrollTop
		from.meta.savedPosition = position
		console.log(from)
		next()
	},
}
</script>
