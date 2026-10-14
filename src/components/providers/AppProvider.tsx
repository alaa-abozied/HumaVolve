import React from 'react';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Compose global providers here (router, store, i18n, theme, etc.)
  return <>{children}</>;
};
