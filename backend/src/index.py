from flask import Flask, request, jsonify
from flask_cors import CORS
from handlers.get_video_details import get_video_details
from handlers.get_video_id import extract_video_id
from handlers.get_formats import get_video_formats


app = Flask(__name__)
CORS(
    app,
    resources={r"/*": {"origins": "http://localhost:5173"}},
    methods=["POST", "GET"],
)


@app.route("/get-video", methods=["POST"])
def get_video():
    try:
        data = request.get_json()
        youtube_link = data.get("link")

        if not youtube_link:
            return jsonify(None), 400

        video_info = get_video_details(youtube_link)

        if video_info is None:
            return jsonify(None), 200

        return jsonify(video_info), 200

    except Exception as e:
        return jsonify(None), 500


@app.route("/get-video-formats", methods=["POST"])
def get_video_formats_route():
    try:
        data = request.get_json()
        link = data.get("link")
        video_id = extract_video_id(link)

        if not video_id:
            return jsonify({"error": "Video ID is required"}), 400

        formats = get_video_formats(video_id)

        if formats is None or (formats["audio"] is None and formats["video"] is None):
            return jsonify(None), 404

        return jsonify(formats), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9090, debug=True)
