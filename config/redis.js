const redis = require('redis');

const redisUrl = `redis://localhost:6379`;
const redisClient = redis.createClient({
    url: redisUrl,
});

const connectRedis = async function() {
    try {
        await redisClient.connect();
        console.log('Redis client connected...');
    } catch (e) {
        console.log(e);
        console.log('Retry connect in 5s');
        setTimeout(() => connectRedis(), process.env.RETRY_TIME);
    }
}

module.exports = connectRedis();
