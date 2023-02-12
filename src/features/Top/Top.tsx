import Link from 'next/link';

const TopTemplate = () => {
  return (
    <>
      <h1>モーダル+url+レスポンシブサンプル</h1>
      <Link href={'/other'}>別ページへ移動</Link>
    </>
  );
};
export default TopTemplate;
