document.addEventListener('DOMContentLoaded', function(){
  const intrance = document.getElementById('intrance')

  function intranceToIndexPage() {
    const url = location.href
    const urlSplit = url.split('/')
    const urlSplitWithoutLastEl = urlSplit.slice(0, urlSplit.length - 1)
    const newUrl = urlSplitWithoutLastEl.join('/')
    window.location = newUrl
  }

  intrance.addEventListener('click', intranceToIndexPage)

});