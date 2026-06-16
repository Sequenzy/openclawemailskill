import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/openclaw-email/SKILL.md",
  "skills/openclaw-email/agents/openai.yaml",
  "skills/openclaw-email/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/openclaw-email/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: openclaw-email\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add openclaw-email")) throw new Error("Missing install shortcut");
console.log("openclawemailskill.com ok");
