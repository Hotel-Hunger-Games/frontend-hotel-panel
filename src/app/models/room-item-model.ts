import { Stay } from "./stay-item-model";

export class Room {
    // public readonly id: number;
    public readonly name: string;
    public readonly accommodationCapacity: number;
    public readonly bedsSizes: number[];
    public readonly stays: Stay[];
    public readonly images: string[];

    public constructor(id: number, name: string, accommodationCapacity: number) {
        // this.id = id;
        this.name = name;
        this.accommodationCapacity = accommodationCapacity;
        this.bedsSizes = [];
        this.stays = [];
        this.images = [];
    }
}