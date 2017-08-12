var spoilers = document.querySelectorAll('.spoiler')

var createButton = function(content) {
    var button = document.createElement('button')
    button.textContent = content
    return button
}

var affectButton = function(button, spoilElement) {
    (function(spoilElement) {
        button.addEventListener('click', function(e) { 
            var parentButton = this.parentElement
            parentButton.insertBefore(spoilElement.cloneNode(true), this)   
            this.remove()
            e.preventDefault()
            
        })
    })(spoilElement)
}

var createSpoilerButton = function(spoil) {
    var parent = spoil.parentElement
        var button = createButton("Show the Spoiler")
        var spoilerCopy = spoil.cloneNode(true)
        parent.insertBefore(button, spoil)
        spoil.remove()
        affectButton(button, spoilerCopy)
}

for(var i=0; i< spoilers.length ; i++) {
    var spoil = spoilers[i]
    createSpoilerButton(spoil)
    
}