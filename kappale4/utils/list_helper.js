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
  
module.exports = {
    dummy,
    totalLikes
  }