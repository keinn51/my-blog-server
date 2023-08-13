import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    title: string;

    @Column()
    value: string;

    @Column()
    date: string;

    @Column()
    category: string;

    @Column()
    preview: string;

    @Column()
    isLocked: number;

    @Column()
    link: string;

    @Column()
    tags: string;

    @Column()
    status: number;

    @Column()
    createdAt: string;

    @Column()
    creator: number;

    @Column()
    updatedAt: string;

    @Column()
    updator: number;

    @Column()
    isBookMarked: number;

    @Column()
    note: string;
}
