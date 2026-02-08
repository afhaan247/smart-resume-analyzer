from pydantic import BaseModel
from typing import List

class AnalyzeResponse(BaseModel):
    matchScore: int
    matchedSkills: List[str]
    missingSkills: List[str]
