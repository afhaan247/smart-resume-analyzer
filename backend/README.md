# Smart Resume Analyzer

A full-stack web application that analyzes a candidate’s resume against a given job description and provides a realistic matching score along with matched and missing skills.

This project focuses on **clean UI, explainable logic, and real-world behavior**, similar to Applicant Tracking Systems (ATS).

---

## 🚀 Features

- Upload resume in **PDF format**
- Paste **Job Description** for comparison
- Resume ↔ Job Description skill matching
- Realistic **matching score** (no fake 100%)
- Clearly shows:
  - Matched skills
  - Missing skills
- Defensive validation (JD required)
- Clean, mobile-friendly UI

---

## 🧠 How It Works

1. User uploads a resume (PDF)
2. User pastes a job description
3. Backend:
   - Extracts text from PDF
   - Cleans and normalizes text
   - Extracts skills from both resume and JD
   - Compares skills and calculates a match score
4. Frontend displays results visually

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- CSS Modules (no Tailwind)
- React Router
- Fetch API

### Backend
- Python
- FastAPI
- Uvicorn
- pdfplumber
- Rule-based NLP logic

---

## 📁 Project Structure

### Frontend
