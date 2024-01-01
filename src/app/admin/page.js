import supabase from "@/supabase";
import StatusGrid from "@/components/StatusGrid";
export default async function AdminLogin() {
  const { data } = await supabase.rpc("count_cases");

  const caseCounts = data.map(({ case_count, ...rest }) => ({
    ...rest,
    count: case_count,
  }));

  const totalCount = caseCounts.reduce((val, v) => val + v.count, 0);

  const caseStats = [{ status: "all", count: totalCount }, ...caseCounts];
  return <StatusGrid caseStats={caseStats} />;
}
