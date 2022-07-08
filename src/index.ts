import axios, { AxiosResponse } from "axios";

import { AccountOptions, APIResponse, FetchOptions, MMROptions } from "stinger.js";

export default class StingerJS {
    private readonly token?: string;

    constructor(token?: string) {
        this.token = token;
    }

    private async _fetch({ url, type, body = null }: FetchOptions) {
        const req = await axios({
            url,
            method: type,
            data: body,
            responseType: 'json',
            headers: this.token ? { Authentication: this.token, 'User-Agent': 'Stinger.js/2.0' } : { 'User-Agent': 'Stinger.js/2.0' }
        }).catch(err => err);

        return this._parseResponse(req);
    }

    private _parseBody(body: any) {
        if (body.message) return { message: body.message };
        return body.status ? body.data : body;
    }

    private _parseResponse(req: any): APIResponse {
        return {
            status: req.response ? req.response.status : req.status,
            data: req.response ? null : !req.config.headers['Content-Type'] ? this._parseBody(req.data) : req.data,
            rateLimits: {
                used: req.response ? parseInt(req.response.headers['x-ratelimit-limit']) : parseInt(req.headers['x-ratelimit-limit']),
                remaining: req.response ? parseInt(req.response.headers['x-ratelimit-remaining' ]) : parseInt(req.headers['x-ratelimit-remaining']),
                reset: req.response ? parseInt(req.response.headers['x-ratelimit-reset']) : parseInt(req.headers['x-ratelimit-reset']),
            },
            error: req.response ? this._parseBody(req.response.data) : null,
            url: req.config.url,
        }
    }

    private _query(input: any) {
        let query = new URLSearchParams();
        for (let i = 0; i < Object.values(input).length; i++){
            if (Object.values(input)[i] != null) query.append(Object.keys(input)[i], Object.values(input)[i] as any);
        }
        return query.toString().length ? query : null;
    }

    public async getAccount({ name, tag }: AccountOptions) {
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}`,
            type: 'GET',
        });
    }

    public async getMMR({ name, tag, region, filter, version }: MMROptions) {
        const query = this._query({ filter });

        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/mmr/${region}/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
            type: 'GET',
        });
    }
}