/* 
Вам необходимо создать функцию renderAlbums(), которая будет отображать данные об альбомах в DOM-дереве. Для получения данных используйте следующий url: «https://jsonplaceholder.typicode.com/albums»

HTML-шаблон для элемента альбома выглядит следующим образом:

<li>название альбома</li>
Итоговые HTML-элементы c информацией об имени альбома поместите в тег <ol> с классом, равным "data-container".

Для удобства необходимо добавить элемент <span> с текстом «Загрузка...» перед загрузкой альбомов, и спрятать этот элемент после загрузки данных.

Используйте исключительно async/await и try...catch...finally. Если при загрузке альбомов произошла ошибка, то внутрь тега с классом равным "data-container" поместите текст: «Произошла ошибка в получении данных об альбомах...».
 */

// const ALBUMS = 'https://jsonplaceholder.typicode.com/albums'
const ALBUMS = 'https://1jsonplaceholder.typicode.com/albums' // catch test

const createMainElements = () => {
  const dataContainer = document.createElement('ol')
  dataContainer.classList.add('data-container')

  const loader = document.createElement('span')
  loader.id = 'loader'
  loader.setAttribute('hidden', '')
  loader.textContent = 'Loading...'

  dataContainer.append(loader)

  document.querySelector('body').append(dataContainer)
}

const toggleLoader = () => {
  const loader = document.querySelector('#loader')
  if (loader) {


    const isLoading = loader.hasAttribute('hidden')

    if (isLoading) {
      loader.removeAttribute('hidden')
    } else {
      loader.setAttribute('hidden', '')
    }
  }
}

createMainElements()

const renderAlbums = async () => {
  toggleLoader()
  const dataContainer = document.querySelector('.data-container')
  try {
    const albumsRequest = await fetch(ALBUMS)
    if (!albumsRequest.ok) {
      throw new Error("failed request");

    }
    const albumsReponse = await albumsRequest.json()
    albumsReponse.forEach(({ title }) => {
      const taskLi = document.createElement('li')
      taskLi.classList.add('task-item')
      taskLi.textContent = title
      dataContainer.append(taskLi)

    })
  } catch (err) {
    dataContainer.textContent = 'Произошла ошибка.'
  } finally {
    toggleLoader()
  }

}

renderAlbums()

// https://codesandbox.io/p/sandbox/6zkkg2