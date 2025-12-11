import io
from typing import Optional

from PIL import Image
import pytesseract


# If tesseract is not in PATH, uncomment and set the exact path:
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


def extract_text(image_bytes: bytes) -> str:
    """
    Takes image bytes (from uploaded file) and returns extracted text using Tesseract OCR.
    """
    # Load image from bytes
    image = Image.open(io.BytesIO(image_bytes))

    # Run Tesseract OCR
    text = pytesseract.image_to_string(image)

    # Optional: clean up text
    text = text.strip()

    return text
