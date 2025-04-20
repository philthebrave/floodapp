import { Lowercorner } from "./lowercorner"
import { Uppercorner } from "./uppercorner"

export interface Envelope {
    lowerCorner: Lowercorner
    upperCorner: Uppercorner
}
