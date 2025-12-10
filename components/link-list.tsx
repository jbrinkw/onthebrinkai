type LinkItem = {
  label: string;
  href: string;
};

type LinkListProps = {
  links: LinkItem[];
};

export function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex flex-col gap-2 text-sm text-slate-200">
      {links.map((link) => (
        <li key={link.href} className="flex gap-2">
          <span className="font-semibold text-slate-300">{link.label}:</span>
          <a
            href={link.href}
            target="_blank"
          className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2 font-semibold break-all"
          rel="noopener noreferrer"
          >
            {link.href}
          </a>
        </li>
      ))}
    </ul>
  );
}

