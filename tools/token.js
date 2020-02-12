import ls from "local-storage";


const TOKEN_NAME = 'x-token';

/** @description To get the token from browser's localStorage.
 *  @return {string}
 */
const get = () => {
  return (ls.get(TOKEN_NAME));
};

/** @description To set the token from browser's localStorage.
 *  @param {string} token The token string.
 *  @return {boolean} Returns whether the action succeeded; otherwise, an error was thrown by the browser when trying to persist the value.
 */
const set = (token) => {
  return(ls.set(TOKEN_NAME, token));
};

/** @description To clear the token from browser's localStorage.
 *  @return {boolean} Returns true if the property was successfully deleted, and false otherwise.
 */
const clear = () => {
  return(ls.remove(TOKEN_NAME));
};

export default{
  get,
  set,
  clear
};