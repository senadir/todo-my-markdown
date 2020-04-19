const regex = /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/gm;

const isUrl = ( url ) => !! url.match( regex )?.length;

export default isUrl;
