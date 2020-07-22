import {SIGN_IN_SOCIAL_NETWORK} from "./ActionType"

export const SignInSocialNetwork = async (network, formName, context) => {

    await context.attemptingResponseReducer.displayLoaderAction(true, formName)
    switch (network) {
        case "google":
            return window.open(`${process.env.REACT_APP_URL_SERVER}/auth/google`, "_self");
        case "facebook":
            return window.open(`${process.env.REACT_APP_URL_SERVER}/auth/facebook`, "_self");
        case "twitter":
            return window.open(`${process.env.REACT_APP_URL_SERVER}/auth/twitter`, "_self");
        default:
            return {type: SIGN_IN_SOCIAL_NETWORK}
    }
}