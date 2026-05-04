import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

type RichTextProps = {
  content: any; // Contentful Rich Text document
};

export default function RichText({ content }: RichTextProps) {
  if (!content || content.nodeType !== "document") return null;

  const options = {
    // Handle bold text
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    },
    // Handle paragraphs
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
    },
    // Convert line breaks (\n) to <br />
    renderText: (text: string) =>
      text
        .split("\n")
        .flatMap((line, i) => (i > 0 ? [<br key={i} />, line] : line)),
  };

  return <>{documentToReactComponents(content, options)}</>;
}
