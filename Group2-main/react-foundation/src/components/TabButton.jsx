export default function TabButton({ children }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
