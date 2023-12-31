import supabase from "@/supabase";
import StatusGrid from "@/components/StatusGrid";
export default async function AdminLogin() {
  // TODO: !Remove these comments, I only left them for you to understand what I expected you to do BeforeUnloadEvent. But I have done the real thing that we were gonna use in the end
  // const supabaseQuery = supabase
  //   .from("crimes")
  //   .select("*", { head: true, count: "exact" });
  // const { count: open } = await supabaseQuery.eq("status", "open");
  // const { count: pending } = await supabaseQuery.eq("status", "pending");
  // const { count: resolved } = await supabaseQuery.eq("status", "resolved");

  const { data } = await supabase.rpc("count_cases");
  const caseCounts = data.map(({ case_count, ...rest }) => ({
    ...rest,
    count: case_count,
  }));
  const totalCount = caseCounts.reduce((val, v) => val + v.count, 0);
  const caseStats = [{ status: "all", count: totalCount }, ...caseCounts];
  return <StatusGrid caseStats={caseStats} />;
}
