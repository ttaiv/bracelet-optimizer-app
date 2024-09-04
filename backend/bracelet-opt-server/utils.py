"""Helper functions"""


def preprocess_texts(texts: list[str]) -> list[str]:
    """
    Make texts upper case, remove spaces and remove texts that contain characters other than A-Z.
    Does not modify the original texts.

    Args:
        texts (list[str]): A list of texts.

    Returns:
        list[str]: The preprocessed texts.
    """
    # Make texts upper case and remove spaces
    texts_upper_no_spaces: list[str] = [text.upper().replace(" ", "") for text in texts]
    # Remove texts that contain characters other than A-Z
    allowed_texts = [
        text
        for text in texts_upper_no_spaces
        if all(letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for letter in text)
    ]

    return allowed_texts


def calculate_leftover_letters(
    starting_letters: dict[str, int], chosen_texts: list[str]
) -> dict[str, int]:
    """
    Calculate the leftover letters after choosing certain texts.
    Returns a new dictionary where the occurrences of each letter in the
    chosen texts are subtracted from the starting letter counts.

    Args:
        starting_letters (dict[str, int]): The letter counts before choosing any texts.
        chosen_texts (list[str]): The texts that were chosen.

    Returns:
        dict[str, int]: The leftover letter counts.
    """
    leftover_letters = starting_letters.copy()
    for text in chosen_texts:
        for letter in text:
            if letter not in leftover_letters:
                raise ValueError(
                    f"Letter {letter} not in starting letters when calculating leftover letters."
                )
            if leftover_letters[letter] == 0:
                raise ValueError(
                    f"Letter {letter} has already been used up when calculating leftover letters."
                )
            leftover_letters[letter] -= 1

    return leftover_letters
