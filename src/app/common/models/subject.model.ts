import { Teacher } from "./teacher.model";
import { Semester } from "./semester.model"

export interface Subject {
  id: number,
  name: string,
  semester: Semester,
  teacher: Teacher
}
