/** 
 * arrray of routes that is accessible to the public
 * there auth can't use authentication 
 * @type {string[]}
*/

export const publicRoute = [
    "/"
]
/** 
 * arrray of routes that is accessible to the aut
 * there auth can't use authentication 
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
