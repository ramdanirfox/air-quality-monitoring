export type IExtWorldTimeByIP = {
    utc_offset?: string | null;
    timezone?: string | null;
    day_of_week?: number | null;
    day_of_year?: number | null;
    datetime?: string | null;
    utc_datetime?: string | null;
    unixtime?: number | null;
    raw_offset?: number | null;
    week_number?: number | null;
    dst?: boolean | null;
    abbreviation?: string | null;
    dst_offset?: number | null;
    dst_from?: string | null;
    dst_until?: string | null;
    client_ip?: string | null;
  }

// export type IExtWorldTimeByIP = {
//     utc_offset?: string | null;
//     timezone?: string | null;
//     day_of_week?: number | null;
//     day_of_year?: number | null;
//     datetime?: string | null;
//     utc_datetime?: string | null;
//     unixtime?: number | null;
//     raw_offset?: number | null;
//     week_number?: number | null;
//     dst?: boolean | null;
//     abbreviation?: string | null;
//     dst_offset?: number | null;
//     dst_from?: string | null;
//     dst_until?: string | null;
//     client_ip?: string | null;
//   }

export type IExtTimeAPIByZone = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

export interface AQIQualityData {
  co2: number;
  location: string;
  lpg: number;
  period: string;
  timestamp_update: number;
}

export interface AQIQualityDataList {
  data: AQIQualityData[];
}

export interface AQIAddLocationRequest {
  location: string;
  date: string;
}

export interface AQILocationData {
  address: string;
  google_link: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface AQILocationResponse {
  data: AQILocationData[];
}