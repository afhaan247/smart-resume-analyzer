const API_URL = "http://127.0.0.1:8000/analyze";

export async function analyzeResume(file, jobDescription) {
  const formData = new FormData();

  formData.append("resume", file);
  formData.append("job_description", jobDescription);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Analysis failed");
  }

  return response.json();
}
