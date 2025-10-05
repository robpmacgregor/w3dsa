export function hashFunction(value: string): number {
    return Array
    .from(value)
    .map(ch => ch.charCodeAt(0))
    .reduce((acc, next) => acc + next, 0) % 10;
}