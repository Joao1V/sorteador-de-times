export function processPlayersList(text: string): string[] {
  return text
    .split('\n')
    .map(line => line.trim())
    .map(line => line.replace(/^\d+[\s.)-]*/, '').trim())
    .filter(line => line.length > 0);
}