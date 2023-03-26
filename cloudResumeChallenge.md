# Certification
- [x] The resume needs to have the AWS Cloud Practitioner certification on it.

This was done in early 2022 and was a fairly straightforward study and exam session.

# HTML
- [x] The resume needs to be written in HTML.

I prefer Markdown and most places still require that you submit a PDF. I wanted a system dependency free way to convert my Markdown file and found nothing. I wrote [resmark](https://github.com/braheezy-resume/resmark) to solve that.

# CSS
- [x] The resume needs to be styled with CSS.

I took the CSS from [this guy's project](https://github.com/mikepqr/resume.md) and tweaked it a bit.

# Static Website
- [x] The resume should be deployed online as an Amazon S3 static website.

See the Terraform
# HTTPS
- [x] The S3 website URL should use HTTPS for security. Leverage Amazon CloudFront.

See the Terraform
# DNS
- [x] Point a custom DNS domain name to the CloudFront distribution, so the resume can be accessed at something like my-c00l-resume-website.com. Leverage Amazon Route 53.

See the Terraform
# Javascript
- [ ] The resume webpage should include a visitor counter that displays how many people have accessed the site. This will need to write a bit of Javascript to make this happen.

# Database
- [ ] The visitor counter will need to retrieve and update its count in a database somewhere. Leverage Amazon’s DynamoDB for this.

# API
- [ ] Do not communicate directly with DynamoDB from your Javascript code. Instead, create an API that accepts requests from the resume and communicates with the database. Leverage AWS’s API Gateway and Lambda services for this.

# Go
- [ ] Add Go code to the Lambda function to process the requests

# Tests
- [ ] Include some tests for the Go code.

# Infrastructure as Code
- [x] Do not configure resources (DynamoDB table, API Gateway, Lambda function, etc.), by clicking around in the AWS console. Use Terraform

See the Terraform
# Source Control
- [x] Create a GitHub repository for your backend code.

Done from the beginning. Never write software without source control...

# CI/CD (Back end)
- [ ] Use GitHub Actions to CI/CD the backend code

# CI/CD (Front end)
- [ ] Use GitHub Actions to CI/CD the resume and it's code

# Blog post
- [ ] Document the journey
