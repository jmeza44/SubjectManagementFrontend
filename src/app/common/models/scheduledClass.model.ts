import { Classroom } from "./classroom.model"

export interface ScheduledClass {
  id: number
  startTime: string
  duration: number
  classroomId: number
  classroom: Classroom
  subjectId: number
}
