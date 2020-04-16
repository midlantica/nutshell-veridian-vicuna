const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#newsForm')
// const newsContent = document.querySelector('.news')

// let visibility = false
//
// eventHub.addEventListener('newsFormButtonClicked', (customEvent) => {
//   visibility = !visibility

//   if (visibility) {
//     contentTarget.classList.add('hide')
//   } else {
//     contentTarget.classList.remove('hide')
//   }
// })

// Handle browser-generated click event in component
eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'addNews') {
    const newsTitle = document.querySelector('#newsTitle').value
    const newsSynopsis = document.querySelector('#newsSynopsis').value
    const newsUrl = document.querySelector('#newsUrl').value

    // Make a new object representation of a news
    const newNews = {
      newsTitle: newsTitle,
      newsSynopsis: newsSynopsis,
      newsUrl: newsUrl,
    }

    // Change API state and application state
    saveNews(newNews)
  }
})

const render = () => {
  const contentTarget = document.querySelector('#newsForm')

  // contentTarget.classList.add('hide')
  // const allNews = useNews()

  contentTarget.innerHTML = `
    <div class="formWrap">
      <form class="dh-Form panel fadeBackground marB1">

        <label for="newsTitle">Title</label>
        <input type="text" id="newsTitle">

        <label for="newsSynopsis">Synopsis</label>
        <textarea type="text" id="newsSynopsis" rows=3></textarea>

        <label for="newsUrl">Url</label>
        <input type="text" id="newsUrl">

         <input type="hidden" id="timestamp" value="">

        <button id="addNews" class="btnSmall marT2">Add News</button>
      </form>
    </div>
  `
}

export const NewsForm = () => {
  return render()
}
