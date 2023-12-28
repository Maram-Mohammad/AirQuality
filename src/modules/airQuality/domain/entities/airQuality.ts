export interface Weather {
    ts: Date;
    tp: number;
    pr: number;
    hu: number;
    ws: number;
    wd: number;
    ic: string;
}

export interface PollKeys {
    conc: number;
    aqius: number;
    aqicn: number;
}

export interface Pollution {
    ts: Date;
    aqius: number;
    mainus: string;
    aqicn: number;
    maincn: string;
    p1:PollKeys;
    n2:PollKeys;
    s2:PollKeys;
    co:PollKeys;
}

export interface IAirQuality{
    id: string;
    city: string;
    state: string;
    country: string;
    lat: number;
    lon: number;
    weather: Weather;
    pollution?: Pollution;
    createdAt: Date;
    updatedAt: Date;
    // forecast: Forecast[];
    // current: Current;
    // history: History;
}

// interface Forecast extends Weather {
//     aqius: number;
//     aqicn: number;
//     tp_min: number;
// }
// interface Current{
//     weather: Weather;
//     pollution: Pollution;
// }
// interface History{
//     weather: Weather[];
//     pollution: Pollution[];
// }

