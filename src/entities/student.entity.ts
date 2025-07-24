import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student{
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
email: string;

@Column()
yearOfAdmission: number;
}