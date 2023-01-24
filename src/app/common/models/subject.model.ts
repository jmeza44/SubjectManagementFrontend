import { Semester } from "./semester.model"
import { Teacher } from "./teacher.model"

export interface Subject {
  id: number,
  name: string,
  semesterId: number,
  semester: Semester,
  teacherId: number,
  teacher: Teacher
}
