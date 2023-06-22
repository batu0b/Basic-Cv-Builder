import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { AtIco, GitIco, LinkedinIco, PhoneIco } from "../../assets/icons";

export const Template1 = (props) => {
  const { state } = props;
  const styles = StyleSheet.create({

    container: {
      backgroundColor: "white",
    },
    header: {
      borderBottomWidth: 4,
      padding: 8,
    },
    name: {
      fontSize: 24,
      textTransform: "uppercase",
    },
    contactDetails: {
      marginTop: 8,
    },
    contactItem: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
    },
    contactIcon: {
      width: 16,
      height: 16,
      marginRight: 4,
    },
    contactText: {
      fontSize: 12,
    },
    about: {
      marginTop: 16,
    },
    aboutTitle: {
      fontSize: 16,
      borderBottomWidth: 2,
    },
    aboutText: {
      fontSize: 12,
    },
    main: {
      paddingTop: 16,
      paddingBottom: 8,
    },
    sectionTitle: {
      fontSize: 24,
      textTransform: "uppercase",
      borderBottomWidth: 2,
    },
    workExperience: {
      marginTop: 16,
    },
    workTitle: {
      fontSize: 20,
      borderBottomWidth: 2,
    },
    workCompany: {
      marginTop: 4,
      fontSize: 12,
    },
    workLocation: {
      fontSize: 12,
    },
    workDates: {
      fontSize: 12,
    },
    projects: {
      marginTop: 16,
    },
    projectTitle: {
      fontSize: 20,
      borderBottomWidth: 2,
    },
    projectUrl: {
      fontSize: 12,
    },
    projectDescription: {
      fontSize: 12,
    },
    education: {
      marginTop: 16,
    },
    educationTitle: {
      fontSize: 20,
      borderBottomWidth: 2,
    },
    educationSchool: {
      fontSize: 12,
    },
    educationDates: {
      fontSize: 12,
    },
    footer: {
      marginTop: 16,
    },
    skills: {
      width: "100%",
    },
    skillsTitle: {
      fontSize: 24,
      textTransform: "uppercase",
      borderBottomWidth: 2,
    },
    skillGroup: {
      marginTop: 8,
    },
    skillTitle: {
      fontSize: 20,
      borderBottomWidth: 2,
    },
    skillItem: {
      fontSize: 12,
      marginLeft: 16,
    },
    summary: {
      marginTop: 8,
    },
  });

  return (
    <Document style={{ height: 1000 }}>
      <Page size="A4" style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{state.name + " " + state.surname}</Text>
          <View style={styles.contactDetails}>
            <Text style={styles.sectionTitle}>Contact Details</Text>
            {state.email && (
              <View style={styles.contactItem}>
                <Image src={AtIco} style={styles.contactIcon} />
                <Text style={styles.contactText}>{state.email}</Text>
              </View>
            )}
            {state.phone && (
              <View style={styles.contactItem}>
                <Image src={PhoneIco} style={styles.contactIcon} />
                <Text style={styles.contactText}>{state.phone}</Text>
              </View>
            )}
            {state.github && (
              <View style={styles.contactItem}>
                <Image src={GitIco} style={styles.contactIcon} />
                <Text style={styles.contactText}>{state.github}</Text>
              </View>
            )}
            {state.linkedIn && (
              <View style={styles.contactItem}>
                <Image src={LinkedinIco} style={styles.contactIcon} />
                <Text style={styles.contactText}>{state.linkedIn}</Text>
              </View>
            )}
          </View>
          {state.about && (
            <View style={styles.about}>
              <Text style={styles.aboutTitle}>About Me</Text>
              <Text style={styles.aboutText}>{state.about}</Text>
            </View>
          )}
        </View>
        <View style={styles.main}>
          {state.worksArray.length > 0 && (
            <View style={styles.workExperience}>
              <Text style={styles.sectionTitle}>Work Experiences</Text>
              {state.worksArray.map((work, index) => (
                <View key={index}>
                  <Text style={styles.workTitle}>{work.title}</Text>
                  <Text style={styles.workCompany}>{work.companyName}</Text>
                  <Text style={styles.workLocation}>{work.location}</Text>
                  <Text style={styles.workDates}>
                    {work.startDate + "/" + work.finishDate || "?"}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {state.projectsArray.length > 0 && (
            <View style={styles.projects}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {state.projectsArray.map((project, index) => (
                <View key={index}>
                  <Text style={styles.projectTitle}>
                    {project.projectTitle}
                  </Text>
                  {project.projectUrl && (
                    <Text style={styles.projectUrl}>{project.projectUrl}</Text>
                  )}
                  <Text style={styles.projectDescription}>
                    {project.aboutProject}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {state.educationArray.length > 0 && (
            <View style={styles.education}>
              <Text style={styles.sectionTitle}>Education</Text>
              {state.educationArray.map((education, index) => (
                <View key={index}>
                  <Text style={styles.educationTitle}>{education.title}</Text>
                  <Text style={styles.educationSchool}>
                    {education.schoolName}
                  </Text>
                  <Text style={styles.educationDates}>
                    {education.startDate + " / " + education.finishDate}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View style={styles.footer}>
          {state.skillsArray.length > 0 && (
            <View style={styles.skills}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {state.skillsArray.map((skillGroup, index) => (
                <View key={index} style={styles.skillGroup}>
                  <Text style={styles.skillTitle}>{skillGroup.title}</Text>
                  {skillGroup.names.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>
                      {skill}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          )}
          {state.summary && <Text style={styles.summary}>{state.summary}</Text>}
        </View>
      </Page>
    </Document>
  );
};
