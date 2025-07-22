import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Fisher-Yates（Knuth）洗牌算法
export function shuffleArray<T>(array: T[]): T[] {
  // 创建一个原数组的副本
  const newArray = [...array];

  let currentIndex = newArray.length,
    randomIndex;

  // 当还剩下未洗牌的元素时
  while (currentIndex !== 0) {
    // 随机选择一个剩余的元素
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 元素交换
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray; // 返回打乱后的新数组
}

export function stringToHashCode(str: string) {
  let hash1 = 0;
  let hash2 = 0;
  const prime1 = 31; // 用于第一个哈希的乘数
  const prime2 = 37; // 用于第二个哈希的乘数，确保与prime1不同

  if (str.length === 0) return "0"; // 空字符串特殊处理

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);

    // 计算第一个哈希：使用 prime1 作为乘数
    hash1 = hash1 * prime1 + char;
    hash1 |= 0; // 强制转换为32位带符号整数

    // 计算第二个哈希：使用 prime2 作为乘数
    hash2 = hash2 * prime2 + char;
    hash2 |= 0; // 强制转换为32位带符号整数
  }

  // 将两个哈希值转换为无符号并取绝对值，然后转换为字符串
  const finalHash1 = Math.abs(hash1);
  const finalHash2 = Math.abs(hash2);

  // 将两个数字拼接起来，并控制长度在 10-12 位
  const part1 = String(finalHash1 % 1000000).padStart(6, "0"); // 取后6位，不足补0
  const part2 = String(finalHash2 % 1000000).padStart(6, "0"); // 取后6位，不足补0

  // 拼接并返回，确保长度为 12 位
  return (part1 + part2).substring(0, 12);
}
