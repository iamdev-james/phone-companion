<template>
	<main
		id="container"
		class="w-screen flex flex-col justify-center items-center"
	>
		<Sidebar>
			<ul class="sidebar-panel-nav">
				<li><a href="#home">Home</a></li>
				<li><a href="#features">Features</a></li>
				<li><a href="#testimonial">Testimonial</a></li>
				<li><a href="#pricing">Pricing</a></li>
			</ul>
			<div class="mt-32 ml-16 opacity-50">
				<a v-smooth-scroll href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f mr-4"></i></a>
				<a v-smooth-scroll href="https://twitter.com" target="_blank"><i class="fab fa-twitter mr-4"></i></a>
				<a v-smooth-scroll href="https://github.com" target="_blank"><i class="fab fa-github-alt mr-4"></i></a>
				<a v-smooth-scroll href="https://dribble.com" target="_blank"><i class="fab fa-dribbble"></i></a>
			</div>
		</Sidebar>
		<section id="main" class="w-screen">
			<div id="app" class="text-white flex items-center justify-center">
				<div id="home" class="mb-4 md:mb-32 w-full">
					<Header id="header" />
					<div
						class="mt-10 md:mt-24 px-8 sm:px-32 h-screen md:flex flex-row justify-end items-center"
					>
						<div
							class="h-full md:h-full w-full md:px-0 md:w-5/6 flex-auto flex flex-col justify-around"
						>
							<p
								class="text-4xl sm:text-6xl xl:text-8xl font-bold leading-tight"
							>
								Experience your ultimate mobile application
							</p>
							<p
								class="leading-loose -mt-32 md:-mt-8 text-core md:text-lg font-medium"
							>
								Get your blood tests delivered at let home collect sample from
								the victory of the managements that supplies best design system
								guidelines ever.
							</p>
							<div
								class="w-full md:w-auto -mt-32 md:mt-0 flex flex-row justify-start items-center"
							>
								<span
									class="px-6 md:px-10 text-core md:text-lg mr-4 py-2 md:py-4 bg-white rounded-full text-black"
									>Get Started</span
								>
								<img :src="require('@/assets/images/watchvideo.svg')" />
							</div>
							<div
								class="flex flex-col md:flex-row justify-start -mt-32 md:mt-0 items-center"
							>
								<span class="mr-2 xl:mr-4">Sponsored by:</span
								><img :src="require('@/assets/images/logo.svg')" />
							</div>
						</div>
						<img
							:src="require('@/assets/images/headershowcase.png')"
							class="showcase-img invisible md:visible"
						/>
					</div>
				</div>
			</div>
			<!-- Youtube video -->
		<section class="absolute">
			<iframe src="https://youtu.be/ZNA9rmDsYVE" title="W3Schools Free Online Web Tutorials"></iframe>
		</section>
		</section>
		<!-- SECTION A -->
		<section
			class="flex flex-col justify-around items-center h-quarter w-5/6 mt-32"
		>
			<div class="text-center">
				<p class="text-lg tracking-wider text-blue-darker font-semibold mb-5">
					Quality Features
				</p>
				<p class="text-3xl md:text-4xl font-bold">
					Meet exciting feature of app
				</p>
			</div>
			<div class="flex flex-col md:flex-row justify-between items-center">
				<div
					class="flex flex-col justify-between items-center px-12 text-center leading-loose"
				>
					<img :src="require('@/assets/images/icon2.svg')" class="mt-6" />
					<p class="text-xl font-semibold my-6">Vector Editing</p>
					<p>
						Get your blood tests delivered at home collect a sample from the
						your blood tests.
					</p>
				</div>
				<div
					class="flex flex-col justify-between items-center px-12 text-center leading-loose"
				>
					<img :src="require('@/assets/images/icon1.svg')" class="mt-6" />
					<p class="text-xl my-6 font-semibold">Customize & Monitoring</p>
					<p>
						Get your blood tests delivered at home collect a sample from the
						your blood tests.
					</p>
				</div>
				<div
					class="flex flex-col justify-between items-center px-12 text-center leading-loose"
				>
					<img :src="require('@/assets/images/icon.svg')" class="mt-6" />
					<p class="text-xl my-6 font-semibold">Quality & Short-period</p>
					<p>
						Get your blood tests delivered at home collect a sample from the
						your blood tests.
					</p>
				</div>
			</div>
		</section>
		<!-- SECTION B -->
		<section id="features" class="mt-32 flex flex-col justify-center items-center flex-wrap">
			<div
				class="flex flex-col-reverse md:flex-row justify-center items-start w-2/3"
			>
				<div class="flex-1 mt-20 md:mt-0">
					<img :src="require('@/assets/images/sec-C-Show.svg')" />
				</div>
				<div class="md:flex-1 pl-0 md:pl-32 h-full">
					<p class="text-lg py-6">CORE FEATURES</p>
					<p class="text-3xl xl:text-4xl font-bold leading-normal pb-12">
						Smart Jackpots that you may love this anytime & anywhere
					</p>
					<div>
						<div class="flex flex-row justify-between items-start">
							<img :src="require('@/assets/images/Group1.svg')" class="pr-4" />
							<div class="mb-10">
								<p class="text-lg mb-4 font-semibold">Smart Features</p>
								<p class="text-base leading-normal">
									Get your blood tests delivered at let home collect sample from
									the victory of the managements. your blood tests.
								</p>
							</div>
						</div>
						<div class="flex flex-row justify-center items-start">
							<img :src="require('@/assets/images/Group.svg')" class="pr-4" />
							<div>
								<p class="text-lg mb-4 font-semibold">Secure Contents</p>
								<p class="text-base leading-normal">
									Get your blood tests delivered at let home collect sample from
									the victory of the managements. your blood tests.
								</p>
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</section>
		<!-- Section C -->
		<section
			class="flex flex-col justify-around items-center flex-wrap h-quarter w-5/6 mt-32"
		>
			<div class="text-center">
				<p class="text-lg tracking-wider text-blue-darker font-semibold mb-5">
					Quality Features
				</p>
				<p class="text-3xl md:text-4xl font-bold">
					Meet exciting feature of app
				</p>
			</div>
			<div class="section-c">
				<div
					class="flex flex-row justify-between items-start px-2 text-left leading-loose"
				>
					<img
						:src="require('@/assets/images/SEC-C-Icons/icon1.svg')"
						class="mt-6 scaler"
					/>
					<div class="flex flex-col items-start justify-start px-2 xl:px-6">
						<p class="text-lg font-semibold my-4">Smart Features</p>
						<p class="text-sm text-grey-darkest">
							Get your blood tests delivered at let home collect sample from the
							victory of the managements.
						</p>
					</div>
				</div>
				<div
					class="flex flex-row justify-between items-start px-2 text-left leading-loose"
				>
					<img
						:src="require('@/assets/images/SEC-C-Icons/icon2.svg')"
						class="mt-6 scaler"
					/>
					<div class="flex flex-col items-start justify-start px-2 xl:px-6">
						<p class="text-lg my-4 font-semibold">Fast Performance</p>
						<p class="text-sm text-grey-darkest">
							Get your blood tests delivered at let home collect sample from the
							victory of the managements.
						</p>
					</div>
				</div>
				<div
					class="flex flex-row justify-between items-start px-2 text-left leading-loose"
				>
					<img
						:src="require('@/assets/images/SEC-C-Icons/icon3.svg')"
						class="mt-6 scaler"
					/>
					<div class="flex flex-col items-start justify-start px-2 xl:px-6">
						<p class="text-lg my-4 font-semibold">Unlimited Content</p>
						<p class="text-sm text-grey-darkest">
							Get your blood tests delivered at let home collect sample from the
							victory of the managements.
						</p>
					</div>
				</div>
				<div
					class="flex flex-row justify-between items-start px-2 text-left leading-loose"
				>
					<img
						:src="require('@/assets/images/SEC-C-Icons/icon4.svg')"
						class="mt-6 scaler"
					/>
					<div class="flex flex-col items-start justify-start px-2 xl:px-6">
						<p class="text-lg my-4 font-semibold">Unlimited Customization</p>
						<p class="text-sm text-grey-darkest">
							Get your blood tests delivered at let home collect sample from the
							victory of the managements.
						</p>
					</div>
				</div>
				<div
					class="flex flex-row justify-between items-start px-2 text-left leading-loose"
				>
					<img
						:src="require('@/assets/images/SEC-C-Icons/icon5.svg')"
						class="mt-6 scaler"
					/>
					<div class="flex flex-col items-start justify-start px-2 xl:px-6">
						<p class="text-lg my-4 font-semibold">Boost Productivity</p>
						<p class="text-sm text-grey-darkest">
							Get your blood tests delivered at let home collect sample from the
							victory of the managements.
						</p>
					</div>
				</div>
				<div
					class="flex flex-row justify-between items-start px-2 text-left leading-loose"
				>
					<img
						:src="require('@/assets/images/SEC-C-Icons/icon6.svg')"
						class="mt-6 scaler"
					/>
					<div class="flex flex-col items-start justify-start px-2 xl:px-6">
						<p class="text-lg my-4 font-semibold">Customer Support</p>
						<p class="text-sm text-grey-darkest">
							Get your blood tests delivered at let home collect sample from the
							victory of the managements.
						</p>
					</div>
				</div>
			</div>
		</section>
		<!-- Section-E -->
		<section class="mt-24 flex flex-col justify-center items-center flex-wrap">
			<div
				class="flex flex-col md:flex-row justify-center items-center px-4 md:px-24 md:px-0 w-full md:w-5/6"
			>
				<div class="flex-1 md:pr-38 text-center md:text-left xl:pr-32 h-full">
					<p class="text-lg py-6">CORE FEATURES</p>
					<p
						class="text-3xl md:text-4xl xl:text-5xl font-bold leading-normal pb-6"
					>
						Smart Jackpots that you may love this anytime & anywhere
					</p>
					<div>
						<div class="leading-loose text-lg text-grey-darkest">
							Get your tests delivered at let home collect sample from the
							victory of the managements that supplies best design system
							guidelines ever. Get your tests delivered at let home collect
							sample.
						</div>
						<div class="mt-10">
							<span
								class="text-white px-6 md:px-10 text-core md:text-lg mr-4 py-4 bg-blue-darker rounded-full text-black"
								>Get Started</span
							>
						</div>
					</div>
				</div>
				<div class="flex-1 mt-10 md:mt-0 ml-0 md:-ml-32">
					<img :src="require('@/assets/images/sec-E-showcase.svg')" />
				</div>
			</div>
		</section>
		<!-- SECTION F -->
		<section id="Sec-F" class="w-screen mt-32">
			<div
				id="Sec-F-main"
				class="bg-contain bg-center text-white flex items-center justify-center"
			>
				<div class="py-32 px-10 text-center md:text-left md:px-24">
					<div class="mb-16 text-center">
						<p class="text-sm tracking-wider text-grey font-semibold mb-3">
							WHATS THE FUNCTION
						</p>
						<p class="text-3xl font-bold">Let’s see how it works</p>
					</div>
					<div class="flex flex-col md:flex-row justify-start items-start">
						<div
							class="flex flex-col justify-between mt-8 md:mt-0 items-center md:items-start px-2 flex-wrap leading-loose"
						>
							<div class="flex flex-row justify-between items-start">
								<span
									class="text-3xl font-semibold px-4 rounded-xl text-blue-darker bg-white mr-2"
									>01</span
								>
								<img
									:src="require('@/assets/images/sec-F/arrow1.svg')"
									class="inline opacity-25 hidden xl:inline"
								/>
							</div>
							<p class="text-xl font-bold my-6">
								Set disbursement Instructions
							</p>
							<p class="pr-5 text-sm text-grey font-semibold">
								Get your blood tests delivered at home collect a sample from the
								your blood tests.
							</p>
						</div>
						<div
							class="flex flex-col justify-between mt-8 md:mt-0 items-center md:items-start px-2 leading-loose"
						>
							<div class="flex flex-row justify-between items-end">
								<span
									class="text-3xl font-semibold px-4 rounded-xl text-blue-darker bg-white mr-2"
									>02</span
								>
								<img
									:src="require('@/assets/images/sec-F/arrow2.svg')"
									class="inline opacity-25 hidden xl:inline"
								/>
							</div>
							<p class="text-xl my-6 font-semibold">
								Assembly retrieves funds from your account
							</p>
							<p class="pr-5 text-sm text-grey font-semibold">
								Get your blood tests delivered at home collect a sample from the
								your blood tests.
							</p>
						</div>
						<div
							class="flex flex-col justify-between mt-8 md:mt-0 items-center md:items-start px-3 leading-loose"
						>
							<div class="flex flex-row justify-between items-start">
								<span
									class="text-3xl font-semibold px-4 rounded-xl text-blue-darker bg-white mr-2"
									>03</span
								>
								<img
									:src="require('@/assets/images/sec-F/arrow1.svg')"
									class="inline opacity-25 hidden xl:inline"
								/>
							</div>
							<p class="text-xl my-6 font-bold">
								Assembly initiates disbursement
							</p>
							<p class="pr-5 text-sm text-grey font-semibold">
								Get your blood tests delivered at home collect a sample from the
								your blood tests.
							</p>
						</div>
						<div
							class="flex flex-col justify-between mt-8 md:mt-0 items-center md:items-start px-3 leading-loose"
						>
							<span
								class="text-3xl font-semibold px-4 rounded-xl text-blue-darker bg-white"
								>04</span
							>
							<p class="text-xl my-6 font-bold">
								Customer receives funds payment
							</p>
							<p class="pr-5 text-sm text-grey font-semibold">
								Get your blood tests delivered at home collect a sample from the
								your blood tests.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="testimonial" class="h-screen flex flex-col justify-center items-center">
			<Testimonial />
		</section>
		<section id="pricing" class="h-auto flex justify-end items-center mt-32">
			<Pricing />
		</section>
		<section id="Sec-F" class="flex justify-end items-center">
			<Payment />
		</section>
		<section class="flex justify-center items-center mt-16">
			<FAQ />
		</section>
		<section class="w-screen flex justify-center items-center mt-16 mb-20">
			<Footer />
		</section>
	</main>
