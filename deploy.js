const ghPages = require("gh-pages")

ghPages.publish("build", err => {
    console.error(err)
})