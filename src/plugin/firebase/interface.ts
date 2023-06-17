import type { Analytics } from "firebase/analytics";
import type { Database } from "firebase/database";

export interface Firebase {
  ga: Analytics,
  db: Database
}