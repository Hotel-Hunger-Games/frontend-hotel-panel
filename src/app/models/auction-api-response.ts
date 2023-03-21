import { Stay } from "./stay-item-model";

export interface AuctionApiResponse {
    readonly id: number;
    readonly stayDto: Stay;
    readonly startPrice: number;
    readonly actualPrice: number;
    readonly startDate: number;
    readonly endDate: string; 
    readonly bidHistory: string[];
}