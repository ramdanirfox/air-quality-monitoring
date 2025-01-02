import { createFetch, withAggregation, withCatchAll } from "@solid-primitives/fetch";
import { Resource, ResourceOptions, Setter } from "solid-js";
import { IExtTimeAPIByZone, IExtWorldTimeByIP } from "../models/AQIModel";

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

export const AQIService = {

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
}