import { Course } from "src/entities/course.entity";
import { Student } from "src/entities/student.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
    url: 'postgresql://postgres:AebFlOMcNHRufkMopRiKAEOdeTLloJge@shuttle.proxy.rlwy.net:27047/railway',
    type: "postgres",
    port : 5432,
    entities: [Student, Course],
    synchronize: true
}