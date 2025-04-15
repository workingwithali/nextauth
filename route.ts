/** 
 * An arrray of routes that is accessible to the public
 * there auth can't use authentication 
 * @type {string[]}
*/

export const publicRoute = [
    "/"
]
/** 
 * arrray of routes that are use for authentication
 * there route ridrect logged in use/setting
 * @type {string[]}
*/

export const authRoute = [
    "/auth/login",
    "/auth/register"
]
/** 
 * the prefix for api authentication route 
 * Route that start with this prefix are used for API authentication purpose * 
 * @type {string}
*/

export const apiAuthPrefix = "/api/auth" 
/** 
 * Default redirect path after loggin
 * @type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/api/auth" 
