import { Room } from "./room-item-model";

export class StayApiResponse {
    public readonly userId: number;
    public readonly auctionId: number;
    public readonly reservationStartDate: string;
    public readonly reservationEndDate: string;
    public readonly roomDto: Room;
    
    public constructor(id: number, userId: number, auctionId: number, reservationStartDate: string, reservationEndDate: string, roomDto: Room) {
        // this.id = id;
        this.userId = userId;
        this.auctionId = auctionId;
        this.reservationStartDate = reservationStartDate;
        this.reservationEndDate = reservationEndDate;
        this.roomDto = roomDto;
    }
}