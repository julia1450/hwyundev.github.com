<template>
	<div class="section section--work">
		<div class="work-content-wrap inner">
			<div class="work-list" ref="work-list" @scroll="changeTargetWork">
				<ul v-if="works != null">
					<li
						@click="selectWork"
						ref="work-item"
						class="card"
						v-for="work in works"
						:key="work.workId"
						:class="{
							active: targetWork != null && targetWork.workId == work.workId,
						}"
					>
						<div class="thumnail">
							<img :src="work.workImgPath" />
						</div>
						<div class="work-info">
							<div class="title">{{ work.workTitle }}</div>
							<div class="summary">{{ work.workDescription }}</div>
							<div class="role">프론트엔드 개발</div>
							<div class="period">2021.01.30 ~ 2021.03.21</div>
						</div>
					</li>
					<li class="card hidden"></li>
					<li class="card hidden"></li>
					<li class="card hidden"></li>
					<li class="card hidden"></li>
				</ul>
			</div>
			<div class="work-detail">
				<template v-if="targetWork != null">
					<div class="bottom-drawer"></div>
					<div class="work-info">
						<div class="title">{{ targetWork.workTitle }}</div>
						<div class="summary">{{ targetWork.workDescription }}</div>
						<div class="role">프론트엔드 개발</div>
						<div class="period">2021.01.30 ~ 2021.03.21</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
	name: "WorkList",
	data() {
		return {
			targetWork: null,
			cardObserver: null,
		}
	},
	created() {
		this.$store.dispatch("fetchWorks")
	},
	mounted() {},
	watch: {
		works: {
			immediate: false,
			handler(works) {
				const self = this
				// console.log(works)
				this.targetWork = works[0]
				this.$nextTick(() => {
					self.bindObserver()
					window.addEventListener("resize", this.catchResize)
				})
			},
		},
	},
	computed: {
		...mapGetters({
			works: "getDashboardWorks",
		}),
	},
	methods: {
		bindObserver() {
			if (this.cardObserver !== null) {
				this.cardObserver.disconnect()
			}

			const boxEl = this.$refs["work-list"]
			const workItemsEl = this.$refs["work-item"]
			const cards = workItemsEl
			const boxSize = boxEl.offsetHeight
			const cardSize = workItemsEl[0].offsetHeight
			const margin = boxSize - cardSize - 30 - 30
			const options = {
				root: boxEl,
				rootMargin: `30px 30px -${margin}px 30px`,
				threshold: [0.5],
			}

			const callback = entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						workItemsEl.forEach(card => {
							card.classList.remove("active")
						})
						entry.target.classList.add("active")
					}
				})
			}
			this.cardObserver = new IntersectionObserver(callback, options)

			cards.forEach(card => {
				this.cardObserver.observe(card)
			})
		},
		catchResize() {
			this.$nextTick(() => {
				clearTimeout(this.debounce)
				this.debounce = setTimeout(() => {
					this.bindObserver()
					this.changeTargetWork()
				}, 300)
			})
		},
		changeTargetWork() {
			const self = this
			clearTimeout(this.debounce)
			this.debounce = setTimeout(() => {
				this.$refs["work-item"].forEach((card, index) => {
					if (card.classList.contains("active")) {
						const topOffset = card.offsetTop - 30
						self.$refs["work-list"].scrollTo({
							top: topOffset,
							behavior: "smooth",
						})
						self.targetWork = self.works[index]
					}
				})
			}, 100)
		},
		selectWork(e) {
			if (e.currentTarget.classList.contains("active")) return
			const workItemsEl = this.$refs["work-item"]
			workItemsEl.forEach(card => {
				card.classList.remove("active")
			})
			e.currentTarget.classList.add("active")
			this.changeTargetWork()
		},
	},
}
</script>

<style scoped>
.section--work {
	padding: 0;
	height: calc(100vh - 120px);
	background-color: #f8f4fe;
}
.work-content-wrap {
	display: flex;
	height: 100%;
}
.work-list {
	background-color: #f8f4fe;
	flex: 1;
	overflow: auto;
	padding: 30px;
	position: relative;
	min-width: 270px;
}
.work-list .card {
	cursor: pointer;
	background-color: #fff;
	box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
	height: calc((100vh - 180px) / 4);
	border-radius: 10px;
	border-top-left-radius: calc((100vh - 180px) / 8);
	border-bottom-left-radius: calc((100vh - 180px) / 8);
	position: relative;
	display: flex;
	opacity: 0.5;
}
.work-list .card.active {
	opacity: 1;
}
.work-list .card.hidden {
	opacity: 0.2;
}
.card .thumnail {
	height: 100%;
	width: calc((100vh - 180px) / 4);
	border-radius: 50%;
	padding: 5px;
	box-sizing: border-box;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
.card .thumnail img {
	height: 100%;
	width: 100%;
	border-radius: 50%;
	object-fit: cover;
}
.card .work-info {
	flex: 1;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: left;
	padding: 10px;
	flex-wrap: wrap;
	text-align: left;
}
.work-info div + div {
	margin-top: 10px;
}
.work-info .title {
	font-size: 19px;
	font-weight: 600;
	width: 100%;
}
.work-info .summary {
	font-size: 13px;
	width: 100%;
}
.work-info .role {
	font-size: 11px;
	width: 100%;
}
.work-info .period {
	font-size: 11px;
	color: #8a8a8a;
}
.work-list .card + .card {
	margin-top: 30px;
}
.work-detail {
	flex: 2;
	padding: 30px;
	box-sizing: border-box;
	background-color: #fff;
	margin: 30px 30px 30px 0px;
	border-radius: 20px;
	box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.1);
	position: relative;
}
.bottom-drawer {
	display: none;
}
@media all and (max-height: 500px) {
	.work-list .card {
		height: 100px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	.card .thumnail {
		width: 100px;
	}
}
@media all and (max-width: 1200px) {
	.work-list {
		flex: 3;
	}
	.work-detail {
		flex: 4;
	}
	.work-list .card {
		height: calc((100vh - 180px) / 5);
		border-top-left-radius: calc((100vh - 180px) / 10);
		border-bottom-left-radius: calc((100vh - 180px) / 10);
	}
	.card .thumnail {
		width: calc((100vh - 180px) / 5);
	}
}
@media all and (max-width: 800px) {
	.work-content-wrap {
		display: block;
		height: 100%;
		background-color: #f8f4fe;
	}
	.work-list {
		height: 70%;
		box-sizing: border-box;
	}
	.work-list .card {
		height: calc((100vh - 180px) / 6);
		border-top-left-radius: calc((100vh - 180px) / 12);
		border-bottom-left-radius: calc((100vh - 180px) / 12);
	}
	.card .thumnail {
		width: calc((100vh - 180px) / 6);
	}
	.work-detail {
		height: 30%;
		box-sizing: border-box;
		background-color: #fff;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		box-shadow: 0px -2px 5px -2px rgba(0, 0, 0, 0.2);
		margin: 0;
	}
	.bottom-drawer {
		display: block;
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		background-color: rgba(0, 0, 0, 0.7);
		height: 4px;
		width: 35px;
		position: absolute;
		top: 10px;
		left: calc(50% - 17.5px);
	}
}
</style>
