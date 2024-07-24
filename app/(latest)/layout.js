export default function ArchiveLayout({ features, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{features}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
