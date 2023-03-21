import { Bid } from "./bid-item-model";
import { Stay } from "./stay-item-model";

export class AuctionPayLoad {
    public readonly stayDto: Stay;
    public readonly startPrice: number;
    public readonly actualPrice: number;
    public readonly startDate: number;
    public readonly endDate: number;  
    public readonly bidHistory: Bid[];
    
    public constructor(stayDto: Stay, startPrice: number, actualPrice: number, startDate: number, endDate: number, bidHistory: Bid[]) {
        this.stayDto = stayDto;
        this.startPrice = startPrice;
        this.actualPrice = actualPrice;
        this.startDate = startDate;
        this.endDate = endDate;
        this.bidHistory = bidHistory;
    }
}