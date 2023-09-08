<template>
	<div
		class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-blue-300"
	>
		<div
			class="bg-white rounded-md flex flex-col py-12 w-[500px] items-center justify-center"
		>
			<div class="font-bold text-9xl text-purple-400">404</div>
			<div class="font-medium py-8 text-6xl">未找到页面</div>
			<div class="font-medium pb-8 text-2xl">您正在寻找的页面不存在</div>
			<div>
				<button
					class="bg-gradient-to-r from-purple-200 to-blue-300 rounded-md font-semibold py-3 px-6 hover:from-pink-100 hover:to-orange-500"
				>
					<SvgIcon />{{ msg }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const msg = ref("首页");
</script>

<style></style>
