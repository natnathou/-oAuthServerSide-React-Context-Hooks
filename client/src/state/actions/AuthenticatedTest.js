import {TEST_AUTHENTICATED} from "./ActionType"

export const authenticatedTest = (status, user, error) =>{        
    return {type: TEST_AUTHENTICATED, payload: {status, user, error}}
}
