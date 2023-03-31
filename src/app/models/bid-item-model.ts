export class Bid { 
    public readonly id: number;
    public readonly auctionId: number;
    public readonly email: string;
    public readonly price: number;
    public readonly bidTime: string;

    public constructor(id: number, auctionId: number, email: string, price: number, bidTime: string) {
        this.id = id;
        this.auctionId = auctionId;
        this.email = email;
        this.price = price;
        this.bidTime = bidTime;
    }
}