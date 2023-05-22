export default function QuoteCard() {
  return (
    <main className="max-w-sm rounded overflow-hidden shadow-lg" id="quote-box">
      <div className="px-6 py-4">
        <p
          className="text-gray-700 text-base"
          id="text"
          data-testid="quote-text"
        >
          Quote Here Soon!
        </p>
      </div>
      <div className="font-bold text-xl mb-2" id="author">
        -Author
      </div>
    </main>
  );
}
