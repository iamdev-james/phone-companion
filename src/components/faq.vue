<template>
	<div class="w-full px-6 sm:px-0 sm:w-5/6 md:w-2/3">
		<div class="text-center mb-16">
			<p class="text-blue-dark font-semibold">FREQUENT QUESTIONS</p>
			<p class="text-3xl font-bold">Do you have any question</p>
		</div>
		<div>
			<div :class="{ current_faq: !box_1 }" class="mb-6 px-8 sm:px-16 faq-box">
				<div @click="box_1 = false, box_2 = true, box_3 = true, box_4 = true" class="relative mb-12">
					<img
						v-show="box_1"
						:src="require('@/assets/images/open.svg')"
						class="absolute"
					/>
					<img
						v-show="!box_1"
						:src="require('@/assets/images/close.svg')"
						class="absolute"
					/>
					<p class="ml-12 text-lg sm:text-xl text-grey-darkest font-semibold">How to contact with riders emergency ?</p>
				</div>
				<span
					><p class="text-grey-darkest leading-loose ml-12">
						Get your website ads tests delivered at let collect sample from the
						victory of the managements that supplies best design system which
						guidelines ever with multiple features.
					</p></span
				>
			</div>
			<hr />
			<div :class="{ current_faq: !box_2 }" class="mb-6 px-8 sm:px-16 faq-box">
				<div @click="box_1 = true, box_2 = false, box_3 = true, box_4 = true" class="relative mb-12">
					<img
						v-show="box_2"
						:src="require('@/assets/images/open.svg')"
						class="absolute"
					/>
					<img
						v-show="!box_2"
						:src="require('@/assets/images/close.svg')"
						class="absolute"
					/>
					<p class="ml-12 text-lg sm:text-xl text-grey-darkest font-semibold">App installation failed, how to update system information?</p>
				</div>
				<span
					><p class="text-grey-darkest leading-loose ml-12">
						Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects.
					</p></span
				>
			</div>
			<hr />
			<div :class="{ current_faq: !box_3 }" class="mb-6 px-8 sm:px-16 faq-box">
				<div @click="box_1 = true, box_2 = true, box_3 = false, box_4 = true" class="relative mb-12">
					<img
						v-show="box_3"
						:src="require('@/assets/images/open.svg')"
						class="absolute"
					/>
					<img
						v-show="!box_3"
						:src="require('@/assets/images/close.svg')"
						class="absolute"
					/>
					<p class="ml-12 text-lg sm:text-xl text-grey-darkest font-semibold">Website response taking time, how to improve?</p>
				</div>
				<span
					><p class="text-grey-darkest leading-loose ml-12">
						Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.
					</p></span
				>
			</div>
			<hr />
			<div :class="{ current_faq: !box_4 }" class="mb-6 px-8 sm:px-16 faq-box">
				<div @click="box_1 = true, box_2 = true, box_3 = true, box_4 = false" class="relative mb-12">
					<img
						v-show="box_4"
						:src="require('@/assets/images/open.svg')"
						class="absolute"
					/>
					<img
						v-show="!box_4"
						:src="require('@/assets/images/close.svg')"
						class="absolute"
					/>
					<p class="ml-12 text-lg sm:text-xl text-grey-darkest font-semibold">New update fixed all bug and issues</p>
				</div>
				<span
					><p class="text-grey-darkest leading-loose ml-12">
					If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.
					</p></span
				>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "faq-comp",
		data() {
			return {
				box_1: false,
				box_2: true,
				box_3: true,
				box_4: true,
			};
		},
		methods: {
			toggleFaq(box) {
				let box_array = [this.box_1, this.box_2, this.box_3, this.box_4];
				let foundBox = box_array.indexOf(box);
        box = false
				let mod_box_array = box_array.splice(foundBox, 1);
				for (let box in mod_box_array) {
					return box
				}
			},
		},
	};
</script>

<style scoped>
	.faq-box {
		height: 40px;
		overflow: hidden;
		transition: all 3s ease;
	}
	.current_faq {
		height: auto !important;
		transition: height 4s ease;
	}
	@media screen and (max-width: 576px) {
		.faq-box {
			height: 60px;
		}
	}
</style>
