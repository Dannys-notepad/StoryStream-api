const { storybook } = require('./storybookmodel')

const viewStoryBooks = (req, res) => {
  let data = {
    empty: null
  }
  const StoryStream = new storybook(data, req, res)
  StoryStream.viewAllStoryBooks(res)
  
}

module.exports = {
  viewStoryBooks
}
