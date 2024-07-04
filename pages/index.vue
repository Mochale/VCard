<template>
  <div class="flex flex-col gap-2 w-full h-full">
    <!-- header section -->
    <div class="flex flex-row items-center gap-3 font-serif">
      <h2
        class="flex items-center justify-center px-3 py-2 bg-primary text-primary-content text-2xl font-semibold w-56">
        Home</h2>
      <span class="flex flex-row items-center text-sm md:text-base px-2 py-1 border-b border-b-base-content w-[80vh]">
        A brief info about me.
      </span>
    </div>

    <!-- page content -->
    <div class="flex flex-col w-full items-center h-5/6">
      <div class="relative flex flex-col w-11/12 rounded-lg h-full overflow-clip">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover" src="/Images/software.jpg"
          alt="software engineer" />
        <div class="flex flex-col gap-1 w-full h-full bg-base-200/40 z-10 px-5 py-6 md:py-8 md:px-7">
          <p class="text-justify">
            &nbsp; Hello, I am Mohammad Mahdi Noorani, I'm from Iran and I'm a full-stack developer. I started coding in
            2018. My career started
            with C# and after 3 years I switched to PHP.
          </p>
          <p>
            &nbsp;I have been using Laravel framework and writing API for almost 1 year now.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSchemaOrg([
  defineWebPage({
    name: useRuntimeConfig().public.APP_NAME
  }),
  defineWebSite({
    name: useRuntimeConfig().public.APP_NAME
  })
])
useHead({
  meta: [
    {
      name: "keywords",
      content: "Mohammad Mahdi, Noorani, محمد مهدی, نورانی, محمد مهدی نورانی, developer, توسعه‌دهنده"
    },
    {
      name: "title",
      property: "og:title",
      content: "Mohammad Mahdi Noorani",
    },
    {
      name: "description",
      property: "og:description",
      content: "There you can know about Mohammad Mahdi Noorani",
    },
  ],
});
</script>