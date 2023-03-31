import { Bid } from "./bid-item-model";
import { Stay } from "./stay-item-model";

export interface Auction {
    readonly id: number;
    readonly stayDto: Stay;
    readonly startPrice: number;
    readonly actualPrice: number;
    readonly startDate: String;
    readonly endDate: String; 
    readonly bidHistory: Bid[];
}