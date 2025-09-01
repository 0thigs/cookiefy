import React from 'react';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <GluestackUIProvider mode="light">
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
