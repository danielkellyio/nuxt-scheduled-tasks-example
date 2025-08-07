export default defineTask({
  meta: {
    name: "example:record",
    description: "Run example record",
  },
  run({ payload, context }) {
    const now = Date.now();
    console.log("Running example record task: ", now);
    const storage = useStorage("example:record");
    storage.set(now, now);
    return { result: "Success" };
  },
});
