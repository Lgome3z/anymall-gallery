export default function TopBar() {
  return (
    <header className="bg-white px-4 py-3 md:px-8 border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center">
        <img
          src="/images/logo.png"
          alt="AnyMall"
          className="h-9 w-auto"
        />
      </div>
    </header>
  );
}