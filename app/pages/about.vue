<script setup lang="ts">
const myCustomHeader = useResponseHeader("X-DK-Header");
myCustomHeader.value = "Hello World";

const random = useState("random", () => Math.random());
</script>
<template>
  <div>
    <h1>About</h1>
    {{ random }}
  </div>
</template>
