import type {BlockData, Bytes} from '@subsquid/substrate-data-raw'
import type {Runtime} from '@subsquid/substrate-runtime'
import type {AccountId} from '../parsing/validator'


export interface RawBlock extends BlockData {
    validators?: AccountId[]
    session?: Bytes
    runtime?: Runtime
    runtimeOfPrevBlock?: Runtime
    feeMultiplier?: Bytes
    /**
     * Storage values of previous block
     */
    storage?: {
        [key: Bytes]: Bytes | null
    }
}
