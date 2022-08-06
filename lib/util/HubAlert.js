import RNProgressHud from 'progress-hud';

export const HubAlert = (time, callback) => {
  callback();

  setTimeout(() => {
    RNProgressHud.dismiss();
  }, time);
};

export const DelayAlert = callback => {
  HubAlert(1000, callback);
};
