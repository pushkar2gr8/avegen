export const images = {
  veryUnhappy: require('./veryUnhappy.png'),
  neutral: require('./neutral.png'),
  unhappy: require('./unhappy.png'),
  veryHappy: require('./veryHappy.png'),
  happy: require('./happy.png'),
};

export const Constants = {
  Home: 'Home',
  Trackers: 'Trackers',
  Login: 'login',
  mobile: 'mobile',
  Moods: [
    {title: 'Very Unhappy', icon: images.veryUnhappy},
    {title: 'Unhappy', icon: images.unhappy},
    {title: 'Neutral', icon: images.neutral},
    {title: 'Happy', icon: images.happy},
    {title: 'Very Happy', icon: images.veryHappy},
  ],
};
