def match_skills(resume_skills, jd_skills):
    resume_set = set(resume_skills)
    jd_set = set(jd_skills)

    matched = list(resume_set & jd_set)
    missing = list(jd_set - resume_set)

    if not jd_set:
        score = 0
    else:
        raw_score = (len(matched) / len(jd_set)) * 100

        # Cap score for realism
        if raw_score > 90:
            score = 90
        else:
            score = int(raw_score)

    return score, matched, missing
