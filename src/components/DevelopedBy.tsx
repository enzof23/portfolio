export default () => {
  return (
    <div className="flex items-center justify-center p-1 pb-2 w-full h-full">
      <span className="font-mono text-neutral-10 text-xs text-center">
        Design inspired by{" "}
        <a
          href="https://github.com/flamrdevs"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          flamrdevs
        </a>
      </span>
    </div>
  );
};
