const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#newsForm')

let visibility = false

// eventHub.addEventListener('newsFormButtonClicked', (customEvent) => {
//   visibility = !visibility

//   if (visibility) {
//     contentTarget.classList.remove('hide')
//   } else {
//     contentTarget.classList.add('hide')
//   }
// })

// Handle browser-generated click event in component
// contentTarget.addEventListener('click', (clickEvent) => {
//   if (clickEvent.target.id === 'addNews') {
//     const newsTitle = document.querySelector('#newsTitle').value
//     const newsSynopsis = document.querySelector('#newsSynopsis').value
//     const newsUrl = document.querySelector('#newsUrl').value

//     // Make a new object representation of a news
//     const newNews = {
//       newsTitle: newsTitle,
//       newsSynopsis: newsSynopsis,
//       newsUrl: newsUrl,
//       // timestamp: Date.now(),
//     }

//     // Change API state and application state
//     saveNews(newNews)
//   }
// })

const render = () => {
  // contentTarget.classList.add('hide')
  // const allNews = useNews()

  contentTarget.innerHTML = `
    <div class="formWrap">
      <form class="panel dh-Form marB1">

        <label for="newsTitle">Title</label>
        <input type="text" id="newsTitle">

        <label for="newsSynopsis">Synopsis</label>
        <textarea type="text" id="newsSynopsis" rows=5></textarea>

        <label for="newsUrl">Url</label>
        <input type="text" id="newsUrl">

        <button id="addNews" class="btnSmall marT1">Add News</button>
      </form>
    </div>
  `
}

export const NewsForm = () => {
  return render()
}
