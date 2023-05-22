import QuoteView from '@/components/quote';
import Header from '@/components/app/Header';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <QuoteView />
    </main>
  );
}
