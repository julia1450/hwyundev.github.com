import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const baseURL = process.env.NODE_ENV === "production" ? "/portfolio/" : "/"
const routes = [
	{
		path: `${baseURL}`,
		component: () => import("@/components/layout/BasicLayout"),
		meta: { scrollToTop: true, title: "HyeVlog" },
		children: [
			{
				path: "",
				component: () => import("@/components/AppMain"),
				meta: { title: "HyeVlog" },
			},
			{
				path: "works",
				component: () => import("@/components/works/WorkList"),
				meta: { title: "작업물 목록" },
			},
		],
	},
	{
		path: `${baseURL}login`,
		component: () => import("@/views/LoginApp"),
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
