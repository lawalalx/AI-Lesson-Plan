import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const SignOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  export default SignOut;