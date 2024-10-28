import yt_dlp
from handlers.get_video_id import extract_video_id


def get_video_details(link: str):
    try:
        video_id = extract_video_id(link)
        if not video_id:
            return None
        simplified_link = f"https://www.youtube.com/watch?v={video_id}"

        ydl_options = {
            "quiet": True,
            "no_warnings": True,
            "extract_flat": True,
        }

        with yt_dlp.YoutubeDL(ydl_options) as ydl:
            info = ydl.extract_info(simplified_link, download=False)

        if not info:
            return None

        thumbnails = info.get("thumbnails", [])
        thumbnail_url = thumbnails[-1]["url"] if thumbnails else None

        video_info = {
            "link": link,
            "title": info.get("title"),
            "description": info.get("description"),
            "views": info.get("view_count"),
            "duration": info.get("duration"),
            "author": info.get("uploader"),
            "publish_date": info.get("upload_date"),
            "thumbnail": thumbnail_url,
        }

        return video_info

    except Exception:
        return None
