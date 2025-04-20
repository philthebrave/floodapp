// Use the website below to easily define interfaces
// https://transform.tools/json-to-typescript

// Import sub-interface
import { Floodarealong } from "./floodarealong"

export interface Flooddetail {
    "@id": string
    description: string
    eaAreaName: string
    eaRegionName: string
    floodArea: Floodarealong
    floodAreaID: string
    isTidal: boolean
    message: string
    severity: string
    severityLevel: number
    timeMessageChanged: string
    timeRaised: string
    timeSeverityChanged: string
    type: string
}
