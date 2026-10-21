export const copyTextToClipboard = (text: string, onSuccess?: () => void) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        fallbackCopy(text, onSuccess);
      });
    } else {
      fallbackCopy(text, onSuccess);
    }
  } catch (e) {
    fallbackCopy(text, onSuccess);
  }
};

const fallbackCopy = (text: string, onSuccess?: () => void) => {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    if (onSuccess) onSuccess();
  } catch (err) {
    // Ignore clipboard errors in restricted sandboxes
  }
};