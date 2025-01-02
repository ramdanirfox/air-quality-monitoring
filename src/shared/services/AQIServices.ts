import { createFetch, withAggregation, withCatchAll } from "@solid-primitives/fetch";
import { Resource, ResourceOptions, Setter } from "solid-js";
import { AQIAddLocationRequest, AQILocationResponse, AQIQualityDataList, IExtTimeAPIByZone, IExtWorldTimeByIP } from "../models/AQIModel";

export type AQIAPIEvent = {
    mutate: Setter<any>,
    refetch: (info?: ResourceOptions<any> | undefined) => any,
    resource: Resource<any> & {
        [key: string]: any;
        aborted?: boolean;
        status: number | null;
        response: Response | null;
    }
};

export type AQIAPIConfig = {
    baseUrl: string;
}

export const AQIService = {
    aqiCfg: {
        baseUrl: "http://127.0.0.1:7010"
    } as AQIAPIConfig,
    getCfg: function (): AQIAPIConfig {
        return this.aqiCfg;
    },
    setCfg: function (cfg: AQIAPIConfig): void {
        this.aqiCfg = cfg;
    },
    externalTimingAPI: function (successCallback?: ((data: IExtTimeAPIByZone) => any) | undefined): AQIAPIEvent {
        // const url = `https://worldtimeapi.org/api/ip`;
        const url = `https://www.timeapi.io/api/time/current/zone?timeZone=Asia%2FJakarta`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: "GET"
        }, {}, [
            withCatchAll(),
            withAggregation((a: any) => {
                if (successCallback) { successCallback(a); }
                return a;
            })]);
        return {
            mutate, refetch, resource
        }
    },
    getAirQuality: function (successCallback?: ((data: AQIQualityDataList) => any) | undefined): AQIAPIEvent {
        // const url = `https://worldtimeapi.org/api/ip`;
        const url = `${this.aqiCfg.baseUrl}/first_data`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: "GET"
        }, {}, [
            withCatchAll(),
            withAggregation((a: any) => {
                if (successCallback) { successCallback(a); }
                return a;
            })]);
        return {
            mutate, refetch, resource
        }
    },
    getLocations: function (successCallback?: ((data: AQILocationResponse) => any) | undefined): AQIAPIEvent {
        // const url = `https://worldtimeapi.org/api/ip`;
        const url = `${this.aqiCfg.baseUrl}/list_location`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: "GET"
        }, {}, [
            withCatchAll(),
            withAggregation((a: any) => {
                if (successCallback) { successCallback(a); }
                return a;
            })]);
        return {
            mutate, refetch, resource
        }
    },
    addLocation: function (param: AQIAddLocationRequest, successCallback?: ((data: AQIQualityDataList) => any) | undefined): AQIAPIEvent {
        // const url = `https://worldtimeapi.org/api/ip`;
        const url = `${this.aqiCfg.baseUrl}/first_data`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: "POST"
        }, {}, [
            withCatchAll(),
            withAggregation((a: any) => {
                if (successCallback) { successCallback(a); }
                return a;
            })]);
        return {
            mutate, refetch, resource
        }
    },
}