/**
 * Routing utilities
 * Centralized routing logic and helpers
 */

export const getActiveRoute = (currentPath: string, routePath: string): boolean => {
  return currentPath === routePath;
};

export const normalizeRoute = (route: string): string => {
  // Ensure route starts with /
  if (!route.startsWith("/")) {
    return `/${route}`;
  }
  return route;
};

export const isInternalLink = (href: string): boolean => {
  return href.startsWith("/") || href.startsWith("#");
};

export const replaceHistoryState = (
  path: string,
  state?: Record<string, unknown>
): void => {
  if (typeof window !== "undefined") {
    window.history.replaceState(state || {}, "", path);
  }
};

export const navigateTo = (path: string): void => {
  if (typeof window !== "undefined") {
    window.location.href = path;
  }
};
