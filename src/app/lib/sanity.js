import { createClient } from "next-sanity";
import { dataset, projectId, apiVersion, useCdn } from "../../../sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
