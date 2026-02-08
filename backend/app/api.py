from fastapi import APIRouter, UploadFile, File, Form
from app.schemas import AnalyzeResponse
from app.core.pdf_extractor import extract_text_from_pdf
from app.core.text_cleaner import clean_text
from app.core.skill_extractor import extract_skills
from app.core.matcher import match_skills

router = APIRouter()

@router.post("/analyze", response_model=AnalyzeResponse)
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    # 🔒 SAFETY CHECK: Job Description must not be empty
    if not job_description or not job_description.strip():
        return AnalyzeResponse(
            matchScore=0,
            matchedSkills=[],
            missingSkills=[]
        )

    # 1. Extract text from PDF
    resume_text = extract_text_from_pdf(resume)

    # 2. Clean texts
    resume_text = clean_text(resume_text)
    jd_text = clean_text(job_description)

    # 3. Extract skills
    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    # 4. Match skills
    match_score, matched, missing = match_skills(resume_skills, jd_skills)

    return AnalyzeResponse(
        matchScore=match_score,
        matchedSkills=matched,
        missingSkills=missing
    )
