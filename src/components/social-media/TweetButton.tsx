interface TweetButtonProps {
  tweetText: string;
  buttonText: string;
}

/**
 * https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
 * @param tweetText is the default text sent in the tweet
 * @param buttonText is the display text of the button
 * @returns a button which takes the user to twitter so they can tweet
 */
const TweetButton: React.FC<TweetButtonProps> = ({ tweetText, buttonText }) => {
  return (
    <main>
      <a
        href={`https://twitter.com/intent/tweet?text=${tweetText}`}
        id="tweet-quote"
        className="inline-flex placement-items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.04128 17.7861C4.53883 17.7861 2.21078 17.0602 0.25 15.8165C0.596807 15.857 0.949401 15.8773 1.30683 15.8773C3.38266 15.8773 5.29282 15.1764 6.80944 14.0003C4.87 13.9646 3.23461 12.6968 2.67056 10.9547C2.94041 11.0059 3.21803 11.0338 3.50342 11.0338C3.90767 11.0338 4.2993 10.9798 4.67133 10.8796C2.64431 10.4775 1.11689 8.70468 1.11689 6.5808C1.11689 6.56156 1.11689 6.54327 1.11792 6.52489C1.71505 6.85368 2.39787 7.05133 3.12448 7.07347C1.93514 6.28783 1.15299 4.94488 1.15299 3.42361C1.15299 2.62053 1.37213 1.86754 1.75297 1.21971C3.93781 3.87277 7.20298 5.61776 10.885 5.80097C10.8091 5.47987 10.7701 5.14535 10.7701 4.80118C10.7701 2.38039 12.7543 0.416626 15.2012 0.416626C16.4753 0.416626 17.6267 0.949734 18.4351 1.80197C19.4444 1.60535 20.392 1.23997 21.2484 0.737722C20.9172 1.76154 20.2148 2.62053 19.3002 3.1633C20.1963 3.0572 21.0506 2.82194 21.8444 2.47297C21.2512 3.35223 20.4993 4.12445 19.6342 4.7433C19.643 4.93129 19.6469 5.12031 19.6469 5.31018C19.6469 11.1042 15.1905 17.7861 7.04128 17.7861Z"
            fill="#1DA1F2"
          ></path>
        </svg>
        &nbsp; {buttonText}
      </a>
    </main>
  );
};

export default TweetButton;
