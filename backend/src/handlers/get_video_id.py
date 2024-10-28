import re


def extract_video_id(link: str) -> str:
    pattern = (
        r"(?:v=|\/|vi=|be\/|\/embed\/|\/v\/|\/vi\/|watch\?v=|&v=)([0-9A-Za-z_-]{11})"
    )
    match = re.search(pattern, link)
    return match.group(1) if match else None
