import { useEffect, useState } from "react";

const ROLES = ["Network Support Engineer", "IT & Systems Support", "MikroTik & Cisco Specialist"];

export function RoleTyping() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(ROLES[0]);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start after hydration so SSR renders the full first role (good for SEO/no flash).
    setStarted(true);
    setText("");
  }, []);

  useEffect(() => {
    if (!started) return;
    const full = ROLES[index];
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % ROLES.length);
          return;
        }
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 2200 : cleared ? 300 : deleting ? 32 : 62,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, started]);

  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em]">
      <span className="role-shimmer">{text || "\u00A0"}</span>
      <span className="caret-blink text-primary">|</span>
    </span>
  );
}
