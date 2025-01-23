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
   ```
   cd deepgram-proxy
   npm init -y
   npm install express body-parser cors node-fetch@2 dotenv
   ```
4.	Add your DeepGram and DeepL API keys as DEEP_GRAM_KEY and DEEPL_API_KEY in .env.
To run:
1.	Execute these commands:
   ```
   cd deepgram-proxy
   node index.js
   ```
2.	Open the index.html from files:
<img src="https://github.com/user-attachments/assets/8b11011c-aa98-4408-b967-039278a8d646" width="500">  
*Figure 1: File structure of SubTitleLive*  
## Operational Guidelines
### Troubleshooting
If you’re having problems with the translation here are a few possibilities that could solve this error:  
•	Ensure node is running.  
•	Ensure the API-keys being used in the .env are the correct.  
In case for further testing the DeepL API key can be tested within postman using post and URL like this (Make sure to replace the authorization/API-key with yours!):  
<img src="https://github.com/user-attachments/assets/a89fde25-af6c-4b2b-b1af-5a7140170f75" width="500">  
*Figure 2: Example of URL within postman*  
After clicking “Send” it will produce a JSON response like this (Figure 3) which can then be used by the application to display the translated response.  
<img src="https://github.com/user-attachments/assets/fa2894ac-6178-4713-bc1f-3a3da05dd26d" width="500">  
*Figure 3: DeepL API JSON response example*  
(dark-rocket-8324, n.d.) 
 
## Appendix
### References  
Figure 1 File structure of SubTitleLive  
Figure 2 Example of url within postman

### Bibliography
dark-rocket-8324. (sd). Postman. Opgehaald van Postman: https://www.postman.com/dark-rocket-8324-1/ifcc/documentation/yr8dut8/deepl?entity=request-9573889-b96426b8-ce8f-40a4-9966-38d499b87114

### Contact Information
Fokker, Don: 1190558@student.roc-nijmegen.nl  
Reijnen, Iris: 1203136@student.roc-nijmegen.nl  
Ibrahimi, Moenir el: 1186234@student.roc-nijmegen.nl  
Pektas, Berkay: 1197777@student.roc-nijmegen.nl

# Technical Design
## Architecture
The architecture of SubTitleLive follows a classic client-server model with three main components:
•	Frontend: The client interface developed using HTML, CSS, and JavaScript, runs in the user's browser.
•	Backend: A server-side API built with Node.js and Express.js, responsible for speech recognition and translation.
•	External Services: Integration with the Deepgram API for real-time speech recognition and the DeepL API for translations.
## Technologies
SubTitleLive utilizes various programming languages, frameworks, and tools:
### Frontend:
•	HTML/CSS: For designing the user interface.  
•	JavaScript: For dynamic interaction and API communication.
### Backend:
•	Node.js: A JavaScript runtime for server-side logic.  
•	Express.js: A framework for building API endpoints.
### External APIs:
•	Deepgram API: For real-time speech recognition.  
•	DeepL API: For text translation into multiple languages.
### Other Tools:
•	Body-parser: Middleware for processing incoming JSON data.  
•	CORS: For managing Cross-Origin Resource Sharing.  
•	Visual Studio Code: For HTML/CSS and JavaScript code development.
## Database Design
This project does not utilize a database, as it relies directly on the Deepgram API for real-time speech recognition and the DeepL API for text translation.  
Initially, an attempt was made to integrate an LLM (Ollama). However, this proved to be complex and unfeasible, leading to the decision to use the Deepgram and DeepL APIs.
## Integrations
The integration of SubTitleLive with external APIs has been designed to ensure smooth communication and efficient data processing.
### Communication with External APIs:
•	Deepgram API: Utilizes WebSockets for real-time audio processing. The client streams audio directly to Deepgram.  
•	DeepL API: Uses REST API with POST requests for text translation. Headers include an authorization key for access.
### Interaction Steps:
1.	The client sends audio to the backend via WebSockets.
2.	The backend forwards the audio to Deepgram.
3.	Deepgram returns the text as JSON.
4.	The backend sends the text to the DeepL API for translation.
5.	The translated text is returned to the client.
## Security and Performance
To ensure the safety and performance of SubTitleLive, several measures have been implemented.
### Security
The system's security begins with the careful handling of API keys. These keys, essential for accessing Deepgram and DeepL services, are securely stored in environment variables within a .env file. This ensures they are not exposed in the source code, protecting them from unauthorized access.  
Additionally, a strict CORS (Cross-Origin Resource Sharing) policy has been implemented. This limits backend access to trusted domains, reducing the risk of attacks from unknown sources.
To ensure only valid and secure data is processed, all incoming requests are thoroughly validated. The backend checks if requests meet the required parameters before accepting them.
### Performance
Performance focuses on real-time processing. By leveraging WebSockets, latency in speech recognition is minimized. This protocol enables continuous and efficient audio data transfer between the client and server, providing users with near-instant feedback.  
With this approach, SubTitleLive combines a secure environment with smooth and fast performance, making it an essential tool for breaking language barriers in real-time.

# Functional Design
## The purpose of the product
The product is designed to make communication easier by translating spoken words and displaying them as subtitles on a screen. This is particularly useful for situations where foreign teachers or students need to communicate effectively. By showing subtitles in a language their audience understands, the product bridges language barriers, helps everyone feel included and better understanding in real-time classroom or meeting environments.
## Functionalities
1.	Language Selection:
•	Users can select the source language (the language being spoken) and the target language (the language for the subtitles).  
•	The product supports a wide range of languages to support diverse users.
2.	Speech Recognition and Translation:
•	The user speaks into the microphone, and the spoken words are processed in real time.  
•	The product uses advanced speech-to-text technology to convert spoken words into text in the source language.  
•	The text is then translated into the target language using a machine translation engine.
3.	Subtitle Display:
•	Both the original and translated text are displayed on the screen simultaneously.  
•	The text appears in two boxes: one for the source language (original spoken words) and one for the target language (translated subtitles).  
•	A delay of a few seconds may occur due to processing, depending on the speed of the translation and network conditions.
## User interface
The interface is designed with simplicity in mind. A single page displays all the necessary tools and outputs. At the top of the screen, users can select their source and target languages from dropdown menus.
The translated content is displayed in two clearly labelled boxes positioned side-by-side. One box shows the original text as spoken by the user, while the other shows the translated text. The connection to the translation backend is also clearly indicated, ensuring users know when the system is actively translating. See in figure 1. The overall layout prioritizes clarity, with minimal distractions, making the product accessible for users of all technical skill levels.  
 <img src="https://github.com/user-attachments/assets/994e1872-e2a1-4d76-891f-4142459507fb" width="500">  
*Figure 1: Frontpage of SubTitleLive*
## Preconditions
To ensure the product functions effectively, the following preconditions must be met:
1.	Hardware Requirements:
•	A high-quality microphone is essential for accurate speech recognition.  
•	The device running the application must have a stable internet connection for real-time translation.
2.	Environmental Requirements:
•	The product works best in quiet environments to minimize background noise interference.  
•	Users should speak clearly and at a moderate pace for optimal speech recognition.
3.	Delay and Processing Time:
•	A short delay is expected between speaking and the text appearing on the screen due to the time needed for processing speech recognition and translation.  
•	The delay may vary depending on the complexity of the language and network conditions.
