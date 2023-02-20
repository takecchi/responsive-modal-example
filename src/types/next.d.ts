import { NextPage, NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

declare module 'next' {
  export type PageProps = {
    title?: string;
  };
  type NextPageWithLayout<P = Record<never, never>, IP = P> = NextPage<
    P,
    IP
  > & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
}
declare module 'next/app' {
  type AppPropsWithLayout<P = Record<never, never>> = AppProps<P> & {
    Component: NextPageWithLayout<P>;
  };
}
