<template>
	<div
		id="Sec-F-main"
		class="bg-cover flex flex-col justify-center items-center bg-center w-screen h-auto"
	>
		<div class="text-center text-white py-20">
			<p class="text-lg">WHATS THE FUNCTION</p>
			<p class="text-4xl font-semibold">Let’s see how it works</p>
		</div>
		<div class="w-full px-6 sm:px-0 sm:w-3/4 flex flex-col md:flex-row justify-around items-center mb-16">
			<div
				class="bg-blue-dark mb-10 md:mb-0 w-full sm:w-5/6 md:w-auto leading-loose px-8 h-72 flex flex-col justify-around mr-0 md:mr-6 rounded-lg"
			>
				<button class="invisible px-4 py-2 bg-orange-dark text-white rounded">
					Recommended
				</button>
				<div>
				<p class="text-2xl text-white font-semibold">Free plan</p>
				<p class="text-white opacity-25">For small team or office</p>
				</div>
				<div v-for="(benefit, index) in free_package" :key="index">
					<div
						class="flex flex-row justify-between items-start"
						v-if="benefit.availability"
					>
						<img
							:src="require('@/assets/images/checked.svg')"
							class="inline mt-2 mr-2"
						/>
						<p class="inline text-white">{{ benefit.details }}</p>
					</div>
					<div
						v-else
						class="opacity-25 flex flex-row justify-between items-start"
					>
						<img
							:src="require('@/assets/images/notchecked.svg')"
							class="inline mt-2 mr-2"
						/>
						<p class="inline text-white">{{ benefit.details }}</p>
					</div>
				</div>
				<div class="w-full flex justify-center items-center py-6">
					<button
						class="rounded-full py-4 px-6 bg-white text-blue-dark font-semibold"
					>
						Signup Now
					</button>
				</div>
			</div>
			<div class="justify-around bg-white w-full sm:w-5/6 md:w-auto px-8 leading-loose py-6 h-auto sm:h-72 rounded-lg">
				<button class="px-4 py-2 w-20	 bg-orange-dark text-white rounded">
					Recommended
				</button>
				<div class="flex flex-row justify-between items-center">
					<p class="text-lg text-semibold">Premium</p>
					<p class="text-grey-darker">Starting from</p>
				</div>
				<div class="flex flex-row justify-between items-center">
					<p class="text-grey-darker">For startup enterprise</p>
					<p class="text-2xl sm:text-3xl font-bold text-green-light">49.99/mo</p>
				</div>
				<div v-for="(benefit, index) in paid_package" :key="index">
					<div
						class="flex flex-row justify-between items-start mb-4"
						v-if="benefit.availability"
					>
						<img
							:src="require('@/assets/images/checked.svg')"
							class="inline mr-2 mt-2"
						/>
						<p class="inline text-grey-darkest">{{ benefit.details }}</p>
					</div>
					<div v-else>
						<img
							:src="require('@/assets/images/notchecked.svg')"
							class="inline"
						/>
						<p class="inline text-grey-darkest">{{ benefit.details }}</p>
					</div>
				</div>
				<div class="w-full flex justify-center items-center pb-4">
					<button
						class="rounded-full py-4 px-6 text-white bg-blue-dark font-semibold"
					>
						Signup Now
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "payment-component",
		data() {
			return {
				free_package: [
					{
						availability: true,
						details: "Ultimate access to all course, exercises and assessments",
					},
					{
						availability: true,
						details:
							"Free acess for all kind of exercise corrections with downloads.",
					},
					{
						availability: true,
						details:
							"Total assessment corrections with free download access system",
					},
					{
						availability: false,
						details: "Unlimited download of courses on the mobile app contents",
					},
					{
						availability: false,
						details: "Unlimited download of courses on the mobile app contents",
					},
				],
				paid_package: [
					{
						availability: true,
						details: "Ultimate access to all course, exercises and assessments",
					},
					{
						availability: true,
						details:
							"Free acess for all kind of exercise corrections with downloads.",
					},
					{
						availability: true,
						details:
							"Total assessment corrections with free download access system",
					},
					{
						availability: true,
						details: "Unlimited download of courses on the mobile app contents",
					},
					{
						availability: true,
						details: "Unlimited download of courses on the mobile app contents",
					},
				],
			};
		},
	};
</script>

<style>
	#Sec-F-main {
		background-image: url("@/assets/images/sec-F/pattern-F.svg");
	}
</style>
