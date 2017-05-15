import * as Constants from './constants'

/**
 * Informs your server to connect the socket to a specific channel
 * 
 * @param {string} channel Name of the channel to join
 * @return {object} Bolt Object
 */
const joinChannel = channel => ({
  type: Constants.types.send,
  event: Constants.events.joinChannel,
  channel
})

export default joinChannel
