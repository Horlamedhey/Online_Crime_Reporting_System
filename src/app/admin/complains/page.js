import Image from "next/image";
import styles from "@/app/page.module.css";

import AdminTable from "@/components/AdminTable.js";

export default function Admin() {
  return (
    <main className={styles.main}>
      <div>
        <AdminTable />
        {/* <AdminTableModal  /> */}
      </div>
    </main>
  );
}
