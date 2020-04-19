import { isGithub } from '.';

const regex = /^https?:\/\/github.com\/([\w-]+)\/([\w-]+)\/blob/gm;

const isBlob = ( url ) => isGithub( url ) && !! url.match( regex )?.length;

export default isBlob;
