export interface AuctionApiResponse {
    id: number;
    stayDto: string;
    startPrice: number;
    actualPrice: number;
    auctionEndDate: string
    bidHistory: string;
}