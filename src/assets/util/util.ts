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
