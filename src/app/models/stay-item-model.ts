import { Room } from "./room-item-model";

export class Stay {
    public readonly userId: number;
    public readonly auctionId: number;
    public readonly reservationStartDate: String;
    public readonly reservationEndDate: String;
    public readonly roomDto: Room;

    public constructor(userId: number, auctionId: number, reservationStartDate: String, reservationEndDate: String, roomDto: Room) {
        this.userId = userId;
        this.auctionId = auctionId;
        this.reservationStartDate = reservationStartDate;
        this.reservationEndDate = reservationEndDate;
        this.roomDto = roomDto;
    }
}
