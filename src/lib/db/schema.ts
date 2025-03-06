import { pgTable, text, timestamp, boolean, integer, pgEnum, uuid, json } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const userRoleEnum = pgEnum("user_role", ["admin", "user", "vendor"]);
export const rsvpStatusEnum = pgEnum("rsvp_status", ["pending", "attending", "declined"]);
export const vendorCategoryEnum = pgEnum("vendor_category", [
  "photographer", 
  "videographer", 
  "caterer", 
  "venue", 
  "florist", 
  "dj", 
  "band", 
  "bakery", 
  "wedding_planner", 
  "decorator", 
  "transportation", 
  "other"
]);

// Users table
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
  password: text("password"),
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Weddings table
export const weddings = pgTable("weddings", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  date: timestamp("date", { mode: "date" }),
  location: text("location"),
  budget: integer("budget"),
  description: text("description"),
  isPublic: boolean("is_public").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Guests table
export const guests = pgTable("guests", {
  id: uuid("id").defaultRandom().primaryKey(),
  weddingId: uuid("wedding_id").notNull().references(() => weddings.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  rsvpStatus: rsvpStatusEnum("rsvp_status").default("pending"),
  mealPreference: text("meal_preference"),
  plusOne: boolean("plus_one").default(false),
  plusOneName: text("plus_one_name"),
  group: text("group"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Vendors table
export const vendors = pgTable("vendors", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").references(() => users.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  category: vendorCategoryEnum("category").notNull(),
  description: text("description"),
  email: text("email"),
  phone: text("phone"),
  website: text("website"),
  address: text("address"),
  priceRange: text("price_range"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Wedding Vendors (junction table)
export const weddingVendors = pgTable("wedding_vendors", {
  id: uuid("id").defaultRandom().primaryKey(),
  weddingId: uuid("wedding_id").notNull().references(() => weddings.id, { onDelete: "cascade" }),
  vendorId: uuid("vendor_id").notNull().references(() => vendors.id, { onDelete: "cascade" }),
  status: text("status").default("pending"),
  notes: text("notes"),
  price: integer("price"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Tasks table
export const tasks = pgTable("tasks", {
  id: uuid("id").defaultRandom().primaryKey(),
  weddingId: uuid("wedding_id").notNull().references(() => weddings.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date", { mode: "date" }),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Budget Items table
export const budgetItems = pgTable("budget_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  weddingId: uuid("wedding_id").notNull().references(() => weddings.id, { onDelete: "cascade" }),
  category: text("category").notNull(),
  description: text("description").notNull(),
  estimatedCost: integer("estimated_cost").notNull(),
  actualCost: integer("actual_cost"),
  paid: boolean("paid").default(false),
  vendorId: uuid("vendor_id").references(() => vendors.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Registry Items table
export const registryItems = pgTable("registry_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  weddingId: uuid("wedding_id").notNull().references(() => weddings.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price"),
  url: text("url"),
  image: text("image"),
  purchased: boolean("purchased").default(false),
  purchasedBy: uuid("purchased_by").references(() => guests.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Seating Tables
export const seatingTables = pgTable("seating_tables", {
  id: uuid("id").defaultRandom().primaryKey(),
  weddingId: uuid("wedding_id").notNull().references(() => weddings.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  capacity: integer("capacity").notNull(),
  position: json("position").$type<{ x: number; y: number }>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Seating Assignments
export const seatingAssignments = pgTable("seating_assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  tableId: uuid("table_id").notNull().references(() => seatingTables.id, { onDelete: "cascade" }),
  guestId: uuid("guest_id").notNull().references(() => guests.id, { onDelete: "cascade" }),
  seatNumber: integer("seat_number"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  weddings: many(weddings),
}));

export const weddingsRelations = relations(weddings, ({ one, many }) => ({
  user: one(users, {
    fields: [weddings.userId],
    references: [users.id],
  }),
  guests: many(guests),
  tasks: many(tasks),
  budgetItems: many(budgetItems),
  registryItems: many(registryItems),
  seatingTables: many(seatingTables),
  weddingVendors: many(weddingVendors),
}));

export const guestsRelations = relations(guests, ({ one, many }) => ({
  wedding: one(weddings, {
    fields: [guests.weddingId],
    references: [weddings.id],
  }),
  seatingAssignments: many(seatingAssignments),
}));

export const vendorsRelations = relations(vendors, ({ one, many }) => ({
  user: one(users, {
    fields: [vendors.userId],
    references: [users.id],
  }),
  weddingVendors: many(weddingVendors),
  budgetItems: many(budgetItems),
}));

export const weddingVendorsRelations = relations(weddingVendors, ({ one }) => ({
  wedding: one(weddings, {
    fields: [weddingVendors.weddingId],
    references: [weddings.id],
  }),
  vendor: one(vendors, {
    fields: [weddingVendors.vendorId],
    references: [vendors.id],
  }),
}));

export const seatingTablesRelations = relations(seatingTables, ({ one, many }) => ({
  wedding: one(weddings, {
    fields: [seatingTables.weddingId],
    references: [weddings.id],
  }),
  assignments: many(seatingAssignments),
}));

export const seatingAssignmentsRelations = relations(seatingAssignments, ({ one }) => ({
  table: one(seatingTables, {
    fields: [seatingAssignments.tableId],
    references: [seatingTables.id],
  }),
  guest: one(guests, {
    fields: [seatingAssignments.guestId],
    references: [guests.id],
  }),
}));

export const budgetItemsRelations = relations(budgetItems, ({ one }) => ({
  wedding: one(weddings, {
    fields: [budgetItems.weddingId],
    references: [weddings.id],
  }),
  vendor: one(vendors, {
    fields: [budgetItems.vendorId],
    references: [vendors.id],
  }),
}));

export const registryItemsRelations = relations(registryItems, ({ one }) => ({
  wedding: one(weddings, {
    fields: [registryItems.weddingId],
    references: [weddings.id],
  }),
  purchaser: one(guests, {
    fields: [registryItems.purchasedBy],
    references: [guests.id],
  }),
}));

export const tasksRelations = relations(tasks, ({ one }) => ({
  wedding: one(weddings, {
    fields: [tasks.weddingId],
    references: [weddings.id],
  }),
})); 