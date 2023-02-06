"use client";

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useRouter } from "next/navigation";
import NewProjectForm from "../../components/projects/NewProjectForm";

export default function Page() {
  const router = useRouter();

  function addProjectHandler(projectData) {
    // fetch("http://localhost:5000/record/add", {
    //   method: "POST",
    //   body: JSON.stringify(projectData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    router.push("/");
  }

  return (
    <section>
      <h1>Add Project Page</h1>
      <NewProjectForm onAddProject={addProjectHandler} />
    </section>
  );
}
