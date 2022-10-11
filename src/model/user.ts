import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Expose } from "class-transformer";
import status from "./enums/status";

@Entity()
export default class User {
    @PrimaryGeneratedColumn({ name: "pk_user"})
    @Expose()
    id?: number;

    @Column({ name: "name", type: "varchar", nullable: false })
    @Expose()
    name?: string;

    @Column({ name: "date_of_birth", type: "date", nullable: false })
    @Expose()
    dof?: Date;

    @Column({ name: "email", type: "varchar", nullable: false })
    @Expose()
    email?: string;

    @Column({ name: "status", type: "integer", enum: status, default: status.ACTIVE})
    @Expose()
    status?: number;
}