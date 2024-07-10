// import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function MenuButtons() {

  return (
    <div className="flex gap-4 text-white font-bold py-2 px-4 rounded">
      <Link href="/">
        Home
      </Link>
      <Link href="/lesson_plan">
        Generate Lesson Plan
      </Link>
    </div>
  );
}
