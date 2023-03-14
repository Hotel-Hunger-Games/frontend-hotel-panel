export class Bid { 
    public readonly id: number;
    public readonly email: string;
    public readonly price: number;
    public readonly bidTime: string;
    public readonly auctionId: number;

    public constructor(id: number, email: string, price: number, bidTime: string, auctionId: number) {
        this.id = id;
        this.email = email;
        this.price = price;
        this.bidTime = bidTime;
        this.auctionId = auctionId;
    }
}