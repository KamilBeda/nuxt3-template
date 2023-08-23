<script setup lang="ts">
withDefaults(
  defineProps<{
    secondary?: boolean
    size?: number
    bgColor?: string
    color?: string
  }>(),
  {
    secondary: false,
    size: 24,
    darkMode: false,
    bgColor: 'rgba(0,0,0,0.2)',
    color: 'black',
  }
)
</script>

<template>
  <div class="flex overflow-hidden" :style="{ '--color': color, '--bgColor': bgColor }">
    <div
      class="loader"
      :class="{
        'loader--secondary': secondary,
      }"
      :style="{
        '--size': `${size}px`,
        ...(color && { '--color': color }),
        ...(bgColor && { '--bgColor': bgColor }),
      }"
    >
      Loading...
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.loader,
.loader:after {
  @apply m-auto;

  border-radius: 50%;
  width: var(--size);
  height: var(--size);
}
.loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 2px solid var(--bgColor);
  border-right: 2px solid var(--bgColor);
  border-bottom: 2px solid var(--bgColor);
  border-left: 2px solid #ffffff;
  border-left-color: var(--color);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
