import json
from pathlib import Path

SKILLS_PATH = Path("data/skills.json")

def load_skills():
    with open(SKILLS_PATH, "r") as f:
        return json.load(f)

SKILLS = load_skills()

def extract_skills(text: str):
    found = set()
    for skill in SKILLS:
        if skill.lower() in text:
            found.add(skill)
    return list(found)
