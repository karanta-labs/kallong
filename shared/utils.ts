const ALLOWED_PATTERN = /^[a-zA-Z가-힣0-9\s\-_]*$/;

export const validateInput = (
  value: string,
  maxLength: number
): string | null => {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return '값을 입력해주세요.';
  }

  if (trimmed.length > maxLength) {
    return `${maxLength}자 이하로 입력해주세요.`;
  }

  if (!ALLOWED_PATTERN.test(value)) {
    return '영문, 한글, 숫자, 공백, 하이픈(-), 언더스코어(_)만 사용 가능합니다.';
  }

  return null;
};
