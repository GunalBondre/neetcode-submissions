class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded_str = ""
        for str in strs:
            part = f"{len(str)}:{str}"
            encoded_str+=part
        return encoded_str


    def decode(self, s: str) -> List[str]:
        decoded_str = []
        i = 0
        while i < len(s):
            j = i
            while s[j]!= ':':
                j = j + 1
            length = int(s[i:j])
            i = j + 1
            d = s[i : i + length]
            decoded_str.append(d)
            i += length
        return decoded_str


