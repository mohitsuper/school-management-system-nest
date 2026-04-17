import { defineStore } from "pinia";
import { ref } from "vue";
import { axiosInstance } from "../../../commen/AxiosInstance";
import { useToast } from "primevue";
import { AlertErrorToastmessage } from "../../../commen/AlertErrorToastmessage";
import type { Teacher } from "../interface/Teacher.interface";

interface Subjects {
  name: string;
  status: boolean;
}
interface Classes {
  name: string;
  status: boolean;
  room: string;
}
export const useTeachersStore = defineStore("teachers", () => {
  const teachers = ref<Teacher[]>([]);
  const toast = useToast();
  const teacherSchema = ref<Teacher>({
    name: "",
    email: "",
    subject: "",
  });
  const Subjects = ref<Subjects[]>();
  const Classes = ref<Classes[]>();
  const fetchTeachers = async (searchTerm?:string, page:number = 1) => {
    try {
      const responce = await axiosInstance.get("/teacher",{
        params:{page,limit:2,searchTerm}
      });
      teachers.value = responce.data.data || [];
    } catch (error) {
      AlertErrorToastmessage(toast, error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const res = await axiosInstance.get("/subjects",{
        params:{status:true}
      });
      console.log("res.data", res);
      Subjects.value = res.data.map((subject: { name: string; id: string }) => {
        return {
          label: subject.name,
          value: subject.id,
        };
      });
    } catch (error) {
      AlertErrorToastmessage(toast, error);
    }
  };

  const fetchClasses = async () => {
    const res = await axiosInstance.get("/classes",{
      params:{status:true}
    });
    console.log("res.data", res);
    Classes.value = res.data.map((classes: { name: string; id: string }) => {
      return {
        label: classes.name,
        value: classes.id,
      };
    });
  };
  const createTeacher = async (data: {
    email: string;
    name: string;
    subjectIds:string[]
    classIds:string[]
  }) => {
    try {
      const responce = await axiosInstance.post("/teacher", { ...data });
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Create new teacher successful",
        life: 3000,
      });
      return responce.data;
    } catch (error) {
      AlertErrorToastmessage(toast, error);
    }
  };
  const getTeacherById = async (id: string) => {
    try {
      const responce = await axiosInstance.get(`/teacher/${id}`);
      const { name, email, subject } = responce.data;
      teacherSchema.value = {
        name,
        email,
        subject,
      };
    } catch (error) {
      AlertErrorToastmessage(toast, error);
    }
  };

  const updateTeacher = async (
    id: string,
    data: { email: string; subject: string; name: string },
  ) => {
    try {
      await axiosInstance.patch(`/teacher/${id}`, data);
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Update teacher successfull",
        life: 3000,
      });
      teacherSchema.value = {
        name: "",
        email: "",
        subject: "",
      };
    } catch (error) {
      AlertErrorToastmessage(toast, error);
    }
  };

  const deleteTeacher = async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/teacher/${id}`);
      console.log(res,"res")
      if(res.status === 200)
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Delete teacher successfull",
        life: 3000,
      });
      teacherSchema.value = {
        name: "",
        email: "",
        subject: "",
      };
      await fetchTeachers();
    } catch (error) {
      AlertErrorToastmessage(toast, error);
    }
  };
  return {
    teachers,
    fetchTeachers,
    createTeacher,
    getTeacherById,
    teacherSchema,
    updateTeacher,
    deleteTeacher,
    fetchSubjects,
    Subjects,
    fetchClasses,
    Classes
  };
});
