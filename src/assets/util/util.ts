/**
 * Function that downloads a file from a url or path in its parametre
 * @param url the url or path of the file you want to download
 * @author Oriol Plazas León
 * @since 12/03/2026
 */
export const downloadFromPath = (path: string) => {
  const a = document.createElement('a')
  a.href = path
  a.download = ''
  a.click()
}

/**
 * Arrow function that opens a link in a new tab
 * @param url the url you want to open in a new tab
 * @author Oriol Plazas León
 * @since 27/02/2026
 * @see window()
 */
export const openLink = (url: string): void => {
  window.open(url, '_blank')
}

/**
 * Arrow function that scrolls to an id
 * @param id where you want to scroll to
 * @author Oriol Plazas León
 * @since 15/03/2026
 * @see window()
 */
export const scrollToId = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
