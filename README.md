# My Cloudy Resume
My automated cloud-hosted approach to hosting my resume.

Implementing this with some twists: https://cloudresumechallenge.dev/docs/the-challenge/aws/.

See [this for more on the cloud challenge](./cloudResumeChallenge.md)

## Approach
1. `braheezy-resume` holds the repos for this effort
    - `frontend`: Where the resume is stored
    - `backend`: Backend code supporting API calls
    - `terraform`: Terraform to deploy front and backend
    - `resmark`: Tool to convert resume formats

2. Run GitHub action:
    - Spellcheck resume i.e. lint
    - Convert PDF and HTML outputs i.e. build
    - Deploy PDF to S3 bucket that only I can access
    - Deploy HTML to S3 bucket hosting static website
