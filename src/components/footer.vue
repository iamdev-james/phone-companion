<template>
	<div class="footer">
			<div
				class="text-grey-darkest leading-loose flex flex-col justify-center items-start"
			>
				<p class="text-lg font-semibold mb-6">About Us</p>
				<p>Support center</p>
				<p>Customer Support</p>
				<p>About Us</p>
				<p>Copyright</p>
				<p>Popular Campaign</p>
			</div>
			<div
				class="text-grey-darkest leading-loose flex flex-col justify-center items-start"
			>
				<p class="text-lg font-semibold mb-6">Our Information</p>
				<p>Return Policy</p>
				<p>Privacy Policy</p>
				<p>Terms & condition</p>
				<p>Site Map</p>
				<p>Store Hours</p>
			</div>
			<div
				class="text-grey-darkest leading-loose flex flex-col justify-center items-start mt-10 md:mt-0"
			>
				<p class="text-lg font-semibold mb-6">My Account</p>
				<p>Press Inquiries</p>
				<p>Social Media</p>
				<p>directories</p>
				<p>Images & B-roll</p>
				<p>Permissions</p>
			</div>
			<div
				class="text-grey-darkest leading-loose flex flex-col justify-center items-start mt-10 md:mt-0"
			>
				<p class="text-lg font-semibold mb-6">Policy</p>
				<p>Application security</p>
				<p>Software principles</p>
				<p>Unwanted software policy</p>
				<p>Responsible supply chain</p>
				<p class="invisible">Responsible supply chain</p>
			</div>
	</div>
</template>

<script>
	export default {
		name: "footer-comp",
	};
</script>

<style scoped>
	.footer {
		width: 75%;
		display: grid;
		grid-template-columns: repeat(4, 300px);
	}
	@media screen and (max-width: 1024px) {
		.footer {
			width: 90%;
			grid-template-columns: repeat(4, 250px);

		}
	}
	@media screen and (max-width: 770px) {
		.footer {
			width: 75%;
			grid-template-columns: repeat(2, 350px);
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	@media screen and (max-width: 576px) {
		.footer {
			grid-template-columns: repeat(2, 150px);
		}
	}
</style>
