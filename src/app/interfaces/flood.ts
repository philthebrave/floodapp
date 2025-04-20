// Use the website below to easily define interfaces
// https://transform.tools/json-to-typescript

// Import sub-interface
import { FloodArea } from "./flood-area";

export interface Flood {
    "@id": string;
    description: string;
    eaAreaName: string;
    eaRegionName: string;
    floodArea: FloodArea;
    floodAreaID: string;
    isTidal: boolean;
    message: string;
    severity: string;
    severityLevel: number;
    timeMessageChanged: string;
    timeRaised: string;
    timeSeverityChanged: string;
}
