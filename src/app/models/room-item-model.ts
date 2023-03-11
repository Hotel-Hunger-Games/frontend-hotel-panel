export class Room {
    public readonly id: number;
    public readonly name: string;
    public readonly accommodationCapacity: number;
    public readonly bedsSizes: number;
    public readonly stays: string;
    public readonly images: string;

    public constructor(id: number, name: string, accommodationCapacity: number, bedsSizes: number, stays: string, images: string) {
        this.id = id;
        this.name = name;
        this.accommodationCapacity = accommodationCapacity;
        this.bedsSizes = bedsSizes;
        this.stays = stays;
        this.images = images;
    }
}