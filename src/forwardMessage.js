const config = require('./config');

module.exports = async (api, anUpdate) => {
  try {
    await api.call('messages.forwardMessages', {
      from_peer: {
        _: 'inputPeerChannel',
        channel_id: config.targetPeerId,
        access_hash: config.targetPeerHash,
      },
      to_peer: {
        _: 'inputPeerChannel',
        channel_id: config.forwardedPeerId,
        access_hash: config.forwardedPeerHash,
      },
      id: [anUpdate.message.id],
      random_id: [
        Math.ceil(Math.random() * 0xffffff) +
          Math.ceil(Math.random() * 0xffffff),
      ],
    });
    console.log(`Message with id ${anUpdate.message.id} is redirected`);
  } catch (error) {
    console.error('Happen error when forward message');
    console.error(error);
  }
};