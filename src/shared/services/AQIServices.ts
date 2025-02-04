import { createFetch, withAggregation, withCatchAll } from "@solid-primitives/fetch";
import { Resource, ResourceOptions, Setter } from "solid-js";
import { AQIAddLocationRequest, AQILocationData, AQILocationResponse, AQIQualityDataList, IExtTimeAPIByZone, IExtWorldTimeByIP, OpenMeteoWeatherModel } from "../models/AQIModel";

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
    cnt?: number
}

export const AQIService = {
    aqiCfg: {
        // baseUrl: "http://127.0.0.1:7010"
        baseUrl: "json",
        cnt: 1
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
    getAirQuality: function (locname: string, successCallback?: ((data: AQIQualityDataList) => any) | undefined): AQIAPIEvent {
        const url = `${this.aqiCfg.baseUrl}/first_data${this.aqiCfg.baseUrl == "json" ? ".json" : ""}?location=${locname}`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: "GET"
        }, {}, [
            withCatchAll(),
            withAggregation((a: any) => {
                // randomizeValue
                if (successCallback) { successCallback(a); }
                return a;
            })]);
        return {
            mutate, refetch, resource
        }
    },
    getRealtimeAirQuality: function (locname: string, date: string, successCallback?: ((data: AQIQualityDataList) => any) | undefined): AQIAPIEvent {
        const url = `${this.aqiCfg.baseUrl}/last_update${this.aqiCfg.baseUrl == "json" ? ".json" : ""}?location=${locname}&date=${date}`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: this.aqiCfg.baseUrl == "json" ? "GET" : "POST",
            ...(this.aqiCfg.baseUrl !== "json" ? {body: JSON.stringify({ 
                location: locname,
                date: date
             })} : {})
        }, {}, [
            withCatchAll(),
            withAggregation((a: any) => {
                // randomizeValue
                // let b = JSON.parse(JSON.stringify(a));
                // for (let i = 0; i < this.aqiCfg.cnt!; i++) {
                //     b.unshift({
                //         co2: Math.round(Math.random() * 40),
                //         location: "nomaden",
                //         lpg: Math.round(Math.random() * 20),
                //         period: "2024-12-31 12:36:20",
                //         timestamp_update: "2024-12-31 12:36:20"
                //     })
                // }
                // this.aqiCfg.cnt!++;
                const b = a;
                if (successCallback) { successCallback(b); }
                return b;
            })]);
        return {
            mutate, refetch, resource
        }
    },
    getLocations: function (successCallback?: ((data: AQILocationResponse) => any) | undefined): AQIAPIEvent {
        const url = `${this.aqiCfg.baseUrl}/list_location${this.aqiCfg.baseUrl == "json" ? ".json" : ""}`;
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
        const url = `${this.aqiCfg.baseUrl}/first_data${this.aqiCfg.baseUrl == "json" ? ".json" : ""}`;
        const [resource, { mutate, refetch }] = createFetch<any>(
            url, {
            method: this.aqiCfg.baseUrl == "json" ? "GET" : "POST"
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
    getCurrentWeather: function (successCallback?: ((data: OpenMeteoWeatherModel) => any) | undefined): AQIAPIEvent {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=-6.18605745941392&longitude=106.81439570783567&current=temperature_2m,apparent_temperature,soil_temperature_0cm,weather_code`;
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
    } 
}