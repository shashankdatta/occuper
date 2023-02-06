import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <ul className={classes.list}>
      {props.projects.map((project) => (
        <ProjectItem
          key={project._id}
          id={project._id}
          image={project.image}
          title={project.title}
          description={project.description}
          date={project.date}
          projectOwner={project.projectOwner}
          userID={project.userID}
          contactInfo={project.contactInfo}
          deadline={project.deadline}
          departments={project.departments}
          educationLevels={project.educationLevels}
          types={project.types}
          vacancy={project.vacancy}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
