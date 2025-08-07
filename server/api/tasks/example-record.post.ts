// server/api/tasks/example-task.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the secret key
  const secretKey = useRuntimeConfig().taskSecret;
  if (!secretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Secret must be set",
    });
  }

  if (body.secret !== secretKey) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  // Your actual task logic here
  const now = Date.now();
  console.log("Running example record task: ", now);

  // Example: Store something in KV storage
  const storage = useStorage("example:record");
  await storage.setItem(String(now), now);

  return {
    success: true,
    timestamp: now,
    message: "Task completed successfully",
  };
});
