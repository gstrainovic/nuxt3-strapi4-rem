<script lang="ts" setup></script>

<template>
  <div class="w-100 p-3 homejumbotron">
    <img
        class="breadcrumb w-100 h-100"
        src="~/assets/img/HomeJumbotron/breadcrumb.png"
        alt="logo"
    />
    <div class="logocontainer w-100">
      <img
        src="~/assets/img/HomeJumbotron/remmen.png"
        class="logo"
      />
    </div>

  </div>
</template>

<style scoped>

.homejumbotron {
  position: relative;
  min-height: 250px;
  max-height: 500px;
  overflow: hidden;
  box-sizing: border-box;
}

.breadcrumb {
  box-sizing: border-box;
  object-fit: cover;
  min-height: 250px;
}

.logocontainer {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}

.logo {
  height: 50%;
}

</style>
