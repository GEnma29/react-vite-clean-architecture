import { TypeWithKey } from '~/models'
export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Network Error",
        ERR_NAME_NOT_RESOLVED: "urls"
    }
    return codeMatcher[errorCode]
}