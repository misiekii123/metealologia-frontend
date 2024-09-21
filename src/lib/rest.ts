import {env} from "$env/dynamic/public";
import {error} from "@sveltejs/kit";

export interface SensorReport {
    timestamp: string;
    data: any;
}

export interface SensorMeta {
    id: string
    name: string
    type: string
}

export interface StationMeta {
    id: string
    name: string
    sensors: SensorMeta[]
}

export interface BackendMeta {
    title: string
    version: string
    environment: string
    repository_url: string
}

async function wrappedFetch(url: string, fetchFunction: Function) {
    let response;
    try {
        response = await fetchFunction(url)
    } catch {
        error(503, "Serwer nie odpowiada")
    }
    const content = await response.json()
    return content;
}

export async function fetchBackendMeta(fetchFunction: Function = fetch): Promise<BackendMeta> {
    const OVERVIEW_URL = new URL("", env.PUBLIC_BACKEND_URI).href;
    return await wrappedFetch(OVERVIEW_URL, fetchFunction);
}

export async function fetchStations(fetchFunction: Function = fetch): Promise<StationMeta> {
    const STATIONS_URL = new URL("stations", env.PUBLIC_BACKEND_URI).href;
    return await wrappedFetch(STATIONS_URL, fetchFunction);
}

export async function fetchReports(station: string, sensor: string, before: Date, after: Date, fetchFunction: Function = fetch): Promise<SensorReport[]> {
    const REPORTS_URL = new URL("/stations/(station)/sensors/(sensor)/reports?after=(after)&before=(before)", env.PUBLIC_BACKEND_URI).href;
    const url = REPORTS_URL
        .replace("(station)", station)
        .replace("(sensor)", sensor)
        .replace("(after)", after.getTime().toString())
        .replace("(before)", before.getTime().toString())
    return await wrappedFetch(url, fetchFunction);
}