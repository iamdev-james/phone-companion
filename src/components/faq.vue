<template>
	<div class="w-full px-6 sm:px-0 sm:w-5/6 md:w-2/3">
		<div class="text-center mb-16">
			<p class="text-blue-dark font-semibold">FREQUENT QUESTIONS</p>
			<p class="text-3xl font-bold">Do you have any question</p>
		</div>
		<div>
			<div :class="{ current_faq: !box_1 }" class="mb-6 px-8 sm:px-16 faq-box">
				<div @click="toggleFaq('box_1')" class="relative mb-12">
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
					<p class="ml-12">How to contact with riders emergency ?</p>
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
			<div :class="{ current_faq: !box_2 }" class="mb-6 px-16 faq-box">
				<div @click="toggleFaq('box_2')" class="relative mb-12">
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
					<p class="ml-12">How to contact with riders emergency ?</p>
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
			<div :class="{ current_faq: !box_3 }" class="mb-6 px-16 faq-box">
				<div @click="toggleFaq('box_3')" class="relative mb-12">
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
					<p class="ml-12">How to contact with riders emergency ?</p>
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
			<div :class="{ current_faq: !box_4 }" class="mb-6 px-16 faq-box">
				<div @click="toggleFaq('box_4')" class="relative mb-12">
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
					<p class="ml-12">How to contact with riders emergency ?</p>
				</div>
				<span
					><p class="text-grey-darkest leading-loose ml-12">
						Get your website ads tests delivered at let collect sample from the
						victory of the managements that supplies best design system which
						guidelines ever with multiple features.
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
		transition: height 1s ease;
	}
	.current_faq {
		height: auto !important;
		transition: height 1s ease;
	}
</style>
