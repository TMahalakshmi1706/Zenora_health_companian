from app.services.ocr_service import extract_text

def main():
    # Change this to your actual image file name
    image_path = "D:\zenora\Zenora_health_companian\health-backend\img.jpeg"

    with open(image_path, "rb") as f:
        image_bytes = f.read()

    text = extract_text(image_bytes)
    print("===== OCR OUTPUT =====")
    print(text)
    print("======================")

if __name__ == "__main__":
    main()
