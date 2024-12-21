import { Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography>This is the landing page</Typography>
      </main>
      
    </div>
  );
}
