from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random
from fuzzywuzzy import process  

app = Flask(__name__)
CORS(app)  

# Load chatbot data
with open("intents.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# Function to get one chatbot response
def get_response(user_input):
    best_match = None
    best_score = 0

    for intent in data["intents"]:
        for pattern in intent["patterns"]:
            match_score = process.extractOne(user_input, intent["patterns"])[1]
            if match_score > best_score:
                best_score = match_score
                best_match = intent

    if best_score > 70 and best_match:
        return random.choice(best_match["responses"])

    return "I'm here to help. Could you clarify what you mean?"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    print("Received request:", data)

    user_message = data.get("message", "")
    print("User message:", user_message)

    response = get_response(user_message)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
