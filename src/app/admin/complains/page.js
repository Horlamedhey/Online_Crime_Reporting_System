import styles from "@/app/page.module.css";
import AdminTable from "@/components/AdminTable.js";
import supabase from "@/supabase";

export default async function Complains() {
  const { data } = await supabase.from("crimes").select();
  return (
    <main className={styles.main}>
      <div>
        <AdminTable tableData={data} />
      </div>
    </main>
  );
}
