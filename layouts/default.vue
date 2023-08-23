<template>
  <div class="flex min-h-screen flex-col">
    <main class="flex flex-1 flex-col bg-gray-100">
      <Suspense>
        <slot />
        <template #fallback>
          <div class="flex flex-grow">
            <AppSpinner :size="32" class="m-auto" />
          </div>
        </template>
      </Suspense>
    </main>
  </div>
</template>