</template>

<script>
	import Header from "@/components/header.vue";
	import Testimonial from "@/components/testimonial.vue";
	import Pricing from "@/components/pricing.vue";
	import Payment from "@/components/payment.vue";
	import FAQ from "@/components/faq.vue";
	import Footer from "@/components/footer.vue";
	import Sidebar from "@/components/sidebar.vue";
	import $ from "jquery";

	export default {
		name: "App",
		components: {
			Header,
			Testimonial,
			Pricing,
			Payment,
			FAQ,
			Footer,
			Sidebar,
		},
		mounted() {
			// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus()
          if ($target.is(":focus")) { // Checking if the target was focused
            return false
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus() // Set focus again
          }
        })
      }
    }
  })
		}
	};
</script>

<style>
	#container {
		font-family: "DM Sans", sans-serif;
	}
	#main {
		background: linear-gradient(105.18deg, #1e3c72 -2.04%, #2a5298 107.42%);
		border-radius: 0px 0px 300px 0px;
	}
	#app {
		width: 100vw;
		background-image: url("@/assets/images/pattern.svg");
	}
	.showcase-img {
		flex: 1;
		margin-right: -20%;
		margin-left: -16%;
		height: 95vh;
		width: 85%;
		margin-top: 5%;
	}
	.section-c {
		display: grid;
		grid-template-columns: repeat(3, 400px);
	}
	#Sec-F {
		background: linear-gradient(105.18deg, #1e3c72 -2.04%, #2a5298 107.42%);
	}
	#Sec-F-main {
		background-image: url("@/assets/images/sec-F/pattern-F.svg");
	}
	@media screen and (max-width: 1200px) {
		.showcase-img {
			flex: 1;
			margin-right: -20%;
			margin-left: -16%;
			height: 80vh;
			width: 85%;
			margin-top: 0%;
		}
		.section-c {
			display: grid;
			grid-template-columns: repeat(2, 500px);
		}
		ul.sidebar-panel-nav {
			list-style-type: none;
			margin-top: 80px;
			line-height: 50px;
		}

		ul.sidebar-panel-nav > li > a {
			color: black;
			text-decoration: none;
			font-size: 1.3rem;
			display: block;
			padding-bottom: 0.5em;
		}
		ul.sidebar-panel-nav li a:active {
			color: green;
		}
	}
	@media screen and (max-width: 770px) {
		.section-c {
			display: grid;
			grid-template-columns: repeat(2, 300px);
		}
	}
	@media screen and (max-width: 576px) {
		#main {
			border-radius: 0px 0px 150px 0px;
		}
		.section-c {
			display: grid;
			grid-template-columns: repeat(1, 300px);
		}
	}
</style>
