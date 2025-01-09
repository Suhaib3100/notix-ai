import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:kF36XWBCSJti@ep-long-glitter-a5aa3xd3.us-east-2.aws.neon.tech/neondb?sslmode=require",
  }
});