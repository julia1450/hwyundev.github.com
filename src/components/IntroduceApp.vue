<template>
	<div class="section section--introduce">
		<div class="profil-image"></div>
		<div class="inner">
			<div class="common-introduce">
				<div class="name-area" v-html="profileName"></div>
				<ul class="contact">
					<li>
						<a href="#">
							<font-awesome-icon :icon="['fa', 'envelope']" :style="{ color: '#fff' }" title="email" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/nyewoni_" target="_blank">
							<font-awesome-icon :icon="['fab', 'instagram']" :style="{ color: '#fff' }" title="instagram" />
						</a>
					</li>
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
import { mapGetters } from "vuex"
export default {
	name: "IntroduceApp",
	computed: {
		...mapGetters({
			profileName: "getIntroduceName",
		}),
	},
}
</script>

<style scoped>
.section--introduce {
	background-color: #f8f4fe;
	height: calc(100vh - 120px);
	min-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.profil-image {
	background: #fff center / contain no-repeat url(~@/assets/img/my-picture.jpg);
	min-height: calc(100vh - 450px);
	min-width: calc(100vh - 450px);
	margin-bottom: 30px;
	border-radius: 50%;
}

.section--introduce .inner {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.common-introduce {
	height: 300px;
	width: 500px;
	padding: 30px;
	box-sizing: border-box;
	position: relative;
	padding-right: 50px;
	text-align: right;
	border-right: solid 1px #9d94a75e;
}

.name-area {
	font-size: 70px;
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
	text-decoration: none;
	color: #fff;
	background-color: #9a91a5;
	border-radius: 50%;
	width: 38px;
	height: 38px;
	line-height: 38px;
	text-align: center;
	display: block;
	box-sizing: border-box;
}

.detail-introduce {
	flex-grow: 1;
	text-align: left;
	padding: 0 30px 0 50px;
}

.detail-introduce h1 {
	margin-bottom: 10px;
}
.detail-introduce .introduce-title {
	font-size: 34px;
	margin-bottom: 10px;
}

@media all and (max-height: 650px) {
	.profil-image {
		display: none;
	}
}

@media all and (max-width: 750px) {
	.section--introduce .inner {
		flex-wrap: wrap;
	}
	.profil-image {
		min-height: calc(100vh - 120px - 290px);
		min-width: calc(100vh - 120px - 290px);
	}
	.common-introduce {
		text-align: center;
		border: none;
		height: auto;
		width: auto;
		padding: 30px 0 60px 0;
	}
	.name-area {
		font-size: 50px;
	}
	.contact {
		padding: 0 0 10px 0;
	}
	.detail-introduce {
		padding: 10px 0 10px;
		border-top: solid 1px #9d94a75e;
		text-align: center;
		margin: 0 30px;
	}
}

@media all and (max-width: 750px) and (max-height: 651px) {
	.detail-introduce {
		padding: 30px 0;
		border-top: solid 1px white;
		text-align: center;
	}
	.name-area {
		font-size: 80px;
	}
}

@media all and (max-width: 600px) and (max-height: 651px) {
	.profil-image {
		min-height: 300px;
		min-width: 300px;
	}
}

@media all and (max-width: 600px) and (min-height: 650px) {
	.profil-image {
		min-height: 300px;
		min-width: 300px;
	}
}
</style>
