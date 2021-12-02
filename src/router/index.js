import Vue from "vue"
import VueRouter from "vue-router"
import AppMain from "@/components/AppMain"
import WorkList from "@/components/works/WorkList"
import BasicLayout from "@/components/layout/BasicLayout"
import LoginApp from "@/views/LoginApp"

Vue.use(VueRouter)

const baseURL = process.env.NODE_ENV === "production" ? "/portfolio" : "/"
const routes = [
	{
		path: `${baseURL}`,
		component: BasicLayout,
		meta: { scrollToTop: true, title: "HyeVlog" },
		children: [
			{
				path: "",
				component: AppMain,
				meta: { title: "HyeVlog" },
			},
			{
				path: "works",
				component: WorkList,
				meta: { title: "작업물 목록" },
			},
		],
	},
	{
		path: `${baseURL}login`,
		component: LoginApp,
		meta: {
			title: "관리자 인증하기",
		},
	},
]

const router = new VueRouter({
	mode: "history",
	routes: routes,
})

router.afterEach(to => {
	document.title = to.meta.title || "HyeVlog"
})

export default router
