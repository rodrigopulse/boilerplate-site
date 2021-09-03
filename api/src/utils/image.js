import fs from 'fs'

export const renameImage = (image, name) => {
  fs.rename(`./images/${image}`, `./images/${name}`, function (err) {
    if (err) {
      console.log('ERROR: ' + err)
    } else {
      return name.toString()
    }
  })
}
