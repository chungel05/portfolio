import { Database } from "./supabase/supabase";

type JobExperience = Pick<
    Database["public"]["Tables"]["experience"]["Row"],
    | "seq"
    | "job_title"
    | "company"
    | "icon"
    | "time_period"
    | "description"
    | "achievement"
>;
