import { isGithub } from '.';

const regex = /^https?:\/\/github.com\/([\w-]+)\/([\w-]+)\/tree/gm;

const isTree = ( url ) => isGithub( url ) && !! url.match( regex )?.length;

export default isTree;
