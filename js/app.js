initNavListeners();

export const getSiteRoot = () => {
    const { origin, pathname } = window.location;
    
    const staticIdx = pathname.indexOf('/static/');
    if (staticIdx !== -1) {
      return origin + pathname.slice(0, staticIdx + 1);
    }
    
    const lastSlash = pathname.lastIndexOf('/');
    const afterLastSlash = pathname.slice(lastSlash + 1);
    
    if (afterLastSlash.includes('.')) {
      return origin + pathname.slice(0, lastSlash + 1);
    }
    
    return origin + pathname + (pathname.endsWith('/') ? '' : '/');
  };
  
  export const ROOT = getSiteRoot();