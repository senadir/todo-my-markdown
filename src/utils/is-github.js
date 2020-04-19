import isUrl from "./is-url";

const isGithub = (url) => isUrl(url) && new URL( url ).hostname === 'github.com';

export default isGithub;