import NavBar from "../components/layout/NavBar";
import classes from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  );
}
