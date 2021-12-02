<template>
	<div class="section section--work">
		<h1>WorkList</h1>
		<div class="work-content-wrap">
			<div class="work-list">
				<WorkListItem v-for="work in works" :key="work.workId">{{
					work.workTitle
				}}</WorkListItem>
			</div>
			<div class="work-detail"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
import WorkListItem from "@/components/works/WorkListItem"
export default {
	name: "WorkList",
	components: {
		WorkListItem,
	},
	created() {
		this.$store.dispatch("fetchWorks")
	},
	computed: {
		...mapGetters({
			works: "getDashboardWorks",
		}),
	},
}
</script>

<style scoped>
.section--work {
	height: calc(100vh - 180px);
}
.work-content-wrap {
	display: flex;
}
</style>
