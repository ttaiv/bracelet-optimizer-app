"""Helper functions"""


def preprocess_texts(texts: list[str]) -> list[str]:
    # Make texts upper case and remove spaces
    texts_upper_no_spaces: list[str] = [text.upper().replace(" ", "") for text in texts]
    # Remove texts that contain characters other than A-Z
    allowed_texts = [
        text
        for text in texts_upper_no_spaces
        if all(letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for letter in text)
    ]

    return allowed_texts
