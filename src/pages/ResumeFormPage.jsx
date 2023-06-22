import React, { useState } from "react";
import { FormikInput } from "../components/inputs/FormikInput";
import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIco, XIco } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { FadeDiv } from "../components/animatedPages/FadeDiv";

export const ResumeFormPage = () => {
  const formik = useFormik({
    initialValues: {
      activeStep: 0,
      //step 0
      name: "",
      surname: "",
      linkedIn: "",
      github: "",
      email: "",
      phone: "",
      about: "",
      //step 1
      work: {
        title: "",
        location: "",
        startDate: "",
        finishDate: "",
        companyName: "",
      },
      worksArray: [],
      //step 2
      project: {
        projectTitle: "",
        projectUrl: "",
        aboutProject: "",
      },
      projectsArray: [],

      //step 3
      education: {
        title: "",
        startDate: "",
        finishDate: "",
        schoolName: "",
      },
      educationArray: [],

      //step 4
      skills: {
        title: "",
        names: [""],
      },
      skillsArray: [],

      //step 5
      sumamry: "",
    },
    onSubmit: (values) => {
      const isProjectsEmty = values.project.projectTitle.trim().length === 0;
      if (!isProjectsEmty) {
        formik.setValues({
          ...values,
          projectsArray: [...values.projectsArray, values.project],
          project: formik.initialValues.project,
        });
      }
      const isWorkEmty = values.work.title.trim().length === 0;
      if (!isWorkEmty) {
        formik.setValues({
          ...values,
          worksArray: [...values.worksArray, values.work],
          work: formik.initialValues.work,
        });
      }
      const isSkillEmty = values.skills.title.trim().length === 0;
      if (!isSkillEmty) {
        formik.setValues({
          ...values,
          skillsArray: [...values.skillsArray, values.skills],
          skills: formik.initialValues.skills,
        });
      }
      const isEducationEmty = values.education.title.trim().length === 0;
      if (!isEducationEmty) {
        formik.setValues({
          ...values,
          educationArray: [...values.educationArray, values.education],
          education: formik.initialValues.education,
        });
      }
    },
  });

  const setActiveStep = (id) => {
    formik.setFieldValue("activeStep", id);
  };

  // project
  const addProject = () => {
    const isEmpty = formik.values.project.projectTitle.trim().length === 0;

    if (isEmpty) return;
    formik.setValues({
      ...formik.values,
      projectsArray: [...formik.values.projectsArray, formik.values.project],
      project: formik.initialValues.project,
    });
  };
  const deleteProject = (index) => {
    const updatedArray = formik.values.projectsArray.filter(
      (_, i) => i !== index
    );

    formik.setFieldValue("projectsArray", updatedArray);
  };

  //work
  const addWork = () => {
    const isEmpty = formik.values.work.title.trim().length === 0;
    if (isEmpty) return;
    formik.setValues({
      ...formik.values,
      worksArray: [...formik.values.worksArray, formik.values.work],
      work: formik.initialValues.work,
    });
  };
  const deleteWork = (index) => {
    const updatedArray = formik.values.worksArray.filter((_, i) => i !== index);

    formik.setFieldValue("worksArray", updatedArray);
  };

  //education
  const addEducation = () => {
    const isEmpty = formik.values.education.title.trim().length === 0;
    if (isEmpty) return;
    formik.setValues({
      ...formik.values,
      educationArray: [
        ...formik.values.educationArray,
        formik.values.education,
      ],
      education: formik.initialValues.education,
    });
  };
  const deleteEducation = (index) => {
    const updatedArray = formik.values.educationArray.filter(
      (_, i) => i !== index
    );

    formik.setFieldValue("educationArray", updatedArray);
  };

  //skills
  const addSkills = () => {
    const isEmpty = formik.values.skills.title.trim().length === 0;
    if (isEmpty) return;
    formik.setValues({
      ...formik.values,
      skillsArray: [...formik.values.skillsArray, formik.values.skills],
      skills: formik.initialValues.skills,
    });
  };
  const deleteSkills = (index) => {
    const updatedArray = formik.values.skillsArray.filter(
      (_, i) => i !== index
    );

    formik.setFieldValue("skillsArray", updatedArray);
  };
  const handleAddSkill = () => {
    formik.setFieldValue("skills.names", [...formik.values.skills.names, ""]);
  };
  const handleSkillChange = (index, event) => {
    const newSkills = [...formik.values.skills.names];
    newSkills[index] = event.target.value;
    formik.setFieldValue("skills.names", newSkills);
  };
  const handleDeleteSkill = () => {
    const newArray = [...formik.values.skills.names];
    newArray.pop();
    formik.setFieldValue("skills.names", newArray);
  };

  //sections
  const sections = [
    { name: "Basic Info", id: 0 },
    { name: "Work Experience", id: 1 },
    { name: "Projects", id: 2 },
    { name: "Education", id: 3 },
    { name: "Skills", id: 4 },
    { name: "Summary", id: 5 },
  ];

  const BasicInfo = (
    <AnimatePresence mode="wait">
      <motion.div
        key={"BasicInfo"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Body"
      >
        <div className="Row">
          <FormikInput
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            label={"Name"}
          />
          <FormikInput
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            label={"Surname"}
          />
        </div>
        <div className="Row">
          <FormikInput
            name="linkedIn"
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            label={"Linkedin Link"}
          />
          <FormikInput
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            label={"Github Link"}
          />
        </div>
        <div className="Row">
          <FormikInput
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            label={"Email"}
          />
          <FormikInput
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            label={"Enter Phone"}
          />
        </div>
        <div>
          <FormikInput
            label={"About Yourself"}
            name={"about"}
            value={formik.values.about}
            onChange={formik.handleChange}
            rows={3}
            type="textArea"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const WorkExperince = (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"WorkExperince"}
        className="Body"
      >
        <div className="flex flex-col items-end ">
          <FormikInput
            name="work.title"
            value={formik.values.work.title}
            onChange={formik.handleChange}
            label={"Title"}
          >
            <div className="flex flex-wrap gap-3 text-white mt-2">
              {formik.values.worksArray.map((work, index) => (
                <div
                  className="bg-neon relative px-2 pr-12 flex py-1 rounded-full shadow-md   "
                  key={index}
                >
                  {work.title}
                  <span
                    onClick={() => deleteWork(index)}
                    className="absolute cursor-pointer right-4 text-orange-500 font-bold top-1/2 -translate-y-1/2 "
                  >
                    <XIco className="w-5 h-5" />
                  </span>
                </div>
              ))}
            </div>
          </FormikInput>
          <span onClick={addWork}>
            <PlusIco className="text-neon cursor-pointer" />
          </span>
        </div>
        <div className="Row">
          <FormikInput
            name="work.companyName"
            value={formik.values.work.companyName}
            onChange={formik.handleChange}
            label={"Company Name"}
          />
          <FormikInput
            name="work.location"
            value={formik.values.work.location}
            onChange={formik.handleChange}
            label={"Location"}
          />
        </div>
        <div className="Row">
          <FormikInput
            name="work.startDate"
            value={formik.values.work.startDate}
            onChange={formik.handleChange}
            label={"Start Date"}
            inputType="date"
          />
          <FormikInput
            name="work.finishDate"
            value={formik.values.work.finishDate}
            onChange={formik.handleChange}
            label={"End Date"}
            inputType="date"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const Projects = (
    <AnimatePresence mode="wait">
      <motion.div
        key={"Projects"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Body"
      >
        <div className="flex flex-col items-end">
          <FormikInput
            Containerclass="w-full"
            name="project.projectTitle"
            value={formik.values.project.projectTitle}
            onChange={formik.handleChange}
            label={"Title"}
          >
            <div className="flex flex-wrap gap-3 text-white mt-2">
              {formik.values.projectsArray.map((project, index) => (
                <div
                  className="bg-neon relative px-2 pr-12 flex py-1 rounded-full shadow-md   "
                  key={index}
                >
                  {project.projectTitle}
                  <span
                    onClick={() => deleteProject(index)}
                    className="absolute cursor-pointer right-2 text-orange-500 font-bold top-1/2 -translate-y-1/2 "
                  >
                    <XIco className="w-5 h-5" />
                  </span>
                </div>
              ))}
            </div>
          </FormikInput>
          <div onClick={addProject}>
            <PlusIco className="text-neon cursor-pointer" />
          </div>
        </div>
        <div>
          <FormikInput
            name="project.projectUrl"
            value={formik.values.project.projectUrl}
            onChange={formik.handleChange}
            label={"Project Url"}
          />
        </div>
        <div>
          <FormikInput
            type="textArea"
            name="project.aboutProject"
            value={formik.values.project.aboutProject}
            onChange={formik.handleChange}
            label={"About Project"}
          />
        </div>
      </motion.div>{" "}
    </AnimatePresence>
  );

  const Education = (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"Education"}
        className="Body"
      >
        <div className="flex flex-col items-end ">
          <FormikInput
            name="education.title"
            value={formik.values.education.title}
            onChange={formik.handleChange}
            label={"Title"}
          >
            <div className="flex flex-wrap gap-3 text-white mt-2">
              {formik.values.educationArray.map((education, index) => (
                <div
                  className="bg-neon relative px-2 pr-12 flex py-1 rounded-full shadow-md   "
                  key={index}
                >
                  {education.title}
                  <span
                    onClick={() => deleteEducation(index)}
                    className="absolute cursor-pointer right-4 text-orange-500 font-bold top-1/2 -translate-y-1/2 "
                  >
                    <XIco className="w-5 h-5" />
                  </span>
                </div>
              ))}
            </div>
          </FormikInput>
          <span onClick={addEducation}>
            <PlusIco className="text-neon cursor-pointer" />
          </span>
        </div>
        <div className="Row">
          <FormikInput
            name="education.schoolName"
            value={formik.values.education.schoolName}
            onChange={formik.handleChange}
            label={"College/School Name"}
          />
          <FormikInput
            inputType="date"
            name="education.startDate"
            value={formik.values.education.startDate}
            onChange={formik.handleChange}
            label={"Start Date"}
          />
        </div>
        <div className="Row">
          <FormikInput
            name="education.finishDate"
            value={formik.values.education.finishDate}
            onChange={formik.handleChange}
            label={"End Date"}
            inputType="date"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const Skills = (
    <AnimatePresence mode="wait">
      <motion.div
        key={"Skills"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Body"
      >
        <div className="flex flex-col items-end">
          <FormikInput
            placeholder="e.g. software languages"
            Containerclass="w-full"
            name="skills.title"
            value={formik.values.skills.title}
            onChange={formik.handleChange}
            label={"Title"}
          >
            <div className="flex flex-wrap gap-3 text-white mt-2">
              {formik.values.skillsArray.map((skill, index) => (
                <div
                  className="bg-neon relative px-2 pr-12 flex py-1 rounded-full shadow-md   "
                  key={index}
                >
                  {skill.title}
                  <span
                    onClick={() => deleteSkills(index)}
                    className="absolute cursor-pointer right-2 text-orange-500 font-bold top-1/2 -translate-y-1/2 "
                  >
                    <XIco className="w-5 h-5" />
                  </span>
                </div>
              ))}
            </div>
          </FormikInput>
          <div onClick={addSkills}>
            <PlusIco className="text-neon cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-5">
          {formik.values.skills.names.map((skill, index) => (
            <div className="flex">
              <FormikInput
                label={`Skill ${index + 1}`}
                name={`skills.names[${index}] `}
                value={skill}
                onChange={(event) => handleSkillChange(index, event)}
              />
              {index === formik.values.skills.names.length - 1 &&
                index !== 0 && (
                  <span onClick={handleDeleteSkill}>
                    <XIco className="text-orange-500 cursor-pointer" />
                  </span>
                )}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <span onClick={handleAddSkill}>
            <PlusIco className="text-neon cursor-pointer" />
          </span>
        </div>
      </motion.div>{" "}
    </AnimatePresence>
  );

  const Summary = (
    <AnimatePresence mode="wait">
      <motion.div
        key={"Summary"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="Body"
      >
        <div>
          <FormikInput
            type="textArea"
            name="sumamry"
            rows={8}
            value={formik.values.sumamry}
            onChange={formik.handleChange}
            label={"Summary"}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const SwitchForm = () => {
    switch (formik.values.activeStep) {
      case 0:
        return BasicInfo;
      case 1:
        return WorkExperince;
      case 2:
        return Projects;
      case 3:
        return Education;
      case 4:
        return Skills;
      case 5:
        return Summary;
      default:
        return null;
    }
  };

  const navigate = useNavigate();
  return (
    <FadeDiv className="MasterDiv">
      <form onSubmit={formik.handleSubmit} className="Container bg-white">
        <div className="Header">
          {sections.map((section) => (
            <div
              className={`${
                formik.values.activeStep === section.id
                  ? "border-b-4 border-neon"
                  : ""
              } transition-all duration-100 cursor-pointer grow shrink-0 basis-0 flex justify-center items-center `}
              key={section.id}
              onClick={() => setActiveStep(section.id)}
            >
              {section.name}
            </div>
          ))}
        </div>
        {SwitchForm()}

        <div className="w-full flex p-5 gap-3 justify-end">
          <button
            type="submit"
            className=" bg-neon px-6 rounded-md  py-2  text-white"
          >
            Save
          </button>
          <button
            onClick={() => {
              formik.handleSubmit();
              navigate("/SelectTemplate", { state: { ...formik.values } });
            }}
            type="button"
            className="  px-6 text-white bg-black rounded-md  py-2  hover:text-neon "
          >
            Create Now!
          </button>
        </div>
      </form>
    </FadeDiv>
  );
};
