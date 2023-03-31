import { StayPayLoad } from "./stay-payload";

export class AuctionPayLoad {
    public readonly stayDto: StayPayLoad;
    public readonly startPrice: number;
    public readonly actualPrice: number;
    public readonly startDate: number;
    public readonly endDate: number;  
    
    public constructor(stayDto: StayPayLoad, startPrice: number, actualPrice: number, startDate: number, endDate: number) {
        this.stayDto = stayDto;
        this.startPrice = startPrice;
        this.actualPrice = actualPrice;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}