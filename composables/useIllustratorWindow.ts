// Shared state so the window survives Nuxt navigation
export const useIllustratorWindow = () => {
  const isOpen = useState<boolean>('illustratorOpen', () => false);
  const isMinimized = useState<boolean>('illustratorMinimized', () => false);

  const openWindow   = () => { isOpen.value = true;  isMinimized.value = false; };
  const closeWindow  = () => { isOpen.value = false; isMinimized.value = false; };
  const minimizeWindow = () => { isMinimized.value = true; };
  const restoreWindow  = () => { isMinimized.value = false; };

  return { isOpen, isMinimized, openWindow, closeWindow, minimizeWindow, restoreWindow };
};
