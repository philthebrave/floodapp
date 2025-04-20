import { Envelope } from "./envelope"

export interface Floodarealong {
    "@id": string
    county: string
    currentWarning: string
    description: string
    eaAreaName: string
    envelope: Envelope
    fwdCode: string
    label: string
    lat: number
    long: number
    notation: string
    polygon: string
    quickDialNumber: string
    riverOrSea: string
    type: string[]
}
