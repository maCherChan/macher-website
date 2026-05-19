function setupCopy(btnId, feedbackId, textToCopy) {
  const btn = document.getElementById(btnId);
  const feedback = document.getElementById(feedbackId);
  let timer = null;

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      feedback.classList.add('visible');
      clearTimeout(timer);
      timer = setTimeout(() => feedback.classList.remove('visible'), 1500);
    });
  });
}

setupCopy('wechatBtn',  'wechatFeedback',  'maCherOfficial');
setupCopy('rednoteBtn', 'rednoteFeedback', '711065766');
