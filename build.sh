#!/bin/bash

set -euo pipefail

GREEN='\e[0;32m'
BLUE='\e[0;34m'
END='\e[0m'

# Figure out API URL
API_URL=$(aws apigatewayv2 get-apis | jq -r '.Items[0].ApiEndpoint')

# Convert resume
sed -i "s/{URL}/${API_URL//\//\\/}/g" visitor_counter.js
./resumerk -jsFile visitor_counter.js -cssFile resume.css resume.md

echo -e "${GREEN}Successfully converted resume.md:${END}"
echo -e "\t${BLUE}✅ $(ls resume.pdf)${END}"
echo -e "\t${BLUE}✅ $(ls resume.html)${END}\n"
