type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <article
      className={`mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </article>
  );
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split("\n\n");

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-semibold text-slate-900">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }

        if (trimmed.startsWith("**") && trimmed.includes(":**")) {
          const [label, ...rest] = trimmed.split(":**");
          return (
            <p key={index} className="leading-relaxed text-slate-600">
              <strong className="text-slate-800">{label.replace(/\*\*/g, "")}:</strong>
              {rest.join(":**")}
            </p>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index} className="list-disc space-y-2 pl-6 text-slate-600">
              {items.map((item, i) => (
                <li key={i}>{item.replace("- ", "")}</li>
              ))}
            </ul>
          );
        }

        if (trimmed.startsWith("|")) {
          const rows = trimmed.split("\n").filter((row) => !row.includes("---"));
          return (
            <div key={index} className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 text-sm">
                <tbody>
                  {rows.map((row, i) => {
                    const cells = row.split("|").filter(Boolean);
                    const Tag = i === 0 ? "th" : "td";
                    return (
                      <tr key={i} className={i === 0 ? "bg-slate-50" : ""}>
                        {cells.map((cell, j) => (
                          <Tag
                            key={j}
                            className="border border-slate-200 px-4 py-2 text-left text-slate-600"
                          >
                            {cell.trim()}
                          </Tag>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }

        return (
          <p key={index} className="leading-relaxed text-slate-600">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
