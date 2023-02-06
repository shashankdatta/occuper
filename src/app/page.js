import { Inter } from "@next/font/google";
import ProjectList from "../components/projects/ProjectList";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/allProjects`
  );
  // convert the response to json and get "data" field from it (see api/allProjects.js)
  const data = await response.json();
  const loadedProjects = data.data;

  return (
    <section>
      <h1>All Projects</h1>
      <ProjectList projects={loadedProjects} />
    </section>
  );
}
