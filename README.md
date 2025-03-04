# Chatbots-are-fun
# 🤖 AI Chatbot Therapist

An intelligent chatbot designed to act as a virtual therapist, providing emotional support and mental wellness conversations using AI-powered natural language processing. ✨

     Features
✅ Conversational AI – Engages in natural conversations with users.  
✅ Therapeutic Support – Offers supportive and empathetic responses.  
✅ Emotion Detection – Recognizes user emotions and tailors responses.  
✅ Interactive UI – Modern chat interface built with HTML, CSS & JS.  
✅ Machine Learning – Uses NLP and fuzzy matching for response accuracy.  

---
 🛠 Tech Stack
🔹 Frontend: HTML, CSS, JavaScript  
🔹 Backend: Python (Flask)  
🔹 Data Storage: JSON (intents.json)  
🔹 AI Processing: Fuzzy Matching & NLP  

---
 Project Structure
```
📦 AI Chatbot Therapist
├── 📁 static
│   ├── 📄 b.css        # Styles for chatbot UI
│   ├── 📄 b.js         # Handles user input & fetches responses
├── 📁 templates
│   ├── 📄 b.html       # Chatbot UI template
├── 📄 app.py           # Flask backend for chatbot
├── 📄 intents.json     # Chatbot's training data (patterns & responses)
├── 📄 README.md        # Project documentation (You're here! 😎)
```

---
Installation & Setup
1️⃣ Clone the Repository**
```bash
git clone https://github.com/Dtorredo/Chatbots-are-fun.git
cd Chatbots-are-fun
```
2️⃣ Set Up a Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate    # Windows
```
3️⃣ Install Dependencies
```bash
pip install flask flask-cors fuzzywuzzy python-Levenshtein
```
4️⃣ Run the Chatbot Server
```bash
python app.py
```
✅ Your chatbot will be live at http://127.0.0.1:5000 

---
How to Use
1️⃣ Open `b.html` in your browser.  
2️⃣ Type a message into the chatbot input field.  
3️⃣ The chatbot will reply based on its AI-powered responses.  
4️⃣ Have a conversation! 💬

---
Screenshot

<img width="1680" alt="Screenshot 2025-03-03 at 00 55 23" src="https://github.com/user-attachments/assets/530a3962-0287-4b7d-99df-35fc53d4d37a" />

---
 💡 Future Improvements
Improve NLP processing – Integrate GPT or TensorFlow for better responses.  
UI Enhancements – Add animations and better user interaction.  
Analytics Dashboard – Track user interactions and feedback.

---
Contributing
Want to improve the chatbot? Contributions are welcome! Fork the repo, make changes, and submit a PR. 😊
