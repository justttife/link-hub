// Edit this block to make the page yours.
const profile = {
  name: "Alex Rivera",
  bio: "Product designer and occasional writer. I make small tools and write about how they work.",
};

const links = [
  { label: "Portfolio", url: "https://example.com/portfolio" },
  { label: "Newsletter", url: "https://example.com/newsletter" },
  { label: "GitHub", url: "https://github.com/your-username" },
  { label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const domain = (url) => new URL(url).hostname.replace(/^www\./, "");

export default function App() {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-md px-6 py-16 sm:py-24">
      <header className="mb-12">
        <div
          aria-hidden="true"
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-raised font-serif text-xl"
        >
          {initials(profile.name)}
        </div>
        <h1 className="font-serif text-4xl leading-tight">{profile.name}</h1>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">{profile.bio}</p>
      </header>

      <nav aria-label="Links">
        <ul className="border-t border-line">
          {links.map(({ label, url }) => (
            <li key={url} className="border-b border-line">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 flex items-baseline justify-between gap-4 rounded-md px-3 py-5 transition-colors hover:bg-raised focus-visible:bg-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              >
                <span className="text-lg font-medium">
                  {label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
                <span className="truncate text-sm text-muted">{domain(url)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
