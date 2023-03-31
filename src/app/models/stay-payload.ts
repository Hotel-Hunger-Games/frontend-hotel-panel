import { Bid } from "./bid-item-model";
import { Room } from "./room-item-model";
import { Stay } from "./stay-item-model";

export class StayPayLoad {
    public readonly userId: number;
    public readonly auctionId: number;
    public readonly reservationStartDate: number;
    public readonly reservationEndDate: number;
    public readonly roomDto: Room;
    
    public constructor(id: number, userId: number, auctionId: number, reservationStartDate: number, reservationEndDate: number, roomDto: Room) {
        // this.id = id;
        this.userId = userId;
        this.auctionId = auctionId;
        this.reservationStartDate = reservationStartDate;
        this.reservationEndDate = reservationEndDate;
        this.roomDto = roomDto;
    }
}