const { storybook } = require('./storybookmodel')

const viewStoryBooks = (req, res) => {
  let data = {
    empty: null
  }
  const StoryStream = new storybook()
  
  StoryStream.viewAllStoryBooks(req, res)
}

const viewBookByTitle = (req, res) => {  
  let title = req.params.title.replace(/-/g, ' ')
  let data = {
    title
  }
  const StoryStream = new storybook()
  StoryStream.findStoryBookByName(data, req, res)
}

const viewBookById = async (req, res) => {
  let data = {
    id: req.params.id
  }
  const StoryStream = new storybook()
  await StoryStream.findStoryBookById(data, req, res)
}

const viewBookByAuthor = (req, res) => {
  let author = req.params.author.replace(/-/g, ' ')
  let data = {
    author
  }
  const StoryStream = new storybook()
  StoryStream.findStoryBookByAuthor(data, req, res)
}

module.exports = {
  viewStoryBooks,
  viewBookByTitle,
  viewBookById,
  viewBookByAuthor
}
