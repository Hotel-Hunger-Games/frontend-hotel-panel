export class Auction {
    public readonly id: number;
    public readonly stayEntity: string;
    public readonly startPrice: number;
    public readonly actualPrice: number;
    public readonly auctionEndDate: string; 
    public readonly bidHistory: string[];
    
    public constructor(id: number, stayEntity: string, startPrice: number, actualPrice: number, auctionEndDate: string, bidHistory: string[]) {
        this.id = id;
        this.stayEntity = stayEntity;
        this.startPrice = startPrice;
        this.actualPrice = actualPrice;
        this.auctionEndDate = auctionEndDate;
        this.bidHistory = bidHistory;
    }
}