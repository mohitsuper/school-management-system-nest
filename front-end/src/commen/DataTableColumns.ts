export const TeacherColumns = [
  { field: "name", header: "Name" },
  { field: "email", header: "Email" },
  { field: "subjects", header: "subject",slot:"subject" },
  { field: "classes", header: "class", slot:"classes" },
];

export const ClassesColumns = [
   { field: "name", header: "Name" },
  { field: "room", header: "room" },
  { field: "status", header: "status",slot:"status" },
]

export const SubjectColumns = [
   { field: "name", header: "Name" },
  { field: "status", header: "status",slot:"status" },
]