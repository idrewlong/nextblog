import { createClient } from "next-sanity";

const projectId = "qhz4xneb";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
