<template>
	<div class="w-full xl:w-5/6 py-24 xl:py-0 text-center">
		<div>
			<p class="font-semibold text-core text-blue-light mb-2">TESTIMONIAL</p>
			<p class="text-3xl font-bold text-grey-darkest mb-6">
				Meet Client Satisfaction
			</p>
		</div>
		<slither-slider :options="options">
			<div
				style="
					box-shadow: rgb(38 78 118 / 35%) 0px 0px 1px;
					transition: all 0.3s ease 0s;
					border: 1px solid #eee;
					border-radius: 6px;
					padding: 40px 30px 35px;
					background-color: white;
					text-align: left;
					margin: 28px 5px 30px;
				"
				class="shadow-lg h-full text-black-lightest"
				v-for="(user, index) in testimonial"
				:key="index"
			>
				<span
					><star-rating
						:show-rating="false"
						:rating="user.Rating"
						:star-size="15"
						:rounded-corners="false"
						:star-points="[
							23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46,
							19, 31, 17,
						]"
						:read-only="true"
						:increment="0.01"
					></star-rating
				></span>
				<p class="py-6 text-black text-lg font-semibold">{{ user.Header }}</p>
				<p class="py-6 leading-loose text-grey-darker text-core">
					{{ user.content }}
				</p>
				<div class="flex flex-row justify-start items-center">
					<div class="pr-4"><img :src="user.user_image" /></div>
					<div>
						<p class="font-semibold mb-2">{{ user.name }}</p>
						<p class="text-blue-light font-semibold">@{{ user.username }}</p>
					</div>
				</div>
			</div>
		</slither-slider>
	</div>
</template>

<script>
	import StarRating from "vue-star-rating";

	export default {
		name: "testimonial-comp",
		components: { StarRating },
		data() {
			return {
				windowWidth: window.innerWidth,
				options: {
					autoplay: true,
					numberOfSlides: 3,
					secondsOnSlide: 5,
					controls: true,
					dots: false,
					adaptiveHeight: true,
					animationDuration: "500",
					overflowHiddenPadding: { top: 0, left: 20, right: 20, bottom: 20 },
				},
				testimonial: [
					{
						Rating: 4,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user1.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 4,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user2.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 4,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user3.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 4,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user4.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 5,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user1.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 4,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user2.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 5,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user3.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 5,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user4.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
					{
						Rating: 4,
						Header: "Layout and organized layers",
						content:
							"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
						user_image: require("@/assets/images/Testimonial/user1.png"),
						name: "Denny Hilguston",
						username: "denny.hil",
					},
				],
			};
		},
		created () {
			if (this.windowWidth < 576) {
				this.options.numberOfSlides = 1
			} else if (this.windowWidth < 768) {
				this.options.numberOfSlides = 2
			}
		},
	};
</script>

<style></style>
