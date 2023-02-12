import Link from 'next/link';

export default function Other() {
  return (
    <main>
      <div>別ページ</div>
      <Link href={'/'}>トップページへ移動</Link>
    </main>
  );
}
