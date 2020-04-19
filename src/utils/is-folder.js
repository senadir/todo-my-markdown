import isGithub from './is-github';

const regex = /^https?:\/\/github.com(\/[\w-]+)+\/?$/gm;

const isFolder = ( url ) => isGithub( url ) && !! url.match( regex )?.length;

export default isFolder;
