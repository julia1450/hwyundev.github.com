import { shallowMount } from "@vue/test-utils"
import WorkList from "../WorkList.vue"

describe("WorkList Test", () => {
	test("화면 마운트 테스트!", () => {
		const wrapper = shallowMount(WorkList, {
			mocks: {
				$store: {
					getters: {
						getIntroduceName(state) {
							return state.introduceName
						},
						getDashboardWorks(state) {
							return state.dashboardWorks
						},
					},
					dispatch: jest.fn(),
				},
			},
		})

		console.log(wrapper.html())
	})
})
