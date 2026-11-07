import { dropStaleTestDatabases, withAdminClient } from "./db";

/** Before the database tests: clear test databases left behind by crashed runs. */
export default async function setup() {
  await withAdminClient(dropStaleTestDatabases);
}
