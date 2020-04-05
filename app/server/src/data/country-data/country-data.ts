import { Charity } from '../charity-data/charity-data';

export interface Australia extends Charity {
    abn: number;
    territoryNSW: string;
    territoryACT: boolean;
    territoryNT: boolean;
    territoryQLD: boolean;
    territorySA: boolean;
    territoryTAS: boolean;
    territoryVIC: boolean;
    territoryWA: boolean;
}
