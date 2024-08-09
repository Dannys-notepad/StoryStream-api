const { storybook } = require('./storybookmodel')

//@des View all Storybooks
//@route /api/{userapikey}/storybooks
//@method GET
const viewStoryBooks = (req, res) => {
  let data = {
    empty: null
  }
  const StoryStream = new storybook()
  
  StoryStream.viewAllStoryBooks(req, res)
}

//@des Find storybook by title
//@route /api/{userapikey}/storybooks/title/{storybooktitle}
//@method GET
const viewBookByTitle = (req, res) => {  
  let title = req.params.title.replace(/-/g, ' ')
  let data = {
    title
  }
  const StoryStream = new storybook()
  StoryStream.findStoryBookByName(data, req, res)
}

//@des Find storybook by id
//@route /api/{userapikey}/storybooks/id/{storybookid}
//@method GET
const viewBookById = async (req, res) => {
  let data = {
    id: req.params.id
  }
  const StoryStream = new storybook()
  await StoryStream.findStoryBookById(data, req, res)
}

//@des Find storybook by author
//@route /api/{userapikey}/storybooks/author/{storybookauthor}
//@method GET
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
