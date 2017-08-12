var spoilers = document.querySelectorAll('.spoiler')


for(var i=0; i< spoilers.length ; i++) {
    
    var spoil = spoilers[i]
    //  debugger    
    var parent = spoil.parentElement

    var button = document.createElement('button')
    button.textContent = "Show the Spoiler"
    var  p = document.createElement('p')
    // p.appendChild(button)
    var spoilerCopy = spoil.cloneNode(true)
    parent.insertBefore(button, spoil)
    spoil.remove();

    (function(spoilerCopy) {
        button.addEventListener('click', function(e) { 
            var parentButton = this.parentElement
            console.log(typeof(spoilerCopy))
            parentButton.insertBefore(spoilerCopy.cloneNode(true), this)   
            this.remove()
            e.preventDefault()
            
        })
    })(spoilerCopy)

    
}