// Lets any component ask the Navbar to open one of its menus
// (desktop: the mega panel; mobile: the drawer with that section expanded).
export const OPEN_NAV_MENU_EVENT = "afaq:open-nav-menu";

export function openNavMenu(label: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<string>(OPEN_NAV_MENU_EVENT, { detail: label }));
}
