import TweetButton from '../social-media/TweetButton';
import QuoteCard from './QuoteCard';

export default function QuoteView() {
  return (
    <main className="flex flex-col items-center justify-between">
      <QuoteCard />
      <br />
      <div className="relative flex place-items-center">
        <div className="grid gap-5 text-center lg:grid-cols-2 lg:text-left">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            id="new-quote"
          >
            Generate New Quote!
          </button>
          <TweetButton
            tweetText='"Quote Coming Soon! -Author"'
            buttonText="Tweet Quote!"
          />
        </div>
      </div>
    </main>
  );
}
