import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: serial().primaryKey(),
  userName: varchar(255).notNull(),  // Specify the length
  email: varchar(255).notNull(),     // Specify the length
  isMember: boolean().default(false)
});
