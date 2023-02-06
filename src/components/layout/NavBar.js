import classes from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Occuper </div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Projects</Link>
          </li>
          <li>
            <Link href="/addProject">Add New Project</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
