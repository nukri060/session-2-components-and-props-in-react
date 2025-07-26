export function Testimonial({ src, alt, quote, author }) {
  return (
    <div className="testimonial">
      <img src={src} alt={alt} />
      <blockquote>{quote}</blockquote>
      <p>- {author}</p>
    </div>
  );
}
