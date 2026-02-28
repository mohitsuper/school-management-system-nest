import PersonalDetails from "../model/onboarding/components/PersonalDetails.vue";
import AddressDetails from "../model/onboarding/components/AddressDetails.vue";
import seleryDetails from '../model/onboarding/components/salaryDetails.vue'
export const teacherOnboardingSteps = [
  {
    title: "Personal Details",
    icon: "pi pi-user",
    key: "personalDetails",
    description: "Basic information about the teacher including name, contact, and identity details.",
    component:PersonalDetails,
    fields: [
      "Full Name",
      "Date of Birth",
      "Gender",
      "Phone Number",
      "Email Address",
      "Profile Photo"
    ]
  },
  {
    title: "Address Information",
    icon: "pi pi-home",
    key: "addressDetails",
    description: "Residential and permanent address details of the teacher.",
    component:AddressDetails,
    fields: [
      "Current Address",
      "City",
      "State",
      "Postal Code",
      "Country",
      "Permanent Address"
    ]
  },
  {
    title: "Salary Details",
    icon: "pi pi-wallet",
    key: "salaryDetails",
    description: "Compensation and banking details for salary processing.",
    component:seleryDetails,
    fields: [
      "Employee ID",
      "Department",
      "Designation",
      "Basic Salary",
      "Allowances",
      "Bank Name",
      "Account Number",
      "IFSC Code"
    ]
  },
  {
    title: "Documentation",
    icon: "pi pi-file",
    key: "documentation",
    description: "Upload and verify required official documents.",
    fields: [
      "ID Proof",
      "Address Proof",
      "Educational Certificates",
      "Experience Certificates",
      "Joining Letter",
      "Contract Agreement"
    ]
  }
];