import 'next';

declare module 'next' {
  // 全ページ共通で使用するプロパティ
  export type PageProps = {
    withModal?: boolean;
  };
}
