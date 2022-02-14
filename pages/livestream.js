const constants = require('../config/constants');

const { I } = inject();

module.exports = {
  locators: {
    creators_screen: '[data-testid=creators-screen]',
    creators_screen_content: '[data-testid=creators-screen-content]',
    influencer_name_text: '[data-testid=influencer-name-text]',
    video_call_button: '[data-testid=video-call-button]',
    audio_call_button: '[data-testid=audio-call-button]',
    message_me_button: '[data-testid=message-me-button]',
    surprise_me_button: '[data-testid=surprise-me-button]',
    card_cover: '[data-testid=card-cover]',
    first_card: '//*[@id="is-search"]/div[2]/div[1]/section/div/div/div[2]/div[1]/div/a[1]/article/div',
  },

  openLivestream() {
    I.click(this.locators.first_card);
    I.wait(5);
  },

  checkChatUrl() {
    I.seeInCurrentUrl('/chat');
  },

  checkPsychicUrl() {
    I.seeInCurrentUrl('/chat/LinaOldman');
  },

  checkCreatoresScreenSection() {
    I.seeElement(this.locators.creators_screen);
  },

  checkCreatoresScreenContentSection() {
    I.seeElement(this.locators.creators_screen_content);
  },

  checkInfluencerNameSection() {
    I.seeElement(this.locators.influencer_name_text);
  },

  checkResumeSection() {
    I.see(constants.PROFILE_RESUME);
  },

  checkProfileButtons() {
    I.seeElement(this.locators.video_call_button);
    I.seeElement(this.locators.audio_call_button);
    I.seeElement(this.locators.message_me_button);
    I.seeElement(this.locators.surprise_me_button);
  },

  clickInWatchMe() {
    I.click(this.locators.card_cover);
    I.wait(5);
  },
}
