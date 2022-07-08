declare module 'stinger.js' {
    export interface FetchOptions {
        url: string;
        type: string;
        body?: any;
    }

    export interface AccountOptions {
        name: string;
        tag: string;
    }

    export interface MMROptions extends AccountOptions {
        region: Region;
        version?: 'v1' | 'v2';
        filter?: Episodes;
    };

    export interface PUUID {
        puuid: string;
    }

    export interface APIResponse {
        status: number;
        data: AccountInfo | null;
        rateLimits: RateLimit;
        error: ErrorObject | null;
        url: string;
    }

    export interface AccountInfo extends AccountOptions {
        puuid: string;
        region: Regions,
        account_level: number;
        card: {
            small: string;
            large: string;
            wide: string;
            id: string;
        };
        last_update: string;
    }
    
    export interface ErrorObject {
        message: string;
    }

    export interface RateLimit {
        used: number;
        remaining: number;
        reset: number;
    }

    export enum Episodes {
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

    export enum MMRVersions {
        Version1 = 'v1',
        Version2 = 'v2',
    }

    export enum LeaderboardVersions {
        Version1 = 'v1',
        Version2 = 'v2',
    }

    export enum Regions {
        Europe = 'eu',
        NorthAmerica = 'na',
        Korea = 'kr',
        Asia = 'ap',
        LatinAmerica = 'latam',
        Brazil = 'br',
    }
}