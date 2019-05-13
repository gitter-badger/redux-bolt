import { events } from '../constants'
import * as Messages from '../messages'

/**
 * Handler responsible for dispatching mapped
 * bolt listeners whenever there's a trigger beign
 * called by one of the users
 */
export const triggerHandler = ({ dispatch, options }) => action => {
  const { trigger } = action[options.propName]

  // Checks whether the object returned contains an
  // array of listeners to call
  if (!Array.isArray(trigger) || trigger.length <= 0) {
    throw Messages.errors.triggerObjectMalformed
  }

  trigger.map(listenerObj => {
    const { listener, args } = listenerObj
    // If there's no listener, throws an error
    if (!listener) {
      throw Messages.errors.triggerObjectMalformed
    }

    if (options.listeners.hasOwnProperty(listener)) {
      dispatch(options.listeners[listener](...args))
    }
  })
}

export default {
  event: events.trigger,
  handler: triggerHandler
}
