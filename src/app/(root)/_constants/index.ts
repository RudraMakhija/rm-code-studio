import { Monaco } from "@monaco-editor/react";
import { Theme } from "../../../types";

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" },
    monacoLanguage: "javascript",
    defaultCode: `const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * n)); // Squares
console.log(numbers.filter(n => n % 2 === 0)); // Even numbers
console.log(numbers.reduce((acc, curr) => acc + curr)); // Sum`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * n)); // Squares
console.log(numbers.filter(n => n % 2 === 0)); // Even numbers
console.log(numbers.reduce((acc, curr) => acc + curr)); // Sum`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `numbers = [1, 2, 3, 4, 5]
print([n * n for n in numbers])  # Squares
print([n for n in numbers if n % 2 == 0])  # Even numbers
print(sum(numbers))  # Sum`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
      int[] numbers = {1, 2, 3, 4, 5};
      System.out.println(java.util.Arrays.toString(java.util.Arrays.stream(numbers).map(n -> n * n).toArray())); // Squares
      System.out.println(java.util.Arrays.toString(java.util.Arrays.stream(numbers).filter(n -> n % 2 == 0).toArray())); // Even numbers
      System.out.println(java.util.Arrays.stream(numbers).sum()); // Sum
  }
}`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main
import "fmt"
func main() {
  numbers := []int{1, 2, 3, 4, 5}
  fmt.Println(numbers) // Original numbers
  fmt.Println(mapSquares(numbers)) // Squares
  fmt.Println(filterEven(numbers)) // Even numbers
  fmt.Println(sum(numbers)) // Sum
}
func mapSquares(nums []int) []int { 
  squares := []int{}
  for _, n := range nums { squares = append(squares, n * n) }
  return squares
}
func filterEven(nums []int) []int { 
  evens := []int{}
  for _, n := range nums { if n % 2 == 0 { evens = append(evens, n) } }
  return evens
}
func sum(nums []int) int {
  total := 0
  for _, n := range nums { total += n }
  return total
}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    println!("{:?}", numbers.iter().map(|&n| n * n).collect::<Vec<_>>()); // Squares
    println!("{:?}", numbers.iter().filter(|&&n| n % 2 == 0).collect::<Vec<_>>()); // Even numbers
    println!("{}", numbers.iter().sum::<i32>()); // Sum
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <numeric>
int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    for (int n : numbers) std::cout << n << " "; std::cout << "\n"; // Original numbers
    for (int n : numbers) std::cout << n * n << " "; std::cout << "\n"; // Squares
    for (int n : numbers) if (n % 2 == 0) std::cout << n << " "; std::cout << "\n"; // Even numbers
    std::cout << std::accumulate(numbers.begin(), numbers.end(), 0); // Sum
    return 0;
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;
class Program {
    static void Main() {
        int[] numbers = {1, 2, 3, 4, 5};
        Console.WriteLine(string.Join(" ", numbers)); // Original numbers
        Console.WriteLine(string.Join(" ", numbers.Select(n => n * n))); // Squares
        Console.WriteLine(string.Join(" ", numbers.Where(n => n % 2 == 0))); // Even numbers
        Console.WriteLine(numbers.Sum()); // Sum
    }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `numbers = [1, 2, 3, 4, 5]
puts numbers.join(' ') # Original numbers
puts numbers.map { |n| n * n }.join(' ') # Squares
puts numbers.select { |n| n.even? }.join(' ') # Even numbers
puts numbers.sum # Sum`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `let numbers = [1, 2, 3, 4, 5]
print(numbers) // Original numbers
print(numbers.map { $0 * $0 }) // Squares
print(numbers.filter { $0 % 2 == 0 }) // Even numbers
print(numbers.reduce(0, +)) // Sum`,
  },
};


export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

export const THEME_DEFINITONS = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
      base: themeData.base,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};