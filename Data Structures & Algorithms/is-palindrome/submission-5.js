class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let str = "";

  for (let i = 0; i < s.length; i++) {
    if (
 (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
    ) {
      str += s[i]?.toLowerCase();
    }
  }
  let left = 0;
  let right = str.length - 1;
  console.log(str);
  while (left < right) {
    if (str[left] === str[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;

    }
}
