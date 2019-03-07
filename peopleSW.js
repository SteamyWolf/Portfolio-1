import { people } from '../data/people.js' 
import { planets } from '..data/planets.js'

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)    
}

const allHomeWorlds = people.map(person.map => {
    let founderWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imgURL = getLastNumber(person.url)
    getLastNumber(person.url)
    return {
        name: person.name,
        home: founderWorld.name,
        eye_color: person.eye_color,
        imagePath: 
    }
})

console.log(allHomeWorlds)

const mainContainer = document.createElement('div')
mainContainer.classname = 'container'

allHomewWorlds.forEach((person) => 
    let personElement = document.createElement('div')
    let planetElement = document.createElement('p')
    let imgElement = document.createElement('img')

    personElement.className = 'box'
    personElement.textContent = person.name
    planetElement.textContent = person.home

    personElement appendChild(planetElement)
    personElement.appendChild(imageElement)
    main
})