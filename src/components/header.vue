<template>
	<main class="text-white h-1/5">
		<div id="header" class="flex justify-between items-center w-full sm:w-4/5">
			<div class="flex justify-center items-center">
				<img
					class="inline logo"
					:src="require('@/assets/images/headerLogo.svg')"
				/>
			</div>
			<div
				id="header-nav"
				class="w-2/5 flex invisible nrm:visible align-center justify-between"
			>
				<a href="#home">Home</a>
				<a href="#features">Features</a>
				<a href="#testimonial">Testimonial</a>
				<a href="#pricing">Pricing</a>
			</div>
			<div>
				<button
					class="get_started text-white px-2 sm:px-8 py-3 border-white border-2 rounded-full"
				>
					Get Started
				</button>
			</div>
			<div class="container inline sm:hidden" @click="toggle()">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
			</div>
		</div>
	</main>
</template>

<script>
	import { store, mutations } from "@/store.js";
	export default {
		name: "HeaderComponent",
		data() {
			return {
				darkmode: true,
			};
		},
		computed: {
			isBurgerActive() {
				return store.isNavOpen;
			},
		},
		methods: {
			toggle() {
				mutations.toggleNav();
			},
		},
	};
</script>

<style>
	#header {
		height: 10vh;
	}
	.container {
		display: inline-block;
		cursor: pointer;
	}
	a {
		text-decoration: none;
		color: white;
	}
	a:active{
		color: green;
	}

	.bar1,
	.bar2,
	.bar3 {
		width: 35px;
		height: 5px;
		background-color: #333;
		margin: 6px 0;
		transition: 0.4s;
	}

	/* Rotate first bar */
	.change .bar1 {
		-webkit-transform: rotate(-45deg) translate(-9px, 6px);
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	/* Fade out the second bar */
	.change .bar2 {
		opacity: 0;
	}

	/* Rotate last bar */
	.change .bar3 {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
	}
	@media screen and (max-width: 576px) {
		#header-nav {
			display: none;
		}
		.logo {
			width: 870px;
			margin-left: 18px;
		}
		.get_started {
			width: 120px;
			margin: auto 20px;
		}
	}
</style>
