import { usePage } from "../context/usePage";

export default function FooterNav() {
  const { goPrev, goNext, goHome } = usePage();

  return (
    <div className="footer">
      <button onClick={goPrev}>⬅</button>
      <button onClick={goHome}>🏠</button>
      <button onClick={goNext}>➡</button>
    </div>
  );
}
