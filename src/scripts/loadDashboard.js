/*
    Dashboard Loader
    Controls loading the dashboard components when the user logs in,
    Needed a function that loads all the components that will need the user session

    Authors: Heidi Sprouse
*/

import { userArea } from "./users/userArea.js"
import { EventList } from "./events/EventList.js"
import { EventForm } from "./events/EventForm.js"
import { NewsList } from './news/NewsList.js'

//add all functions to load theh components here
export const loadDashboard = (currentUserId) => {
    userArea(currentUserId)
    EventForm()
    EventList(currentUserId) //will need to edit EventList to take a parameter of currentUserId
    NewsList(currentUserId)
}

//clears the dashboard to prevent conflicts
export const clearDashboard = () => {
  const clearTargets = [
    '.user', //
    '.news',
    '.events',
    '.tasks',
    '.chat',
  ]

  clearTargets.forEach(
    (component) => (document.querySelector(component).innerHTML = '')
  )
}
