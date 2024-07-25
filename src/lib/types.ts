export interface SensorProps {
    id: string
    name: string
    type: string
}

export interface StationProps {
    id: string
    name: string
    sensors: SensorProps[]
}

export interface Report {
    timestamp: string;
    data: {
        temperature: number[];
    };
}

export interface chartProps extends Array<Report> {}