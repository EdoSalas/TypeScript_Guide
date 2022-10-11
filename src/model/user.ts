import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import status from "./enums/status";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id?: Number;

    @Column({ type: "varchar", nullable: false })
    name?: String;

    @Column({ type: "date", nullable: false })
    date_of_birth?: Date;

    @Column({ type: "varchar", nullable: false })
    email?: String;

    @Column({ type: "integer", enum: status, default: status.ACTIVE})
    status?: Number;

}