from yt_dlp import YoutubeDL


def get_video_formats(video_id: str):
    video_url = f"https://www.youtube.com/watch?v={video_id}"
    ydl_opts = {"format": "bestaudio+bestvideo/best", "skip_download": True}

    try:
        with YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(video_url, download=False)

            audio_formats = [
                {
                    "size": (
                        round(f["filesize"] / 1024) if f.get("filesize") else None
                    ),
                    "bitrate": int(f["abr"]) if f.get("abr") else None,
                    "type": f.get("ext"),
                    "src": f.get("url"),
                }
                for f in info["formats"]
                if f.get("acodec") != "none"
                and f.get("vcodec") == "none"
                and f.get("abr") is not None
                and f.get("ext") is not None
                and f.get("url") is not None
            ]

            video_formats = [
                {
                    "size": (
                        round(f["filesize"] / 1024, 2) if f.get("filesize") else None
                    ),
                    "resolution": f.get("resolution"),
                    "type": f.get("ext"),
                    "src": f.get("url"),
                }
                for f in info["formats"]
                if f.get("acodec") == "none"
                and f.get("vcodec") != "none"
                and f.get("resolution") is not None
                and f.get("ext") is not None
                and f.get("url") is not None
            ]

            audio_formats = [
                format_item
                for format_item in audio_formats
                if all(value is not None for value in format_item.values())
            ] or None

            video_formats = [
                format_item
                for format_item in video_formats
                if all(value is not None for value in format_item.values())
            ] or None

            return {"audio": audio_formats, "video": video_formats}
    except Exception as e:
        return None
