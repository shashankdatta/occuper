"use client";
import classes from "./NewProjectForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
// Example of a project object:
// {
//   "_id": {
//     "$oid": "63ded02848cd6e5aedc3c854"
//   },
//   "date": "February 2, 2023",
//   "projectOwner": "uncle joe",
//   "userID": "682hdwbasd16",
//   "image": "",
//   "contactInfo": "unclejoe",
//   "deadline": "March 9, 2023",
//   "description": "I have been teaching at Virginia Tech I would love if someone could assist me with my research regarding embedded systems",
//   "title": "TEST",
//   "departments": [
//     "computer science",
//     "computer engineering"
//   ],
//   "educationLevels": [
//     "grad",
//     "undergrad"
//   ],
//   "types": [
//     "Volunteer",
//     "Participants",
//     "Paid"
//   ],
//   "vacancy": 21
// }

function NewProjectForm(props) {
  const titleInputRef = useRef();
  const dateInputRef = useRef();
  const projectOwnerInputRef = useRef();
  const userIDInputRef = useRef();
  const imageInputRef = useRef();
  const contactInfoInputRef = useRef();
  const deadlineInputRef = useRef();
  const descriptionInputRef = useRef();
  const departmentsInputRef = useRef();
  const educationLevelsInputRef = useRef();
  const typesInputRef = useRef();
  const vacancyInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const projectData = {
      title: titleInputRef.current.value,
      date: dateInputRef.current.value,
      projectOwner: projectOwnerInputRef.current.value,
      userID: userIDInputRef.current.value,
      image: imageInputRef.current.value,
      contactInfo: contactInfoInputRef.current.value,
      deadline: deadlineInputRef.current.value,
      description: descriptionInputRef.current.value,
      departments: departmentsInputRef.current.value,
      educationLevels: educationLevelsInputRef.current.value,
      types: typesInputRef.current.value,
      vacancy: vacancyInputRef.current.value,
    };

    // console.log(projectData);
    props.onAddProject(projectData);
    document.getElementById("addNewProjectForm").reset();
  }

  return (
    <Card>
      <form
        id="addNewProjectForm"
        className={classes.form}
        onSubmit={submitHandler}
      >
        <div className={classes.control}>
          <label htmlFor="title">Project Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Project Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Project Description</label>
          <textarea
            className={classes.control}
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Project Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="projectOwner">Project Owner</label>
          <input
            type="text"
            required
            id="projectOwner"
            ref={projectOwnerInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="userID">User ID</label>
          <input type="text" required id="userID" ref={userIDInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="contactInfo">Contact Info</label>
          <input
            type="text"
            required
            id="contactInfo"
            ref={contactInfoInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="deadline">Deadline</label>
          <input type="date" required id="deadline" ref={deadlineInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="departments">Departments</label>
          <input
            type="text"
            required
            id="departments"
            ref={departmentsInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="educationLevels">Education Levels</label>
          <input
            type="text"
            required
            id="educationLevels"
            ref={educationLevelsInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="types">Types</label>
          <input type="text" required id="types" ref={typesInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="vacancy">Vacancy</label>
          <input type="number" required id="vacancy" ref={vacancyInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProjectForm;
