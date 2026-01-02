// Parses chat text into structured message objects
export function parseChatText(raw) {
  const lines = raw.split(/\r?\n/);
  const result = [];

  let currentSender = null;
  let buffer = [];

  function flush() {
    if (!currentSender) return;
    const text = buffer.join("\n").trim();
    if (!text) return;

    result.push({
      type: "message",
      sender: currentSender,
      text,
    });

    buffer = [];
  }

  for (const line of lines) {
    // Format date line
    const dateMatch = line.match(/^\*(.+)\*$/);
    if (dateMatch) {
      flush();
      result.push({
        type: "date",
        text: dateMatch[1].trim(),
      });
      continue;
    }

    // Format typer line
    const speakerMatch = line.match(/^(.+?):\s*$/);
    if (speakerMatch) {
      flush();
      currentSender = speakerMatch[1].trim();
      continue;
    }

    // Fprmat message line
    buffer.push(line);
  }
  flush();

  return result;
}