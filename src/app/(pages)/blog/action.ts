"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getBlogPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return { error: "Post not found" };
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      content,
    };
  } catch (error) {
    console.error("Error loading blog post:", error);
    return { error: "Failed to load post" };
  }
}
