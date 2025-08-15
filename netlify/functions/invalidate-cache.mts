import type { Config } from "@netlify/functions";
import { $fetch } from "ofetch";
import { purgeCache } from "@netlify/functions";

export default async () => {
  purgeCache({
    tags: ["tag1"],
  });
};
