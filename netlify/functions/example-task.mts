import type { Config } from "@netlify/functions";
import { $fetch } from "ofetch";

export default async (req: Request) => {
  const { next_run } = await req.json();

  console.log("Scheduled function triggered. Next run:", next_run);

  try {
    // Call your Nuxt API endpoint
    const response = await $fetch(`${process.env.URL}/api/tasks/example-task`, {
      method: "POST",
      body: {
        secret: process.env.NUXT_TASK_SECRET,
      },
    });
    console.log("Task completed:", response);
  } catch (error) {
    console.error("Task failed:", error);
  }
};

// Run every minute
export const config: Config = {
  schedule: "* * * * *",
};
