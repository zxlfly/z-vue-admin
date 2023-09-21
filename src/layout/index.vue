<template>
	<div class="layout-container">
		<div class="layput-sidebar">layput-sidebar</div>
		<div class="layput-tabbar">layput-tabbar</div>
		<div class="layput-main">layput-main</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped scss>
.layout-container {
	width: 100%;
	height: 100vh;
	.layput-sidebar {
		width: var(--z-admin-layout-sidebar-width);
		background: var(--z-admin-layout-sidebar-bg);
		height: 100vh;
	}
	.layput-tabbar {
		width: calc();
	}
}
</style>
