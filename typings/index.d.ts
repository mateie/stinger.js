declare module 'stinger.js' {

    // Base
    export class StingerJS {
        private readonly token?: string;
        constructor(token?: string): StingerJS;
        private _fetch({ url, type, body = null }: FetchOptions): Promise<APIResponse>;
        private _parseBody(body: any): any;
        private _parseResponse(req: any): APIResponse;
        private _query(input: any): URLSearchParams | null;
        public getAccount({ name, tag, force }: IGetAccount): Promise<AccountResponse>
        public getMMR({ name, tag, region, filter }: IGetMMR): Promise<MMRResponse>;
        public getMMRByPUUID({ puuid, region }: IGetMMRPUUID): Promise<MMRResponse>;
        public getMMRHistory({ name, tag, region }: IAccount): Promise<MMRHistoryResponse>;
    }

    export interface StingerJS {
        private readonly token?: string;
        new(token?: string): StingerJS;
        private _fetch({ url, type, body = null }: FetchOptions): Promise<APIResponse>;
        private _parseBody(body: any): any;
        private _parseResponse(req: any): APIResponse;
        private _query(input: any): URLSearchParams | null;
        public getAccount({ name, tag, force }: IGetAccount): Promise<AccountResponse>
        public getMMR({ name, tag, region, filter }: IGetMMR): Promise<MMRResponse>;
        public getMMRByPUUID({ puuid, region }: IGetMMRPUUID): Promise<MMRResponse>;
        public getMMRHistory({ name, tag, region }: IAccount): Promise<MMRHistoryResponse>;
    }

    // Options
    export interface FetchOptions {
        url: string;
        type: string;
        body?: any;
    }

    // Parameters
    export interface IAccount {
        name: string;
        tag: string;
        region?: Regions;
    }

    export interface IGetAccount extends IAccount {
        force?: boolean;
    }

    export interface IGetMMR extends IAccount {
        region: Regions;
        filter?: Episodes;
    }

    export interface IPUUID {
        puuid: string;
    }

    export interface IGetMMRPUUID extends IPUUID {
        region: Regions;
        filter?: Episodes;
    }

    // Responses
    export interface APIResponse {
        status: number;
        data: any;
        rateLimits: RateLimit;
        error: ErrorObject | null;
        url: string;
    }

    export interface AccountResponse extends APIResponse {
        data: AccountInfo;
    }

    export interface MMRResponse extends APIResponse {
        data: MMRInfo;
    }

    export interface MMRHistoryResponse extends APIResponse {
        data: [MMRHistory];
    }

    // Data Structures
    export interface AccountInfo extends IGetAccount {
        puuid: string;
        account_level: number;
        card: {
            small: string;
            large: string;
            wide: string;
            id: string;
        };
        last_update: string;
    }

    export interface MMRInfo extends IAccount {
        puuid: string;
        current_data: MMR;
        by_season: Record<Episodes, IBySeason>;
    }

    export interface MMRBase {
        currenttier: number;
        currenttierpatched: string;
        ranking_in_tier: number;
        mmr_change_to_last_game: number;
        elo: number;
    }

    export interface MMR extends MMRBase {
        games_needed_for_rating: number;
        old: boolean;
    }

    export interface MMRHistory extends MMRBase {
        date: string;
        date_raw: number;
    }

    export interface IBySeason {
        wins: number;
        number_of_games: number;
        final_rank: number;
        final_rank_patched: string;
        act_rank_wins: [IActRankWins];
        old: boolean;
        error?: string;
    }

    export interface IActRankWins {
        patched_tier: string;
        tier: number;
    }

    // Etc
    export interface ErrorObject {
        message: string;
    }

    export interface RateLimit {
        used: number;
        remaining: number;
        reset: number;
    }

    // Enums
    export enum EEpisodes {
        Episode1Act1 = 'e1a1',
        Episode1Act2 = 'e1a2',
        Episode1Act3 = 'e1a3',
        Episode2Act1 = 'e2a1',
        Episode2Act2 = 'e2a2',
        Episode2Act3 = 'e2a3',
        Episode3Act1 = 'e3a1',
        Episode3Act2 = 'e3a2',
        Episode3Act3 = 'e3a3',
        Episode4Act1 = 'e4a1',
        Episode4Act2 = 'e4a2',
        Episode4Act3 = 'e4a3',
        Episode5Act1 = 'e5a1',
        Episode5Act2 = 'e5a2',
        Episode5Act3 = 'e5a3',
    }

    export enum Modes {
        Escalation = 'escalation',
        SpikeRush = 'spikerush',
        Deathmatch = 'deathmatch',
        Competitive = 'competitive',
        Unrated = 'unrated',
        Replication = 'replication',
        Custom = 'custom',
        NewMap = 'newmap',
        Snowball = 'snowball',
    }

    export enum Maps {
        Ascent = 'ascent',
        Split = 'split',
        Fracture = 'fracture',
        Bind = 'bind',
        Breeze = 'breeze',
        Icebox = 'icebox',
        Haven = 'haven',
        Pearl = 'pearl',
    }

    export enum CCRegions {
        EnglishGB = 'en-gb',
        EnglishUS = 'en-us',
        Spanish = 'es-es',
        Mexican = 'es-mx',
        French = 'fr-fr',
        Italian = 'it-it',
        Japanese = 'ja-jp',
        Korean = 'ko-kr',
        Portuguese = 'pt-br',
        Russian = 'ru-ru',
        Turkish = 'tr-tr',
        Vietnamese = 'vi-vn',
    }

    export enum Locales {
        Arabic = 'ar-AE',
        German = 'de-DE',
        EnglishGB = 'en-GB',
        EnglishUS = 'en-US',
        Spanish = 'es-ES',
        Mexican = 'es-MX',
        French = 'fr-FR',
        Indonesian = 'id-ID',
        Italian = 'it-IT',
        Japanese = 'ja-JP',
        Korean = 'ko-KR',
        Polish = 'pl-PL',
        Portuguese = 'pt-BR',
        Russian = 'ru-RU',
        Thailand = 'th-TH',
        Turkish = 'tr-TR',
        Vietnamese = 'vi-VN',
        Czech = 'zn-CN',
        Taiwanese = 'zn-TW',
    }

    export enum RawTypes {
        CompetitiveUpdates = 'competitiveupdates',
        MMR = 'mmr',
        MatchDetails = 'matchdetails',
        MatchHistory = 'matchhistory',
    }

    export enum ERegions {
        Europe = 'eu',
        NorthAmerica = 'na',
        Korea = 'kr',
        Asia = 'ap',
        LatinAmerica = 'latam',
        Brazil = 'br',
    }

    // Types
    export type Episodes = 'e1a1' |
        'e1a2' |
        'e1a3' |
        'e2a1' |
        'e2a2' |
        'e2a3' |
        'e3a1' |
        'e3a2' |
        'e3a3' |
        'e4a1' |
        'e4a2' |
        'e4a3' |
        'e5a1' |
        'e5a2' |
        'e5a3';
    
    export type Regions = 'eu' | 'na' | 'kr' | 'ap' | 'latam' | 'br';
}