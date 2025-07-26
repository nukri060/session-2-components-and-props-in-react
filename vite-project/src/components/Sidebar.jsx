export function Sidebar({ logo_src, logo_alt, side_title, side_subtitle, side_text }) {
  return (
    <aside className="sidebar">
      <h2>{side_title}</h2>
      <img src={logo_src} alt={logo_alt} />
      <p>{side_subtitle}</p>
      <p>{side_text}</p>
    </aside>
  );
}
