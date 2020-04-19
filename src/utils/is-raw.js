import { isGithub } from ".";

const regex = /^https?:\/\/github.com\/([\w-]+)\/([\w-]+)\/raw/gm;

const isRaw = ( url ) => isGithub( url ) && !! url.match( regex )?.length

export default isRaw;