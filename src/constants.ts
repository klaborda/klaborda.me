import { formatDistanceToNowStrict } from "date-fns";

export const aboutData = {
  city: "Salt Lake City, UT",
  age: formatDistanceToNowStrict(new Date("1988-09-16T09:24:00"), {
    unit: "year",
  }),
  stack: [
    "React",
    "Node.js",
    "Python",
    "Docker",
    "OpenShift",
    "MongoDB",
    "PostgreSQL",
  ],
};

// Data details for the contact page
export const contactData = {
  linkedIn: "https://www.linkedin.com/in/kevin-laborda-4386b71a/",
  email: "klaborda@gmail.com",
};
