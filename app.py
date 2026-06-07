from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)

genai.configure(
    api_key=os.environ.get("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    message = data.get("message", "")

    try:

        response = model.generate_content(
            message
        )

        return jsonify({
            "reply": response.text
        })

    except Exception as e:

        return jsonify({
            "reply": f"Error: {str(e)}"
        })

@app.route("/")
def home():
    return "DeepJarvis Backend Running"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
