const asset = (path) => `${process.env.PUBLIC_URL || ''}/${path}`;

let resumeData = {
  "name": "Matthew Wing",
  "portrait": asset("images/happy-matt.jpg"),
  "role": "Full Stack Developer",
  "roleDescription": "I build applications with PHP, JavaScript, and MySQL, and I am actively going deeper on Python and React.",
  "email": "mattdwing@gmail.com",
  "skills": ["JavaScript", "PHP", "Python", "HTML", "CSS", "Linux", "jQuery", "MySQL"],
  "socialLinks": [
    {
      "name": "linkedin",
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/matthew-wing-494b1b139/"
    },
    {
      "name": "github",
      "label": "GitHub",
      "url": "https://github.com/mwing728"
    }
  ],
  "aboutme": "I build applications with PHP, JavaScript, and MySQL. Mentors have helped me write cleaner code, and I am actively relearning Python and React so I can take on a wider range of work.",
  "work": [
    {
      "CompanyName": "Lawyer.com",
      "CompanyLogo": asset("images/lawyercom-logo.jfif"),
      "specialization": "Full Stack Developer",
      "MonthStarted": "Feb 2020",
      "YearOfLeaving": "Present",
      "Achievements": [
        "Develop and troubleshoot code on the LAMP stack (Linux, Apache, MySQL, PHP).",
        "Build responsive interfaces with HTML, CSS, JavaScript, and jQuery, connected to MySQL through PHP PDO.",
        "Use the Twilio API (PHP and JavaScript) so consumers and legal professionals can call each other from the product.",
        "Add real-time updates and notifications with the Pusher API (JavaScript).",
        "Ship efficient, scalable products that follow the direction set by management."
      ]
    }
  ],
  "portfolio": [
    {
      "name": "YammyFood",
      "logo": asset("images/portfolio/yammy-logo-mark.jpg"),
      "demo": "https://yammyfood.vercel.app",
      "githubLink": "https://github.com/mwing728/YammyFood",
      "tags": ["TypeScript", "Supabase", "Vercel"],
      "description": "A mobile web app for a live sushi-eating contest. People join from a shared link, tally their own score, and watch a live leaderboard."
    },
    {
      "name": "Study Law",
      "logo": asset("images/portfolio/studylaw-logo.png"),
      "demo": "https://studylaw.ai",
      "githubLink": "https://github.com/mwing728/studylaw_ai",
      "tags": ["PHP", "SQLite", "AI"],
      "description": "A legal news site built with PHP and SQLite, hosted on GoDaddy. AI models write the briefs and short summaries."
    }
  ]
}

export default resumeData
