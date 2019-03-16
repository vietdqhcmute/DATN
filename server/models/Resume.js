Resume ={
  title: String,
  summary: String,
  githubURL: String,
  linkedinURL: String,
  website: String,
  experience: [],
  education: [],
  project: [],
  skill: [],
  created: {
    type: Date,
    default: Date.now
  }
};
module.exports = Resume;
