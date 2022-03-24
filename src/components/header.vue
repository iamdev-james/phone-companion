<template>
	<main class="text-white h-1/5">
		<nav
			id="header"
			:class="{ headerScroll: scrollPosition > 1 }"
			class="flex justify-between items-center w-full sm:w-full sm:px-32"
		>
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
				<a
					:class="{ text_black: scrollPosition > 1 }"
					class="text_white"
					href="#home"
					>Home</a
				>
				<a
					:class="{ text_black: scrollPosition > 1 }"
					class="text_white"
					href="#features"
					>Features</a
				>
				<a
					:class="{ text_black: scrollPosition > 1 }"
					class="text_white"
					href="#testimonial"
					>Testimonial</a
				>
				<a
					:class="{ text_black: scrollPosition > 1 }"
					class="text_white"
					href="#pricing"
					>Pricing</a
				>
			</div>
			<div>
				<button
					:class="{ get_started_dark: scrollPosition > 1 }"
					class="get_started px-0 sm:px-8 py-2 rounded-full"
				>
					Get Started
				</button>
			</div>
			<div class="container inline sm:hidden" @click="toggle()">
				<div :class="{ move: scrollPosition > 1, change_1: navOpen }" class="bar1"></div>
				<div :class="{ move: scrollPosition > 1, change_2: navOpen }" class="bar2"></div>
				<div :class="{ move: scrollPosition > 1, change_3: navOpen }" class="bar3"></div>
			</div>
		</nav>
	</main>
</template>

<script>
	import { store, mutations } from "@/store.js";
	export default {
		name: "HeaderComponent",
		data() {
			return {
				darkmode: true,
				scrollPosition: null
			};
		},
		computed: {
			navOpen() {
				return store.isNavOpen
			},
		},
		methods: {
			toggle() {
				mutations.toggleNav()
				this.navOpen = true
			},
			updateScroll() {
				this.scrollPosition = window.scrollY
			},
		},
		mounted() {
			window.addEventListener("scroll", this.updateScroll)
		}
	};
</script>

<style>
	#header {
		position: fixed;
		height: 10vh;
		background-color: transparent;
		color: white;
		transition: all 1s ease;
		z-index: 5;
	}
	.headerScroll {
		position: fixed;
		top: 0;
		height: 10vh;
		color: black;
		background: white !important;
	}
	.get_started {
		color: white;
		border: 1.5px solid #fff;
	}
	.get_started_dark {
		color: black;
		border: 1.5px solid #000;
	}
	.container {
		display: inline-block;
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}
	.text_white {
		color: white;
	}
	.text_black {
		color: black !important;
	}
	a:active {
		color: black;
	}

	.bar1,
	.bar2,
	.bar3 {
		width: 22px;
		height: 3px;
		background-color: #fff;
		margin: 6px 0;
		transition: 0.4s;
	}
	.move {
		background-color: #333;
	}

	/* Rotate first bar */
	.change_1 {
		-webkit-transform: rotate(-45deg) translate(-9px, 6px);
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	/* Fade out the second bar */
	.change_2 {
		opacity: 0;
	}

	/* Rotate last bar */
	.change_3 {
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
			font-size: 12px;
			margin: auto 20px;
		}
	}
</style>
