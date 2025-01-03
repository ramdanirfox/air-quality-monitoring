export function randomizeValue(value: number, scale: number): number {
    const randomizedValue = value + (Math.random() - 0.5) * scale;
    return randomizedValue;
}