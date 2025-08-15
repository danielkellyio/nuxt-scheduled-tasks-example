<script setup lang="ts">
const myCustomHeader = useResponseHeader("X-DK-Header");
myCustomHeader.value = "Hello World";

const cacheTags = useResponseHeader("Cache-Tag");
cacheTags.value = "tag1,tag2";

const random = useState("random", () => Math.random());
</script>
<template>
  <div>
    <h1>About</h1>
    {{ random }}
  </div>
</template>
