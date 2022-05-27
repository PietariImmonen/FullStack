const { fromPairs } = require('lodash');
var _ = require('lodash');

const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
      const length = blogs.length
      let init = 0

      for(let i = 0; i < length; i++) {
          init += blogs[i].likes
      }
      return init
    //blogs.reduce(function (prev,cur) {return prev + cur.likes}, 0)
  }

const favoriteBlog = (blogs) => {
    const likes = blogs.map(i => {
        return i.likes
    })

    const max = Math.max( ...likes )
    return blogs.find(i => i.likes === max)
}

const favoriteAuthor = (blogs) => {
    const authors = blogs.map(i => {
        return i.author
    })

    const result = _.head(_(authors)
    .countBy()
    .entries()
    .maxBy(_.last));
    return result
}



const authorMostLikes = (blogs) => { 
    const authorLike = blogs.map(({author, likes}) => ({author, likes}))

    let combined = authorLike.reduce((i, j) => {
        i[j.author] = (i[j.author] || 0) + j.likes;
        return i;
      }, {});

    let dataArray = []

    for(let o in combined) {
        let key = Object.keys(combined)[0]
        dataArray.push({"author": key, "likes": combined[o]})
    }
    return dataArray[0]
}


  
module.exports = {
    dummy,
    totalLikes,
    favoriteAuthor,
    favoriteBlog,
    authorMostLikes
  }