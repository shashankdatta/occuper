export const dynamic = "force-dynamic";

import { Inter } from "@next/font/google";
import ProjectList from "../components/projects/ProjectList";
// import { use } from "react";
// import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

async function getProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/allProjects`
  );

  const data = await response.json();
  return data.data;
}

export default async function Page() {
  let loadedProjects = await getProjects();

  return (
    <section>
      <h1>All Projects</h1>
      <ProjectList projects={loadedProjects} />
    </section>
  );
}
