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


export interface SensorReport {
    timestamp: string;
    data: any;
}