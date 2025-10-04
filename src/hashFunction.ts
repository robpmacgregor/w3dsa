export function hashFunction(value: string): number {
    let sum: number = 0;
    Array.from(value).forEach(ch => sum += ch.charCodeAt(0));
    return sum % 10;
}