import { Bid } from "./bid-item-model";
import { StayApiResponse } from "./stay-api-response";

export interface AuctionApiResponse {
    readonly id: number;
    readonly stayDto: StayApiResponse;
    readonly startPrice: number;
    readonly actualPrice: number;
    readonly startDate: string;
    readonly endDate: string; 
    readonly bidHistory: Bid[];
}