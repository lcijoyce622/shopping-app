import { ComponentCustomProperties } from "vue";
import type { Firebase } from "@/plugin/firebase/interface";

interface Firebase {
  ga: Analytics,
  db: Database
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $firebase: Firebase;
  }
}