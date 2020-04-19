import isUrl from './is-url';

const regex = /([\w-]+)\.md(#[\w-]+)?$/gm;

const isMarkdown = ( url ) => isUrl( url ) && !! url.match( regex )?.length;

export default isMarkdown;
