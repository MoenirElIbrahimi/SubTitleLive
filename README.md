# SubTitleLive
 
<H1>README</H1>

## Steps to use:

1. Clone the repository.
2. Open the terminal in the cloned repository.
3. Execute these commands:
   ```
   cd deepgram-proxy
   npm init -y
   npm install express body-parser cors node-fetch@2 dotenv
   ```
4. Add your DeepGram and DeepL API keys as DEEP_GRAM_KEY and DEEPL_API_KEY in .env.

## To run:
1. Execute these commands:
   ```
   cd deepgram-proxy
   node index.js
   ```
2. Open the index.html from files: 
<img src="https://github.com/user-attachments/assets/8b11011c-aa98-4408-b967-039278a8d646" width="500">

# TRANSFER 

## Introduction
In today’s globalized and digital-first world, effective communication across language barriers is more critical than ever. SubTitleLive addresses this need by offering a real-time transcription and translation solution designed for tutoring and interviews.
SubTitleLive is a project that combines speech recognition, natural language processing (NLP) to generate subtitles in multiple language. By bridging the gap between languages and accessibility, it enables tutor’s and students alike of international to reach diverse audiences effortlessly and inclusively.
Key features of SubTitleLive include:
•	Real-Time Transcription: High-speed transcription of spoken content.
•	Multi-Language Translation: Realtime translation into multiple languages, enabling global communication.
SubTitleLive aims to bridge the gap between language barriers in different industries. Like education, corporate communication, and entertainment. SubTitleLive is designed to be a user-friendly solution that enhances accessibility.
This document outlines the architecture, functionality, and operational guidelines for SubTitleLive, offering as a guide for its transfer and implementation.
## System Architecture
### Overview
SubTitleLive is designed to prioritize scalability and reliability. The system is composed of the following core components:
•	Speech Recognition Module: Converts spoken language into text in real-time.
•	Translation Module: Uses advanced NLP algorithms to translate text into multiple languages.
•	API Layer: Facilitates integration with external platforms and tools.
•	User Interface: A web-based control panel for managing settings, monitoring performance, and customizing output.
### Technology Stack
•	Frontend: HTML 5 & CSS
•	Backend: Node.js
•	Speech Recognition: Powered by Deepgram.
•	Translation: Powered by DeepL and its translation model.
### Data Flow
1.	Audio input is received via microphone.
2.	The Deepgram transcribes the audio to text.
3.	The text is passed to the DeepL translation model, where it is translated into the selected languages.
4.	Output and input are displayed on the source and target language boxes.
Implementation Guidelines
### Prerequisites
There are a few tools you will need to use this software:
•	Development Tools: A text-editor or IDE of choice (e.g., Visual Studio Code).
•	APIs and Services: API keys for integrated services (Deepgram, DeepL).
### Deployment Steps
Steps to use:
1.	Clone the repository.
2.	Open the terminal in the cloned repository.
3.	Execute these commands:
 
4.	Add your DeepGram and DeepL API keys as DEEP_GRAM_KEY and DEEPL_API_KEY in .env.
To run:
1.	Execute these commands:
  
2.	Open the index.html from files:
 
## Operational Guidelines
### Troubleshooting
If you’re having problems with the translation here are a few possibilities that could solve this error:
•	Ensure node is running.
•	Ensure the API-keys being used in the .env are the correct.
In case for further testing the DeepL API key can be tested within postman using post and URL like this (Make sure to replace the authorization/API-key with yours!):
 
Figure 2: Example of URL within postman
After clicking “Send” it will produce a JSON response like this (Figure 3) which can then be used by the application to display the translated response.
 
Figure 3: DeepL API JSON response example
(dark-rocket-8324, n.d.) 
 
## Appendix
References
Figure 1 File structure of SubTitleLive	3
Figure 2 Example of url within postman	4

## Bibliography
dark-rocket-8324. (sd). Postman. Opgehaald van Postman: https://www.postman.com/dark-rocket-8324-1/ifcc/documentation/yr8dut8/deepl?entity=request-9573889-b96426b8-ce8f-40a4-9966-38d499b87114

## Contact Information
Fokker, Don: 1190558@student.roc-nijmegen.nl
Reijnen, Iris: 1203136@student.roc-nijmegen.nl
Ibrahimi, Moenir el: 1186234@student.roc-nijmegen.nl
Pektas, Berkay: 1197777@student.roc-nijmegen.nl
