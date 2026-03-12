import PersonalDetails from "../model/onboarding/components/PersonalDetails.vue";
import AddressDetails from "../model/onboarding/components/AddressDetails.vue";
import seleryDetails from '../model/onboarding/components/seleryDetails.vue'
import DocumentDetails from "../model/onboarding/components/DocumentDetails.vue";
export const teacherOnboardingSteps = [
  {
    title: "Personal Details",
    icon: "pi pi-user",
    key: "personalDetails",
    description: "Basic information about the teacher including name, contact, and identity details.",
    component:PersonalDetails,
    width:'20%'
  },
  {
    title: "Address Information",
    icon: "pi pi-home",
    key: "addressDetails",
    description: "Residential and permanent address details of the teacher.",
    component:AddressDetails,
  },
  {
    title: "Salary Details",
    icon: "pi pi-wallet",
    key: "seleryDetails",
    description: "Compensation and banking details for salary processing.",
    component:seleryDetails,
  },
  {
    title: "Documentation",
    icon: "pi pi-file",
    key: "documentation",
    description: "Upload and verify required official documents.",
    component:DocumentDetails
  }
];